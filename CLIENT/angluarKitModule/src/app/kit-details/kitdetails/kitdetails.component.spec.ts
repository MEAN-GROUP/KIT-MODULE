import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitdetailsComponent } from './kitdetails.component';

describe('KitdetailsComponent', () => {
  let component: KitdetailsComponent;
  let fixture: ComponentFixture<KitdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
