import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitreturnComponent } from './kitreturn.component';

describe('KitreturnComponent', () => {
  let component: KitreturnComponent;
  let fixture: ComponentFixture<KitreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
