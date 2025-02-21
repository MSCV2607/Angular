import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';

  //Variables de clases
  NumA: number = 0;
  NumB: number = 0;
  Resultado: number = 0;

  //Metodos resta
  restar(): void {
    this.Resultado = this.NumA - this.NumB;
  }

  //Metodos suma
  sumar(): void {
    this.Resultado = this.NumA + this.NumB;
  }
  
}
