import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarioComponent,
    ReactiveFormsModule,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practica-dochmart';
}
