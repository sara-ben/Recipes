import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByGradeComponent } from './search-by-grade.component';

describe('SearchByGradeComponent', () => {
  let component: SearchByGradeComponent;
  let fixture: ComponentFixture<SearchByGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
