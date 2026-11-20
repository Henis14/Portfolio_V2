import { Routes } from '@angular/router';

const title = (page: string) => `${page} | Henis D'costa`;

export const routes: Routes = [
  {
    path: '',
    title: "Henis D'costa | Full Stack Developer",
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    title: title('Projects'),
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'projects/:slug',
    title: title('Project'),
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'resume',
    title: title('Resume'),
    loadComponent: () => import('./pages/resume/resume').then((m) => m.Resume),
  },
  {
    path: 'about',
    title: title('About'),
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  { path: '**', redirectTo: '' },
];
