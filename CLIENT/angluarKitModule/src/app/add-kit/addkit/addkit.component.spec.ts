import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkitComponent } from './addkit.component';

describe('AddkitComponent', () => {
  let component: AddkitComponent;
  let fixture: ComponentFixture<AddkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
