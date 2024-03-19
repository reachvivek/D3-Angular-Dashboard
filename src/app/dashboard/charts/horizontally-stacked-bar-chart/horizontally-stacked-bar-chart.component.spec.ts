import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontallyStackedBarChartComponent } from './horizontally-stacked-bar-chart.component';

describe('HorizontallyStackedBarChartComponent', () => {
  let component: HorizontallyStackedBarChartComponent;
  let fixture: ComponentFixture<HorizontallyStackedBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontallyStackedBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontallyStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
