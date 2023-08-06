import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  {
    path: 'page-a',
    loadComponent: () =>
      import('./pages/page-a/page-a.component'),
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./pages/page-b/page-b.component').then((m) => m.PageBComponent),
    loadChildren: () => 
      import('./section-b-pages/b.routes').then(m => m.routes)
  },
  {
    path: 'page-c',
    loadComponent: () =>
      import('./pages/page-c/page-c.component').then((m) => m.PageCComponent),
  },
];


