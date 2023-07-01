import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpopupComponent } from './loginpopup.component';

describe('LoginpopupComponent', () => {
  let component: LoginpopupComponent;
  let fixture: ComponentFixture<LoginpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginpopupComponent]
    });
    fixture = TestBed.createComponent(LoginpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
