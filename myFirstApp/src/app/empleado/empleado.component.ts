import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //In line template
  /* template: `
    <p>empleado works!</p>
  `, */
  //External template
  templateUrl: './empleado.component.html',

  //styleUrl: './empleado.component.css'
  //In line styles
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class EmpleadoComponent {
  nombre = 'Juan';
  apellido = 'Perez';
  private edad = 28;
  //empresa = 'Micros';

  //metodo getter de edad
  getEdad() {
    return this.edad;
  }

  llamaEmpresa(value: string) {
  
  }

  //Binding de propiedades probado con cuadro txt de el html
  habilitacionCuadro = true;

  usuRegistado = false;

  getRegistroUsuario() {
    this.usuRegistado = true;
  }

}
