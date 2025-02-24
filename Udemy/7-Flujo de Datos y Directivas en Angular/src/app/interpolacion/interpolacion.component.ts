import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Edwin Morales',
    edad: 35
  };

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }

}
