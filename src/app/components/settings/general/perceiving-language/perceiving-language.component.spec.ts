import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceivingLanguageComponent } from './perceiving-language.component';

describe('PerceivingLanguageComponent', () => {
  let component: PerceivingLanguageComponent;
  let fixture: ComponentFixture<PerceivingLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerceivingLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerceivingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
