import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitexchangeComponent } from './kitexchange.component';

describe('KitexchangeComponent', () => {
  let component: KitexchangeComponent;
  let fixture: ComponentFixture<KitexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
