import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILLS } from '../../core/data/portfolio.data';
import { GlyphPortrait } from '../../shared/components/glyph-portrait/glyph-portrait';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-page-home',
  imports: [RouterLink, GlyphPortrait, ProjectCard, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly p = PROFILE;
  readonly featured = PROJECTS.slice(0, 4);
  readonly skills = SKILLS;
  readonly jobs = EXPERIENCE;
  readonly edu = EDUCATION;
  readonly tickerItems = [...new Set(SKILLS.flatMap((g) => g.items))];
  readonly approach = [
    {
      t: 'Data first',
      d: 'Design, build and optimize SQL Server structures and queries so the product can keep up with changing requirements.',
    },
    {
      t: 'Integrate cleanly',
      d: 'Bring in third-party REST APIs to extend what a product does and streamline data exchange between systems.',
    },
    {
      t: 'Own the bug',
      d: 'Track production issues across front end and back end, fix them, and keep the application stable.',
    },
  ];
}
