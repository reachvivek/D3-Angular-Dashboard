import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizedAreaChartComponent } from './normalized-area-chart.component';

describe('NormalizedAreaChartComponent', () => {
  let component: NormalizedAreaChartComponent;
  let fixture: ComponentFixture<NormalizedAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormalizedAreaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalizedAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
