import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchRecipeComponent } from './watch-recipe.component';

describe('WatchRecipeComponent', () => {
  let component: WatchRecipeComponent;
  let fixture: ComponentFixture<WatchRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
