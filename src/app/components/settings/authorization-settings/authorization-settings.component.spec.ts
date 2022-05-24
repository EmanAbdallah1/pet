import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationSettingsComponent } from './authorization-settings.component';

describe('AuthorizationSettingsComponent', () => {
  let component: AuthorizationSettingsComponent;
  let fixture: ComponentFixture<AuthorizationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
