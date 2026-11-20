import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.html',
  styleUrl: './project-cover.scss',
  host: { '[class.has-logo]': '!!project().logo', '[style.--cover-bg]': 'project().coverBg' },
})
export class ProjectCover {
  readonly project = input.required<Project>();
  readonly compact = input(false);
}
