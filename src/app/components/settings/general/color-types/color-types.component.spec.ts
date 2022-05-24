import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTypesComponent } from './color-types.component';

describe('ColorTypesComponent', () => {
  let component: ColorTypesComponent;
  let fixture: ComponentFixture<ColorTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
