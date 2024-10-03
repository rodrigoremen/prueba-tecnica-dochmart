import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../service/reservas.service';
import { CommonModule } from '@angular/common';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent {
  fecha: string | null = null;
  hora: string | null = null;
  nombre: string | null = null;
  correo: string | null = null;
  telefono: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private reservaService: ReservaService) {
    this.fecha = this.route.snapshot.paramMap.get('fecha');
    this.hora = this.route.snapshot.paramMap.get('hora');
    
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const { nombre, correo, telefono } = navigation.extras.state;
      this.nombre = nombre;
      this.correo = correo;
      this.telefono = telefono;
    }
  }

  confirmarReserva(): void {
    if (this.fecha && this.hora) {
      this.reservaService.reservarHorario(this.fecha, this.hora).subscribe(success => {
        if (success) {
          console.log('Reserva confirmada con éxito');
          toast.success('Tu reserva ha sido confirmada con éxito.');
          this.router.navigate(['/']); 
        } else {
          console.log('No se pudo realizar la reserva');
          toast.error('No se pudo realizar la reserva. Intenta de nuevo más tarde.');
        }
      });
    }
  }
}
