import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../../../swagger';

@Component({
  selector: 'app-horizontally-stacked-bar-chart',
  templateUrl: './horizontally-stacked-bar-chart.component.html',
  styleUrl: './horizontally-stacked-bar-chart.component.scss',
})
export class HorizontallyStackedBarChartComponent implements OnInit {
  isLoading: boolean = true;
  view: [number, number] = [500, 300];
  data: any = [];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  showDataLabel: boolean = true;
  legendTitle: string = 'Impact';
  xAxisLabel: string = 'Intensity';
  yAxisLabel: string = 'Country';
  colorScheme: any = 'forest';
  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  constructor(private dataService: DataService) {}
  async ngOnInit(): Promise<void> {
    const response = await firstValueFrom(
      this.dataService.stackedBarChartData()
    )
      .then((resp) => resp)
      .catch((err) => err);
    if (response && response.length) {
      this.data = response;
      this.isLoading = false;
    } else {
      this.isLoading = true;
      alert('Failed fetching data from server for Stacked Bar Chart');
      alert(response);
    }
  }
}
