import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('../app/resource/auth/login/component').then(m => m.LoginComponent) },
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./resource/admin/dashboard/component').then((m) => m.DashboardComponent)
  }
];
