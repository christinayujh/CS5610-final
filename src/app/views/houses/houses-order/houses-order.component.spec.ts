import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesOrderComponent } from './houses-order.component';

describe('HousesOrderComponent', () => {
  let component: HousesOrderComponent;
  let fixture: ComponentFixture<HousesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
