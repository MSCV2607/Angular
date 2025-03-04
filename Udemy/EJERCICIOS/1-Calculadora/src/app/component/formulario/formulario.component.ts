import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

//COMPONENTE HIJO
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar() {
    this.resultado = this.num1 + this.num2;
    this.resultadoSuma.emit(this.resultado);
  }

}
