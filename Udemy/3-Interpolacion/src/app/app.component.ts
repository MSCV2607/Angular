import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3-Interpolacion';
}
