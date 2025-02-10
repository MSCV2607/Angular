import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  private titulo = 'Componente Hijo';

  //Metodo Getter de Typescript
  get mostrarTitulo(): string {
    return this.titulo;
  }

  getTitulo(): string {
    return this.titulo;
  }

}
