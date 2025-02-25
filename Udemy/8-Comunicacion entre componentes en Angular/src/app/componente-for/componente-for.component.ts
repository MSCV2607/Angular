import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprender TypeScript'
  ];

  agregarTarea(nuevaTarea: string): void{
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }
}
