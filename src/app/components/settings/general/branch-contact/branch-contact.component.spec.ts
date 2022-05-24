import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchContactComponent } from './branch-contact.component';

describe('BranchContactComponent', () => {
  let component: BranchContactComponent;
  let fixture: ComponentFixture<BranchContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
