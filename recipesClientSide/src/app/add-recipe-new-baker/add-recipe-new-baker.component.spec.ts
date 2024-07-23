import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeNewBakerComponent } from './add-recipe-new-baker.component';

describe('AddRecipeNewBakerComponent', () => {
  let component: AddRecipeNewBakerComponent;
  let fixture: ComponentFixture<AddRecipeNewBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeNewBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeNewBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
