import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinfoComponent } from './parkinfo.component';

describe('ParkinfoComponent', () => {
  let component: ParkinfoComponent;
  let fixture: ComponentFixture<ParkinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
