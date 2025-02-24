import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = 'Titulo Componente Hijo';

  // Getter de TypeScript
  get mostrarTitulo(){
    return this.titulo;
  }

  getTitulo(){
    return this.titulo;
  }
}
