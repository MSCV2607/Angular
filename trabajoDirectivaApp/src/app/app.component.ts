import { Component } from '@angular/core';

interface Entrada {
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro Usuarios';
  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';
  entradas: Entrada[] = [
    { nombre: 'Juan' },
    { nombre: 'Maria' },
    { nombre: 'Pedro' }
  ];

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'Usuario registrado';
  }
}
