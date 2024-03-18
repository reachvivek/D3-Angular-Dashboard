import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ChartsComponent } from './charts/charts.component';
import { FiltersComponent } from './filters/filters.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
    LayoutComponent,
    FiltersComponent,
    ChartsComponent,
  ],
})
export class DashboardModule {}
