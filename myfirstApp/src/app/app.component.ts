import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Asegúrate de usar 'styleUrls'
})
export class AppComponent {
  title = 'myfirstApp';
  saludo = 'Hola Mundo';
}
