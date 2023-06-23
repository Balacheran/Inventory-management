import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetailComponent } from './cardetail.component';

describe('CardetailComponent', () => {
  let component: CardetailComponent;
  let fixture: ComponentFixture<CardetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardetailComponent]
    });
    fixture = TestBed.createComponent(CardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
