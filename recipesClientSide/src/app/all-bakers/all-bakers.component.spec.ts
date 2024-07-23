import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBakersComponent } from './all-bakers.component';

describe('AllBakersComponent', () => {
  let component: AllBakersComponent;
  let fixture: ComponentFixture<AllBakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
