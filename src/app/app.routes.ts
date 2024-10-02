import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { HorarioComponent } from './horario/horario.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ResumenComponent } from './resumen/resumen.component';

export const routes: Routes = [
    { path: '', component: CalendarioComponent },
    { path: 'horarios/:fecha', component: HorarioComponent },
    { path: 'reserva', component: ReservaComponent }, // Ruta para el formulario de reserva
    { path: 'resumen/:fecha/:hora', component: ResumenComponent },
];
