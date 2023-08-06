import { Routes } from '@angular/router';
import { MY_NUMBER } from './tokens/my-number.token';
import { authGuard } from './guards/auth.guard';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  {
    path: 'page-a',
    loadComponent: () =>
      import('./pages/page-a/page-a.component'),
  },
  {
    path: 'page-b',
    canActivate: [() => inject(AuthService).status],
    resolve: {
      rochav: () => 80, 
      rashum: () => inject(AuthService).status
    },
    providers: [
      { provide: MY_NUMBER, useValue: 100}
    ],
    loadComponent: () =>
      import('./pages/page-b/page-b.component').then((m) => m.PageBComponent),
    loadChildren: () => 
      import('./section-b-pages/b.routes').then(m => m.routes)
  },
  {
    path: 'page-c/:id',
    loadComponent: () =>
      import('./pages/page-c/page-c.component').then((m) => m.PageCComponent),
  },
];


