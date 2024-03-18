import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normalized-area-chart',
  templateUrl: './normalized-area-chart.component.html',
  styleUrl: './normalized-area-chart.component.scss',
})
export class NormalizedAreaChartComponent implements OnInit {
  isLoading: boolean = true;
  view: [number, number] = [500, 300];
  data: any = [
    {
      name: 'Belarus',
      series: [
        {
          value: 5764,
          name: '2016-09-21T15:40:26.710Z',
        },
        {
          value: 2938,
          name: '2016-09-14T19:59:21.282Z',
        },
        {
          value: 5135,
          name: '2016-09-14T22:23:16.132Z',
        },
        {
          value: 6097,
          name: '2016-09-20T23:38:25.483Z',
        },
        {
          value: 6000,
          name: '2016-09-20T23:13:18.670Z',
        },
        {
          name: '2016-09-16T00:33:48.055Z',
          value: 6665,
        },
        {
          name: '2016-09-20T16:37:38.881Z',
          value: 5417,
        },
      ],
    },
    {
      name: 'Singapore',
      series: [
        {
          value: 3282,
          name: '2016-09-21T15:40:26.710Z',
        },
        {
          value: 4937,
          name: '2016-09-14T19:59:21.282Z',
        },
        {
          value: 6960,
          name: '2016-09-14T22:23:16.132Z',
        },
        {
          value: 5340,
          name: '2016-09-20T23:38:25.483Z',
        },
        {
          value: 5488,
          name: '2016-09-20T23:13:18.670Z',
        },
        {
          name: '2016-09-16T00:33:48.055Z',
          value: 4003,
        },
        {
          name: '2016-09-20T16:37:38.881Z',
          value: 4494,
        },
      ],
    },
    {
      name: 'Indonesia',
      series: [
        {
          value: 6475,
          name: '2016-09-21T15:40:26.710Z',
        },
        {
          value: 3304,
          name: '2016-09-14T19:59:21.282Z',
        },
        {
          value: 4577,
          name: '2016-09-14T22:23:16.132Z',
        },
        {
          value: 3624,
          name: '2016-09-20T23:38:25.483Z',
        },
        {
          value: 6550,
          name: '2016-09-20T23:13:18.670Z',
        },
        {
          name: '2016-09-16T00:33:48.055Z',
          value: 5181,
        },
        {
          name: '2016-09-20T16:37:38.881Z',
          value: 2674,
        },
      ],
    },
    {
      name: 'Poland',
      series: [
        {
          value: 5200,
          name: '2016-09-21T15:40:26.710Z',
        },
        {
          value: 4320,
          name: '2016-09-14T19:59:21.282Z',
        },
        {
          value: 5303,
          name: '2016-09-14T22:23:16.132Z',
        },
        {
          value: 3136,
          name: '2016-09-20T23:38:25.483Z',
        },
        {
          value: 4266,
          name: '2016-09-20T23:13:18.670Z',
        },
        {
          name: '2016-09-16T00:33:48.055Z',
          value: 4627,
        },
        {
          name: '2016-09-20T16:37:38.881Z',
          value: 3476,
        },
      ],
    },
    {
      name: 'Armenia',
      series: [
        {
          value: 3468,
          name: '2016-09-21T15:40:26.710Z',
        },
        {
          value: 4318,
          name: '2016-09-14T19:59:21.282Z',
        },
        {
          value: 3710,
          name: '2016-09-14T22:23:16.132Z',
        },
        {
          value: 4430,
          name: '2016-09-20T23:38:25.483Z',
        },
        {
          value: 2269,
          name: '2016-09-20T23:13:18.670Z',
        },
        {
          name: '2016-09-16T00:33:48.055Z',
          value: 2706,
        },
        {
          name: '2016-09-20T16:37:38.881Z',
          value: 5016,
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
  colorScheme: any = 'ocean';
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
  async ngOnInit(): Promise<void> {
    this.isLoading = false;
  }
}
