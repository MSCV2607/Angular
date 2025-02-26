import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  imports: [],
  templateUrl: './nuevo-componente.component.html',
  styleUrl: './nuevo-componente.component.css'
})
export class NuevoComponenteComponent {
  tituloNuevoComponente = 'Nuevo Componente';
}
