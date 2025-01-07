import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //In line template
  template: `
    <p>empleado works!</p>
  `,
  //styleUrl: './empleado.component.css'

  //In line styles
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class EmpleadoComponent {

}
