import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitallstockComponent } from './kitallstock.component';

describe('KitallstockComponent', () => {
  let component: KitallstockComponent;
  let fixture: ComponentFixture<KitallstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitallstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitallstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
