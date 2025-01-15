import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro Usuarios';

  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';

  registrarUsuario() {

    this.registrado = true;

    this.mensaje = 'Usuario registrado';
  }
}
