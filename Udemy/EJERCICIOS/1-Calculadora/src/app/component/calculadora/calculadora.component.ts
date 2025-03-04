import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, FormularioComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado: number | null = null;
procesarResultado(resultado: number) {
this.resultado = resultado;
}
 

}
