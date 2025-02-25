import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  
  /*  mensaje: string = ''; */
  
  /*   //Se emite una cadeba que recibimos del componente hijo
  recibirNotificacion(mensaje: string) {
    this.mensaje = mensaje;
    } */
   @ViewChild(HijoComponent) componenteHijo!: HijoComponent;
   cambiarMensajeHijo() {
   this.componenteHijo.cambiarMensaje("Mensaje desde el componente padre");
   }
}
