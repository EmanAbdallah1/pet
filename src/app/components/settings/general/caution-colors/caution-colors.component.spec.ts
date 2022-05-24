import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionColorsComponent } from './caution-colors.component';

describe('CautionColorsComponent', () => {
  let component: CautionColorsComponent;
  let fixture: ComponentFixture<CautionColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CautionColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
