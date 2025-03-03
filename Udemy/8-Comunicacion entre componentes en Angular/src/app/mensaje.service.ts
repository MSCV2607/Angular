import { Injectable } from '@angular/core';

@Injectable({
  //clase de tipo singleton
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = 'Hola mensaje desde el servicio';

  constructor() { }

  obtenerMensaje(): string {
    return this.mensaje;
  }
}
