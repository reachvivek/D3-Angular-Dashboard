import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../swagger';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.scss',
})
export class VerticalBarChartComponent implements OnInit {
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
  constructor(private dataService: DataService) {}
  async ngOnInit(): Promise<void> {
    const response = await firstValueFrom(
      this.dataService.verticalBarChartData()
    )
      .then((resp) => resp)
      .catch((err) => err);
    if (response && response.length) {
      this.data = response;
      this.isLoading = false;
    } else {
      this.isLoading = true;
      alert('Failed fetching data from server for Vertical Bar Chart');
      alert(response);
    }
  }
}
