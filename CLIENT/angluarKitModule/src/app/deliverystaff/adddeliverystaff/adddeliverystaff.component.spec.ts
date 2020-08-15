import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliverystaffComponent } from './adddeliverystaff.component';

describe('AddDeliverystaffComponent', () => {
  let component: AddDeliverystaffComponent;
  let fixture: ComponentFixture<AddDeliverystaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeliverystaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeliverystaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
