import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EDUCATION, EXPERIENCE, PROFILE } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-page-about',
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly p = PROFILE;
  readonly jobs = EXPERIENCE;
  readonly edu = EDUCATION;
}
