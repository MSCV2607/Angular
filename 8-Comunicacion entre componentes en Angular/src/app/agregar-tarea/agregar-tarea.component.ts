import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  tarea: string = '';

  agregarTarea(nuevaTarea: string): void{
    this.tarea = nuevaTarea;
  }

}
