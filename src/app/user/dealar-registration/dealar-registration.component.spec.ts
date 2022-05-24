import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealarRegistrationComponent } from './dealar-registration.component';

describe('DealarRegistrationComponent', () => {
  let component: DealarRegistrationComponent;
  let fixture: ComponentFixture<DealarRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealarRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealarRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
