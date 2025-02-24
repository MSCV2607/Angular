import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})

export class MostrarMensajeComponent {
  /**
   * Variable `mensaje` utilizada para almacenar y mostrar un mensaje en la plantilla.
   */
  mensaje: String = "";

  /**
   * Método para resetear el mensaje, estableciéndolo como una cadena vacía.
   */
  resetearMensaje() {
    this.mensaje = "";
  }

  /**
   * Método para actualizar el mensaje con un texto predefinido cuando el usuario hace clic en un botón.
   */
  mostrarMensaje() {
    this.mensaje = "Hola hiciste clic en el boton";
  }
}