import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnsComponent } from './query-ans.component';

describe('QueryAnsComponent', () => {
  let component: QueryAnsComponent;
  let fixture: ComponentFixture<QueryAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
