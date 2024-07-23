import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakersGraphComponent } from './bakers-graph.component';

describe('BakersGraphComponent', () => {
  let component: BakersGraphComponent;
  let fixture: ComponentFixture<BakersGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakersGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
