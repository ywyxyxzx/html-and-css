import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Home page',
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details').then(m => m.Details),
    title: 'Home details',
  },
  {
    path: 'base',
    loadComponent: () => import('./base-test/base-test').then(m => m.BaseTest),
    title: 'Base Test page',
  },
];
