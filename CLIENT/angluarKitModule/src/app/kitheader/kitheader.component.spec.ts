import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitheaderComponent } from './kitheader.component';

describe('KitheaderComponent', () => {
  let component: KitheaderComponent;
  let fixture: ComponentFixture<KitheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
