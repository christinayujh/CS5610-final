import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesEditComponent } from './houses-edit.component';

describe('HousesEditComponent', () => {
  let component: HousesEditComponent;
  let fixture: ComponentFixture<HousesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
