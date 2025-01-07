import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';  // Importa AppModule
import { AppComponent } from './app.component';  // No lo declares aquí

@NgModule({
  imports: [
    AppModule,  // Solo importa AppModule, no necesitas declarar AppComponent
    ServerModule,
    
  ],
  bootstrap: [AppComponent],  // Solo importa el componente en bootstrap
})
export class AppServerModule {}

