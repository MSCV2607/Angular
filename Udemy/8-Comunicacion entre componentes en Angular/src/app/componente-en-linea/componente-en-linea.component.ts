import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  standalone: true,
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p>Fuente más grande</p>
  `,
  styles: `
    h1{
      color: blue;
    }
    p{
      font-size: 20px;
    }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInline = 'Componente Inline';
}
