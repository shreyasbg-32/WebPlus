import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBloodComponent } from './find-blood.component';

describe('FindBloodComponent', () => {
  let component: FindBloodComponent;
  let fixture: ComponentFixture<FindBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
