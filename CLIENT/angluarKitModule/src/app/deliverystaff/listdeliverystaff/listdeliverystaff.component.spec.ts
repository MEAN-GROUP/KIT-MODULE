import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeliverystaffComponent } from './listdeliverystaff.component';

describe('ListdeliverystaffComponent', () => {
  let component: ListdeliverystaffComponent;
  let fixture: ComponentFixture<ListdeliverystaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdeliverystaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdeliverystaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
