import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../swagger';
import { Subscription, firstValueFrom } from 'rxjs';
import { FilterService } from '../../../filter.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.scss',
})
export class VerticalBarChartComponent implements OnInit {
  filters: Subscription | undefined;
  isLoading: boolean = true;
  view: [number, number] = [500, 270];
  data: any = [];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Relevance';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Topic';
  colorScheme: any = 'ocean';
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
    public filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filters = this.filterService.filterChanged.subscribe((filter) => {
      this.updateChartData(filter);
    });

    this.loadData();
  }

  async updateChartData(filter: any[]): Promise<void> {
    try {
      this.isLoading = true;
      const response = await firstValueFrom(
        this.dataService.verticalBarChartData(...filter)
      );
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  async loadData(): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.dataService.verticalBarChartData()
      );
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  private handleDataResponse(response: any): void {
    if (response && response.length) {
      this.data = response;
    } else {
      // alert('Bar Chart Has Received No Data'); Todo
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
