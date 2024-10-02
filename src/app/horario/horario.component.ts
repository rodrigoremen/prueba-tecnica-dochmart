import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../service/reservas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css'],
})
export class HorarioComponent implements OnInit {
  fechaSeleccionada: string | null = null;
  horarios: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private reservaService: ReservaService) {}

  ngOnInit(): void {
    // Obtener la fecha seleccionada de la ruta
    this.fechaSeleccionada = this.route.snapshot.paramMap.get('fecha');
    
    // Obtener los horarios de la fecha seleccionada
    if (this.fechaSeleccionada) {
      this.getHorarios(this.fechaSeleccionada);
    }
  }

  getHorarios(fecha: string): void {
    this.reservaService.getReservas().subscribe((reservas) => {
      const reserva = reservas.find((r) => r.fecha === fecha);
      if (reserva) {
        this.horarios = reserva.horarios;
      }
    });
  }

  reservar(hora: string): void {
    if (this.fechaSeleccionada) {
      // Aquí redirigimos a la página de reserva con los datos de fecha y hora
      this.router.navigate(['/reserva'], { state: { fecha: this.fechaSeleccionada, hora: hora } });
    }
  }
}