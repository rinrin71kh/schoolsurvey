import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
// src/main.ts or component.ts
// main.ts
import "survey-core/survey-core.min.css";
import { BorderlessLight, BorderlessDark } from 'survey-core/themes';


bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes)
  ]
});