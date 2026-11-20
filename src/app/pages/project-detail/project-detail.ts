import { Component, HostListener, computed, effect, inject, input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../core/data/portfolio.data';
import { ProjectCover } from '../../shared/components/project-cover/project-cover';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-page-project-detail',
  imports: [RouterLink, RevealDirective, ProjectCover],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  readonly slug = input<string>('');
  private readonly index = computed(() => PROJECTS.findIndex((p) => p.slug === this.slug()));
  readonly project = computed(() => PROJECTS[this.index()]);
  readonly prev = computed(() => PROJECTS[(this.index() - 1 + PROJECTS.length) % PROJECTS.length]);
  readonly next = computed(() => PROJECTS[(this.index() + 1) % PROJECTS.length]);

  readonly active = signal<number | null>(null);
  readonly activeShot = computed(() => {
    const i = this.active();
    return i === null ? null : (this.project()?.screens?.[i] ?? null);
  });

  constructor() {
    const title = inject(Title);
    effect(() => {
      const p = this.project();
      title.setTitle(p ? `${p.title} | Henis D'costa` : "Project not found | Henis D'costa");
    });
  }

  open(i: number) {
    this.active.set(i);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.active.set(null);
    document.body.style.overflow = '';
  }

  step(dir: 1 | -1) {
    const count = this.project()?.screens?.length ?? 0;
    const i = this.active();
    if (i !== null && count) this.active.set((i + dir + count) % count);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.active() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.step(1);
    if (e.key === 'ArrowLeft') this.step(-1);
  }
}
