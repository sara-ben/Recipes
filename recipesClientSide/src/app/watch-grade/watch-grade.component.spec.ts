import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchGradeComponent } from './watch-grade.component';

describe('WatchGradeComponent', () => {
  let component: WatchGradeComponent;
  let fixture: ComponentFixture<WatchGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
