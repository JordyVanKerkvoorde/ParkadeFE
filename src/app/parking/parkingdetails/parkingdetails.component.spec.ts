import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingdetailsComponent } from './parkingdetails.component';

describe('ParkingdetailsComponent', () => {
  let component: ParkingdetailsComponent;
  let fixture: ComponentFixture<ParkingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
