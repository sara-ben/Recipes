import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBakerComponent } from './search-by-baker.component';

describe('SearchByBakerComponent', () => {
  let component: SearchByBakerComponent;
  let fixture: ComponentFixture<SearchByBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
