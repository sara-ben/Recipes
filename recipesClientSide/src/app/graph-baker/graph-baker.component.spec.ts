import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBakerComponent } from './graph-baker.component';

describe('GraphBakerComponent', () => {
  let component: GraphBakerComponent;
  let fixture: ComponentFixture<GraphBakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
