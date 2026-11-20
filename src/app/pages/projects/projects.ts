import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../core/data/portfolio.data';
import { ProjectCover } from '../../shared/components/project-cover/project-cover';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, RevealDirective, ProjectCover],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly kinds = ['All', ...new Set(PROJECTS.map((p) => p.kind))];
  readonly filter = signal('All');
  readonly list = computed(() =>
    this.filter() === 'All' ? PROJECTS : PROJECTS.filter((p) => p.kind === this.filter()),
  );
}
