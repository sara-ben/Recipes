import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBakerComponent } from './leader-baker.component';

describe('LeaderBakerComponent', () => {
  let component: LeaderBakerComponent;
  let fixture: ComponentFixture<LeaderBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
