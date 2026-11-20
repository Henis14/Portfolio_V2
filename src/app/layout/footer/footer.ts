import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly p = PROFILE;
  readonly year = new Date().getFullYear();
}
