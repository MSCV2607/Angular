import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  
  @Output() notificarPadre = new EventEmitter<string>();
  
  
  enviarMensajeAlPadre() {
  //Emitir el mensaje al padre
  this.notificarPadre.emit("Mensaje desde el componente hijo");
  }

}
