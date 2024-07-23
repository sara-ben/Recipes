import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgGradeComponent } from './avg-grade.component';

describe('AvgGradeComponent', () => {
  let component: AvgGradeComponent;
  let fixture: ComponentFixture<AvgGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
