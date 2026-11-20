import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class RevealDirective implements OnInit, OnDestroy {
  readonly appReveal = input<number | string>('');
  private el = inject(ElementRef<HTMLElement>);
  private io?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    const delay = Number(this.appReveal()) || 0;
    if (delay) {
      node.style.transitionDelay = `${delay}ms`;
      node.addEventListener('transitionend', () => (node.style.transitionDelay = ''), {
        once: true,
      });
    }
    if (!('IntersectionObserver' in window)) {
      node.classList.add('in');
      return;
    }
    this.io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('in');
            this.io?.disconnect();
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.io.observe(node);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
