import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesNewComponent } from './houses-new.component';

describe('HousesNewComponent', () => {
  let component: HousesNewComponent;
  let fixture: ComponentFixture<HousesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
