import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
    { path: '', component: CalendarioComponent },
    { path: 'horarios/:fecha', loadComponent: () => import('./horario/horario.component').then(m => m.HorarioComponent) },
];
