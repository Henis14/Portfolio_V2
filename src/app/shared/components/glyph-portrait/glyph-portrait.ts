import {
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  input,
  signal,
  viewChild,
} from '@angular/core';

const RAMP = ' .·:-=+*#%@';

@Component({
  selector: 'app-glyph-portrait',
  templateUrl: './glyph-portrait.html',
  styleUrl: './glyph-portrait.scss',
})
export class GlyphPortrait implements OnDestroy {
  readonly src = input.required<string>();
  readonly fallback = input('HD');
  readonly caption = input('Fig. 01 / Portrait');
  readonly alt = input('Portrait');
  readonly cols = 96;
  readonly rows = signal(0);
  private out = viewChild.required<ElementRef<HTMLPreElement>>('out');
  private timer?: number;
  private lines: string[] = [];

  constructor() {
    afterNextRender(() => {
      const img = new Image();
      img.onload = () => this.draw(img);
      img.onerror = () => this.draw(null);
      img.src = this.src();
    });
  }

  private draw(img: HTMLImageElement | null) {
    const cols = this.cols;
    const aspect = img ? img.height / img.width : 1.15;
    const rows = Math.round(cols * aspect * 0.5);
    const c = document.createElement('canvas');
    c.width = cols;
    c.height = rows;
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    if (img) {
      ctx.drawImage(img, 0, 0, cols, rows);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, cols, rows);
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `900 ${rows}px Archivo, sans-serif`;
      ctx.save();
      ctx.scale(1, 0.5);
      ctx.fillText(this.fallback(), cols / 2, rows);
      ctx.restore();
    }
    const px = ctx.getImageData(0, 0, cols, rows).data;
    const lums: number[] = [];
    for (let i = 0; i < px.length; i += 4)
      lums.push((0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) / 255);
    const sorted = [...lums].sort((m, n) => m - n);
    const lo = sorted[Math.floor(sorted.length * 0.03)],
      hi = sorted[Math.floor(sorted.length * 0.97)] || 1;
    this.lines = [];
    for (let y = 0; y < rows; y++) {
      let line = '';
      for (let x = 0; x < cols; x++) {
        const lum = Math.min(1, Math.max(0, (lums[y * cols + x] - lo) / (hi - lo || 1)));
        line += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))];
      }
      this.lines.push(line);
    }
    this.rows.set(rows);
    this.animate();
  }

  private animate() {
    const pre = this.out().nativeElement;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      pre.textContent = this.lines.join('\n');
      return;
    }
    let shown = 0;
    const noise = () =>
      Array.from({ length: this.cols }, () => RAMP[(Math.random() * RAMP.length) | 0]).join('');
    this.timer = window.setInterval(() => {
      shown += 2;
      const head = this.lines.slice(0, shown);
      const scan = shown < this.lines.length ? [noise()] : [];
      pre.textContent = [...head, ...scan].join('\n');
      if (shown >= this.lines.length) clearInterval(this.timer);
    }, 28);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
