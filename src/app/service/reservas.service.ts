import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private reservas = [
    { fecha: '2023-09-01', horarios: [ { hora: '07:00', estado: 'D' }, { hora: '08:00', estado: 'D' }, { hora: '09:00', estado: 'O' } ] },
    { fecha: '2023-09-02', horarios: [ { hora: '07:00', estado: 'O' }, { hora: '08:00', estado: 'D' }, { hora: '09:00', estado: 'D' } ] },
    // Agrega más fechas y horarios simulados
  ];

  constructor() {}

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
