import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoylatyComponent } from './loylaty.component';

describe('LoylatyComponent', () => {
  let component: LoylatyComponent;
  let fixture: ComponentFixture<LoylatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoylatyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoylatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
