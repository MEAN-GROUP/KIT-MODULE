import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitfooterComponent } from './kitfooter.component';

describe('KitfooterComponent', () => {
  let component: KitfooterComponent;
  let fixture: ComponentFixture<KitfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
