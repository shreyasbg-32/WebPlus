import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankReceiverComponent } from './blood-bank-receiver.component';

describe('BloodBankReceiverComponent', () => {
  let component: BloodBankReceiverComponent;
  let fixture: ComponentFixture<BloodBankReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
