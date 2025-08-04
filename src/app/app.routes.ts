import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./resource/account/auth/login/component').then(m => m.LoginComponent) },
  {
    path: 'account',
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./resource/account/profile/component').then(m => m.ProfileComponent)
      }
    ]
  },
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
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./resource/admin/survey/component').then(m => m.SurveyComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./resource/admin/survey/create/component').then(m => m.CreateSurveyComponent)
          },
         {
            path: 'view',
            loadComponent: () =>
              import('./resource/admin/survey/view/component').then(m => m.ViewSurveyComponent)
          }

        ]
      },
       {
        path: 'setting',
        loadComponent: () =>
          import('./resource/admin/setting/component').then((m) => m.SettingComponent)
      }
    ]
  }
];
