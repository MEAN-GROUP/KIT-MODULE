import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitorderlistComponent } from './kitorderlist.component';

describe('KitorderlistComponent', () => {
  let component: KitorderlistComponent;
  let fixture: ComponentFixture<KitorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
