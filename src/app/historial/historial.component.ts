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
  misReservas: any[] = []; 

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.getMisReservas();
  }

  getMisReservas(): void {
    this.reservaService.getMisReservas().subscribe((reservas) => {
      this.misReservas = reservas;
      console.log('Mis Reservas:', this.misReservas);
    });
  }
}