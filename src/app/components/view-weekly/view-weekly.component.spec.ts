import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeeklyComponent } from './view-weekly.component';

describe('ViewWeeklyComponent', () => {
  let component: ViewWeeklyComponent;
  let fixture: ComponentFixture<ViewWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
