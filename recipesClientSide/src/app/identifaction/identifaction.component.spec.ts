import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifactionComponent } from './identifaction.component';

describe('IdentifactionComponent', () => {
  let component: IdentifactionComponent;
  let fixture: ComponentFixture<IdentifactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
