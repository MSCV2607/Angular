import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-online',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tienda-online.component.html',
  styleUrl: './tienda-online.component.css'
})
export class TiendaOnlineComponent {
  title = 'Lista de Productos';

  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];

  descripcionInput: string = '';
  precioInput: number = 0;

  agregarProducto() {
    //Validacion
    if (this.descripcionInput.trim() === '' || this.precioInput <= 0) {
      alert('Por favor ingrese una descripción y un precio válido.');
      return;
    }

    this.productos.push(new Producto(this.descripcionInput, this.precioInput));

    // Limpiar los campos después de agregar
    this.descripcionInput = '';
    this.precioInput = 0;
  }
}

// Clase Producto
//PUEDO PONERLO APARTE EN UN ARCHIVO PRODUCTO.TS
export class Producto {
  constructor(public descripcion: string, public precio: number) {}
}
