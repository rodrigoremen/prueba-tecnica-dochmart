import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../service/reservas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  reservas: any[] = [];  // Lista de reservas anteriores

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.getReservasAnteriores();
  }

  getReservasAnteriores(): void {
    this.reservaService.getReservas().subscribe((reservas) => {
      this.reservas = reservas;
      console.log('Reservas obtenidas:', this.reservas);
    });
  }
}
