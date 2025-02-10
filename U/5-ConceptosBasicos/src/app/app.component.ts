import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadreComponent, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4-ComponentesPadreHijo';
}
