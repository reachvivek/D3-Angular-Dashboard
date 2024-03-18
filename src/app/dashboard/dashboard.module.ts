import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { FiltersComponent } from './filters/filters.component';
import { LayoutComponent } from './layout/layout.component';

// Prime NG Modules
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { NormalizedAreaChartComponent } from './charts/normalized-area-chart/normalized-area-chart.component';

@NgModule({
  declarations: [
    ChartsComponent,
    FiltersComponent,
    LayoutComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    NormalizedAreaChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
    FormsModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}
