import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedTypeComponent } from './breed-type.component';

describe('BreedTypeComponent', () => {
  let component: BreedTypeComponent;
  let fixture: ComponentFixture<BreedTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
