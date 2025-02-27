import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  standalone: true,
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {

  isAutenticado = false;

  alternarAutenticado(): void {
    this.isAutenticado = !this.isAutenticado;
  }

}
