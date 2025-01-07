//Instruccion que nos permite acceder al componente desde fuera

import { Component } from "@angular/core";

//Decorador @Component
@Component ({

    //Selector
    selector: 'app-empleados',
    //templateUrl
    templateUrl: './empleados.component.html',
    //Style
    styleUrls: ['./empleados.component.css']

})
export class EmpleadosComponent {

}