import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheShelvesComponent } from './branche-shelves.component';

describe('BrancheShelvesComponent', () => {
  let component: BrancheShelvesComponent;
  let fixture: ComponentFixture<BrancheShelvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheShelvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
