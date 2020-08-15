import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitavailablestockComponent } from './kitavailablestock.component';

describe('KitavailablestockComponent', () => {
  let component: KitavailablestockComponent;
  let fixture: ComponentFixture<KitavailablestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitavailablestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitavailablestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
