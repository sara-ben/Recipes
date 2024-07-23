import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGradeComponent } from './all-grade.component';

describe('AllGradeComponent', () => {
  let component: AllGradeComponent;
  let fixture: ComponentFixture<AllGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
