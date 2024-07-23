import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeaderBakerComponent } from './new-leader-baker.component';

describe('NewLeaderBakerComponent', () => {
  let component: NewLeaderBakerComponent;
  let fixture: ComponentFixture<NewLeaderBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeaderBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeaderBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
