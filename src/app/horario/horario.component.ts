import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.fechaSeleccionada = this.route.snapshot.paramMap.get('fecha');
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
      this.reservaService.reservarHorario(this.fechaSeleccionada, hora).subscribe((success) => {
        if (success) {
          console.log('Reserva exitosa');
          // Redirigir al resumen de la reserva o mostrar un mensaje
        } else {
          console.log('No se pudo realizar la reserva');
        }
      });
    }
  }
}
