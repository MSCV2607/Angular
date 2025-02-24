import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  standalone: true,
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {

  texto: String = '';


actualizarTexto(event: Event) {
const elementoInput = event.target as HTMLInputElement;
this.texto = elementoInput.value;
}

}
