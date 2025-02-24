import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
mensaje: String = "";

resetearMensaje() {
 this.mensaje = "";
}
mostrarMensaje() {
  this.mensaje = "Hola hiciste clic en el boton";
}

}
