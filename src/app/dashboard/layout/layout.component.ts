import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FiltersComponent, ChartsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  
}
