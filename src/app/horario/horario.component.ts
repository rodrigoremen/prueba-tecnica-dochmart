import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../service/reservas.service';
import { CommonModule } from '@angular/common';
import { toast } from 'ngx-sonner';


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

  constructor(private route: ActivatedRoute, private router: Router, private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.fechaSeleccionada = this.route.snapshot.paramMap.get('fecha');
    if (this.fechaSeleccionada) {
      this.getHorarios(this.fechaSeleccionada);
    }
  }

  manejarClick(horario: any): void {
    if (horario.estado === 'D') {
      this.reservar(horario.hora);
    } else if (horario.estado === 'O') {
      toast.error('Horario ocupado');
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
      this.router.navigate(['/reserva'], { state: { fecha: this.fechaSeleccionada, hora: hora } });
    }
  }
}