import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = '¡Hola, has hecho click en el botón!'
  }

  resetearMensaje() {
    // Reiniciar el mensaje
    this.mensaje = '';
  }

}
