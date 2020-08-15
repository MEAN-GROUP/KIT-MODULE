import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeliverylistComponent } from './viewdeliverylist.component';

describe('ViewdeliverylistComponent', () => {
  let component: ViewdeliverylistComponent;
  let fixture: ComponentFixture<ViewdeliverylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeliverylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeliverylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
