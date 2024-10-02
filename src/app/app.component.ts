import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarioComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practica-dochmart';
}
