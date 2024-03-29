import { Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => DashboardModule),
  },
];
