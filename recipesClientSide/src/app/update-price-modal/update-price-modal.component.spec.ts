import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriceModalComponent } from './update-price-modal.component';

describe('UpdatePriceModalComponent', () => {
  let component: UpdatePriceModalComponent;
  let fixture: ComponentFixture<UpdatePriceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePriceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
