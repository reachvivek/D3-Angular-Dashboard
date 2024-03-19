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
import { HorizontallyStackedBarChartComponent } from './charts/horizontally-stacked-bar-chart/horizontally-stacked-bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { SplitterModule } from 'primeng/splitter';
import { LoaderComponent } from '../standalone/loader/loader.component';

@NgModule({
  declarations: [
    ChartsComponent,
    FiltersComponent,
    LayoutComponent,
    HorizontallyStackedBarChartComponent,
    LineChartComponent,
    PieChartComponent,
    VerticalBarChartComponent,
  ],
  imports: [
    LoaderComponent,
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
    FormsModule,
    NgxChartsModule,
    SplitterModule,
  ],
})
export class DashboardModule {}
