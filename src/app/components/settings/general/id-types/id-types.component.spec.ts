import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTypesComponent } from './id-types.component';

describe('IdTypesComponent', () => {
  let component: IdTypesComponent;
  let fixture: ComponentFixture<IdTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
