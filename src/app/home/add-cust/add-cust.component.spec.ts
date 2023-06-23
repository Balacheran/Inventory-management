import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustComponent } from './add-cust.component';

describe('AddCustComponent', () => {
  let component: AddCustComponent;
  let fixture: ComponentFixture<AddCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustComponent]
    });
    fixture = TestBed.createComponent(AddCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
