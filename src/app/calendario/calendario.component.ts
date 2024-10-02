import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../service/reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar el CommonModule
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  diasDisponibles: any[] = [];

  constructor(private reservaService: ReservaService, private router: Router) {} // Inyecta Router

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas(): void {
    this.reservaService.getReservas().subscribe((data) => {
      this.diasDisponibles = data.map((reserva: any) => ({
        fecha: reserva.fecha,
        disponible: reserva.horarios.some((h: any) => h.estado === 'D'),
      }));
    });
  }

  // Modifica este método para navegar a la selección de horarios
  seleccionarFecha(dia: any): void {
    if (dia.disponible) {
      console.log('Fecha seleccionada:', dia.fecha);
      // Redirigir a la página de selección de horarios
      this.router.navigate(['/horarios', dia.fecha]); // Utiliza el Router para navegar
    }
  }
}
