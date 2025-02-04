/*
Este es el componente raíz de la aplicación. Dado que es un standalone component, 
se define con standalone: true y se importa directamente en main.ts. Su selector 
(<app-root>) se utiliza en index.html para renderizar la aplicación.
*/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //Nombre del componente
  selector: 'app-root',
  //Componente de tipo standalone
  standalone: true,
  //Modulos que usaremos en nuestro componente
  imports: [RouterOutlet],
  //Plantilla URL que vamos a usar
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo';
}
