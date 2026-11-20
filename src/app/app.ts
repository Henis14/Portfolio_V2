import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer],
  template: `
    <a class="skip" [routerLink]="[]" fragment="main">Skip to content</a>
    <app-header />
    <main id="main"><router-outlet /></main>
    <app-footer />
  `,
})
export class App {}
