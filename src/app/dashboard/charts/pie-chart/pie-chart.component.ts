import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../../../swagger';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
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
  constructor(private dataService: DataService) {}
  async ngOnInit(): Promise<void> {
    const response = await firstValueFrom(this.dataService.pieChartData())
      .then((resp) => resp)
      .catch((err) => err);
    if (response && response.length) {
      this.data = response;
      this.isLoading = false;
    } else {
      this.isLoading = true;
      alert('Failed fetching data from server for Pie Chart');
      alert(response);
    }
  }
}
