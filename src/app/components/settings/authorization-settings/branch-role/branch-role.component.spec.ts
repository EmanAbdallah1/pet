import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRoleComponent } from './branch-role.component';

describe('BranchRoleComponent', () => {
  let component: BranchRoleComponent;
  let fixture: ComponentFixture<BranchRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
