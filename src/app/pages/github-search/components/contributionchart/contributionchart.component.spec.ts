import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionchartComponent } from './contributionchart.component';

describe('ContributionchartComponent', () => {
  let component: ContributionchartComponent;
  let fixture: ComponentFixture<ContributionchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
