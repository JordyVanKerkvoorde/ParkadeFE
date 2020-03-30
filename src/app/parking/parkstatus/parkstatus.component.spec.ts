import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkstatusComponent } from './parkstatus.component';

describe('ParkstatusComponent', () => {
  let component: ParkstatusComponent;
  let fixture: ComponentFixture<ParkstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
