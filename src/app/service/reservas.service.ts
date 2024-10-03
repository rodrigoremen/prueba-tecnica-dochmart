import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private reservas = [
    {
      fecha: '2023-09-01',
      horarios: [
        { hora: '07:00', estado: 'D' },
        { hora: '08:00', estado: 'D' },
        { hora: '09:00', estado: 'O' },
        { hora: '10:00', estado: 'O' },
        { hora: '11:00', estado: 'D' },
        { hora: '12:00', estado: 'D' },
        { hora: '13:00', estado: 'O' },
        { hora: '14:00', estado: 'D' },
        { hora: '15:00', estado: 'D' },
        { hora: '16:00', estado: 'O' },
        { hora: '17:00', estado: 'O' },
        { hora: '18:00', estado: 'D' },
      ]
    },
    {
      fecha: '2023-09-02',
      horarios: [
        { hora: '07:00', estado: 'O' },
        { hora: '08:00', estado: 'D' },
        { hora: '09:00', estado: 'D' },
        { hora: '10:00', estado: 'O' },
        { hora: '11:00', estado: 'D' },
        { hora: '12:00', estado: 'O' },
        { hora: '13:00', estado: 'D' },
        { hora: '14:00', estado: 'O' },
        { hora: '15:00', estado: 'D' },
        { hora: '16:00', estado: 'O' },
        { hora: '17:00', estado: 'D' },
        { hora: '18:00', estado: 'O' },
      ]
    },
  ];

  constructor() {
    this.generarReservasHastaFecha('2023-09-30');
  }

  private generarReservasHastaFecha(fechaFinal: string): void {
    const fechaInicio = new Date('2023-09-03');
    const fechaFin = new Date(fechaFinal);

    for (let fecha = fechaInicio; fecha <= fechaFin; fecha.setDate(fecha.getDate() + 1)) {
      const fechaStr = fecha.toISOString().split('T')[0];
      const horarios = [
        { hora: '07:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '08:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '09:00', estado: fecha.getDate() % 2 === 0 ? 'O' : 'D' },
        { hora: '10:00', estado: fecha.getDate() % 2 === 0 ? 'O' : 'D' },
        { hora: '11:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '12:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '13:00', estado: fecha.getDate() % 2 === 0 ? 'O' : 'D' },
        { hora: '14:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '15:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
        { hora: '16:00', estado: fecha.getDate() % 2 === 0 ? 'O' : 'D' },
        { hora: '17:00', estado: fecha.getDate() % 2 === 0 ? 'O' : 'D' },
        { hora: '18:00', estado: fecha.getDate() % 2 === 0 ? 'D' : 'O' },
      ];
      this.reservas.push({ fecha: fechaStr, horarios });
    }
  }

  getReservas(): Observable<any[]> {
    return of(this.reservas);
  }

  // Reservar un horario específico en una fecha
  reservarHorario(fecha: string, hora: string): Observable<boolean> {
    // Buscar la fecha seleccionada
    const reserva = this.reservas.find(r => r.fecha === fecha);

    if (reserva) {
      // Buscar el horario dentro de la fecha
      const horario = reserva.horarios.find(h => h.hora === hora);

      // Si el horario está disponible, marcarlo como ocupado
      if (horario && horario.estado === 'D') {
        horario.estado = 'O'; // Cambia el estado a ocupado
        return of(true);      // Devuelve true indicando que la reserva fue exitosa
      }
    }

    // Si no se encontró la fecha o el horario estaba ocupado, devuelve false
    return of(false);
  }
}