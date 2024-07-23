import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLogInComponent } from './choose-log-in.component';

describe('ChooseLogInComponent', () => {
  let component: ChooseLogInComponent;
  let fixture: ComponentFixture<ChooseLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
