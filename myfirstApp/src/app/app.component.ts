import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Decorador
@Component({
  //En este caso tiene definido un selector, un template y un estilo (Archivo CSS)
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//Clase
export class AppComponent {
  title = 'myfirstApp';

  saludo = 'Hola Mundo';
}
