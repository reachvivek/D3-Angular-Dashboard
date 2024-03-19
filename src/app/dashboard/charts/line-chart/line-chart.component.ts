import { Component, OnInit } from '@angular/core';
import { Subscription, firstValueFrom } from 'rxjs';
import { DataService } from '../../../../swagger';
import { FilterService } from '../../../filter.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  filters: Subscription | undefined;

  isLoading: boolean = true;
  view: [number, number] = [500, 300];
  data: any = [];
  legendTitle: string = 'PESTLE';
  legendPosition: any = 'right';
  showXAxis: boolean = true;
  showGridLines: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Intensity';
  xAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}
  ngOnInit(): void {
    this.filters = this.filterService.filterChanged.subscribe((filter) => {
      this.updateChartData(filter);
    });

    this.loadData();
  }

  transformData() {
    for (let i = 0; i < this.data.length; i++) {
      const group = this.data[i];
      for (let j = 0; j < group.series.length; j++) {
        const item = group.series[j];
        const date = new Date(item.name);
        item.name = date;
      }
    }
  }

  async updateChartData(filter: any[]): Promise<void> {
    try {
      this.isLoading = true;
      const response = await firstValueFrom(
        this.dataService.lineChartData(...filter)
      );
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  async loadData(): Promise<void> {
    try {
      const response = await firstValueFrom(this.dataService.lineChartData());
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  private handleDataResponse(response: any): void {
    if (response && response.length) {
      this.data = response;
      this.transformData();
    } else {
      // alert('Line Chart Has Received No Data');
    }
    this.isLoading = false;
  }

  private handleDataError(error: any): void {
    console.error('Error fetching data:', error);
    alert('An error occurred while fetching data');
    this.isLoading = false;
  }

  ngOnDestroy() {
    if (this.filters) {
      this.filters.unsubscribe();
    }
  }
}
