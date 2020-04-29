import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcaAmbalajTanimComponent } from './parca-ambalaj-tanim.component';

describe('ParcaAmbalajTanimComponent', () => {
  let component: ParcaAmbalajTanimComponent;
  let fixture: ComponentFixture<ParcaAmbalajTanimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcaAmbalajTanimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcaAmbalajTanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
