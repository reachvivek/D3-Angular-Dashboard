import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../../../swagger';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
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
  constructor(private dataService: DataService) {}
  async ngOnInit(): Promise<void> {
    const response = await firstValueFrom(this.dataService.lineChartData())
      .then((resp) => resp)
      .catch((err) => err);
    if (response && response.length) {
      this.data = response;
      this.transformData();
      this.isLoading = false;
    } else {
      alert('Failed to get response from server for Line Chart!');
      alert(response);
      this.isLoading = true;
    }
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
}
