import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardComponentComponent } from './shard-component.component';

describe('ShardComponentComponent', () => {
  let component: ShardComponentComponent;
  let fixture: ComponentFixture<ShardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
