import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from '../service/reservas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent {
  reservaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reservaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      fecha: ['', Validators.required], // Pasar la fecha seleccionada
      hora: ['', Validators.required],  // Pasar la hora seleccionada
    });

    // Recoger los datos del state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const { fecha, hora } = navigation.extras.state;
      this.reservaForm.patchValue({ fecha: fecha, hora: hora }); // Rellenar el formulario con la fecha y hora
    }
  }

  enviarReserva(): void {
    if (this.reservaForm.valid) {
      const reservaData = this.reservaForm.value;
      console.log('Datos de la reserva:', reservaData);
      // Redirigir al resumen de la reserva
      this.router.navigate(['/resumen', reservaData.fecha, reservaData.hora], {
        state: {
          nombre: reservaData.nombre,
          correo: reservaData.correo,
          telefono: reservaData.telefono,
        }
      });
    } else {
      this.reservaForm.markAllAsTouched();
    }
  }

  get nombre() {
    return this.reservaForm.get('nombre');
  }

  get correo() {
    return this.reservaForm.get('correo');
  }

  get telefono() {
    return this.reservaForm.get('telefono');
  }

  get fecha() {
    return this.reservaForm.get('fecha');
  }

  get hora() {
    return this.reservaForm.get('hora');
  }
}