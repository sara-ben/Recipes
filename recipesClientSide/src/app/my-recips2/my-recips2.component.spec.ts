import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecips2Component } from './my-recips2.component';

describe('MyRecips2Component', () => {
  let component: MyRecips2Component;
  let fixture: ComponentFixture<MyRecips2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecips2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecips2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
