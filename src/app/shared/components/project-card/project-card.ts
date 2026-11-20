import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCover } from '../project-cover/project-cover';
import { Project } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, ProjectCover],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly dark = input(false);
}
