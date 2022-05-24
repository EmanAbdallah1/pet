import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConfigComponent } from './schedule-config.component';

describe('ScheduleConfigComponent', () => {
  let component: ScheduleConfigComponent;
  let fixture: ComponentFixture<ScheduleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
