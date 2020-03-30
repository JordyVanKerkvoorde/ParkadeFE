import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkstatisticsComponent } from './parkstatistics.component';

describe('ParkstatisticsComponent', () => {
  let component: ParkstatisticsComponent;
  let fixture: ComponentFixture<ParkstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
