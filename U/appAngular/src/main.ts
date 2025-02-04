/*
Este archivo sigue siendo el punto de entrada de la aplicación. 
Sin embargo, en lugar de hacer bootstrap a un módulo (AppModule) 
como se hace con aplicaciones basadas en Módulos, ahora se hace 
directamente a un componente standalone.
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
