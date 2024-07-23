import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipsComponent } from './my-recips.component';

describe('MyRecipsComponent', () => {
  let component: MyRecipsComponent;
  let fixture: ComponentFixture<MyRecipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
