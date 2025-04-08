import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadersKitchenComponent } from './maders-kitchen.component';

describe('MadersKitchenComponent', () => {
  let component: MadersKitchenComponent;
  let fixture: ComponentFixture<MadersKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadersKitchenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadersKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
