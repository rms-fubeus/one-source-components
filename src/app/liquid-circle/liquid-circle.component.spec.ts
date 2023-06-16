import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidCircleComponent } from './liquid-circle.component';

describe('LiquidCircleComponent', () => {
  let component: LiquidCircleComponent;
  let fixture: ComponentFixture<LiquidCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
