import { Component } from '@angular/core';
import e from 'express';

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
  empresa = "google";

  //binding bidireccional
  

  //metodo getter de edad
  getEdad() {
    return this.edad;
  }

  llamaEmpresa(value: string) {
  
  }

  //Binding de propiedades probado con cuadro txt de el html
  habilitacionCuadro = false;

  usuRegistado = false;

  //Property Binding
  getRegistroUsuario() {
    this.usuRegistado = false;
  }

  //Event Binding
  setusuarioRegistrado(event:Event) {
    //Para abrir una ventana emergente usamos alert
    //alert ('El usuario se acaba de registrar');
    //this.textoDeRegistro = 'El usuario se acaba de registrar';

    if((<HTMLInputElement>event.target).value == 'si'){
      this.textoDeRegistro = "El usuario se acab de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

  textoDeRegistro = 'No hay nadie registrado';

}
