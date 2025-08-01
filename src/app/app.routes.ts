import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('../app/resource/auth/login/component').then(m => m.LoginComponent) },
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./resource/admin/dashboard/component').then((m) => m.DashboardComponent)
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./resource/admin/user/component').then((m) => m.UserComponent)
      },
      {
        path: 'survey',
        loadComponent: () =>
          import('./resource/admin/survey/component').then((m) => m.SurveyComponent)
      },
       {
        path: 'setting',
        loadComponent: () =>
          import('./resource/admin/setting/component').then((m) => m.SettingComponent)
      }
    ]
  }
];
