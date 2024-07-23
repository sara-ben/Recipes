import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBakerComponent } from './about-baker.component';

describe('AboutBakerComponent', () => {
  let component: AboutBakerComponent;
  let fixture: ComponentFixture<AboutBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
