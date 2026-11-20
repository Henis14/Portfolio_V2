import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILLS } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-resume',
  imports: [RevealDirective, RouterLink],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  readonly p = PROFILE;
  readonly jobs = EXPERIENCE;
  readonly edu = EDUCATION;
  readonly skills = SKILLS;
  readonly resumeProjects = PROJECTS.filter((x) => x.onResume);
  print() {
    window.print();
  }
}
