import { Component, OnInit } from '@angular/core';
import { Subscription, firstValueFrom } from 'rxjs';
import { DataService } from '../../../../swagger';
import { FilterService } from '../../../filter.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  filters: Subscription | undefined;
  isLoading: boolean = true;
  view: [number, number] = [500, 300];
  label: string = 'Likelihood Distribution by Region';
  data: any = [];
  scheme: any = 'ocean';
  gradient: boolean = false;
  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
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
        this.dataService.pieChartData(...filter)
      );
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  async loadData(): Promise<void> {
    try {
      const response = await firstValueFrom(this.dataService.pieChartData());
      this.handleDataResponse(response);
    } catch (error) {
      this.handleDataError(error);
    }
  }

  private handleDataResponse(response: any): void {
    if (response && response.length) {
      this.data = response;
    } else {
      // alert('Pie Chart Has Received No Data'); Todo
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
