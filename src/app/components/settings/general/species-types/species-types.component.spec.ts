import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesTypesComponent } from './species-types.component';

describe('SpeciesTypesComponent', () => {
  let component: SpeciesTypesComponent;
  let fixture: ComponentFixture<SpeciesTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
