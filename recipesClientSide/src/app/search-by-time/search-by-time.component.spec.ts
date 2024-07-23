import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTimeComponent } from './search-by-time.component';

describe('SearchByTimeComponent', () => {
  let component: SearchByTimeComponent;
  let fixture: ComponentFixture<SearchByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
