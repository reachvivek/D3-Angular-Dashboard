import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { FiltersComponent } from './filters/filters.component';
import { LayoutComponent } from './layout/layout.component';

// Prime NG Modules
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChartsComponent, FiltersComponent, LayoutComponent],
  imports: [CommonModule, DashboardRoutingModule, DropdownModule, FormsModule],
})
export class DashboardModule {}
