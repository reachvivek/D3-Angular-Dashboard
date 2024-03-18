import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  view: [number, number] = [500, 300];
  data: any = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 40632,
          extra: {
            code: 'de',
          },
        },
        {
          name: '2000',
          value: 36953,
          extra: {
            code: 'de',
          },
        },
        {
          name: '1990',
          value: 31476,
          extra: {
            code: 'de',
          },
        },
      ],
    },
    {
      name: 'United States',
      series: [
        {
          name: '2010',
          value: 0,
          extra: {
            code: 'us',
          },
        },
        {
          name: '2000',
          value: 45986,
          extra: {
            code: 'us',
          },
        },
        {
          name: '1990',
          value: 37060,
          extra: {
            code: 'us',
          },
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 36745,
          extra: {
            code: 'fr',
          },
        },
        {
          name: '2000',
          value: 34774,
          extra: {
            code: 'fr',
          },
        },
        {
          name: '1990',
          value: 29476,
          extra: {
            code: 'fr',
          },
        },
      ],
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          value: 36240,
          extra: {
            code: 'uk',
          },
        },
        {
          name: '2000',
          value: 32543,
          extra: {
            code: 'uk',
          },
        },
        {
          name: '1990',
          value: 26424,
          extra: {
            code: 'uk',
          },
        },
      ],
    },
  ];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Impact';
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  constructor() {}
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
