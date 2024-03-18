import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  isLoading: boolean = true;
  view: [number, number] = [500, 300];
  data: any = [
    {
      name: 'United States',
      series: [
        { name: 'Low', value: 48 },
        { name: 'High', value: 32 },
      ],
    },
    {
      name: 'Iran',
      series: [
        { name: 'Low', value: 72 },
        { name: 'Low', value: 60 },
      ],
    },
    { name: 'Saudi Arabia', series: [{ name: 'Low', value: 72 }] },
    { name: 'Egypt', series: [{ name: 'Low', value: 48 }] },
    { name: 'Russia', series: [{ name: 'Low', value: 24 }] },
    { name: 'Brazil', series: [{ name: 'Low', value: 48 }] },
    { name: 'Japan', series: [{ name: 'Low', value: 60 }] },
    { name: 'India', series: [{ name: 'Low', value: 48 }] },
  ];
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
  constructor() {}
  async ngOnInit(): Promise<void> {
    this.isLoading = false;
  }
}
