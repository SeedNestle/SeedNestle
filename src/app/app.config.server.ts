import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes),
    // Add any other providers here if needed
  ]
};
