import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { HorarioComponent } from './horario/horario.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ResumenComponent } from './resumen/resumen.component';
import { HistorialComponent } from './historial/historial.component';

export const routes: Routes = [
    { path: '', component: CalendarioComponent },
    { path: 'horarios/:fecha', component: HorarioComponent },
    { path: 'reserva', component: ReservaComponent }, 
    { path: 'resumen/:fecha/:hora', component: ResumenComponent },
    { path: 'historial', component: HistorialComponent }, 
];
