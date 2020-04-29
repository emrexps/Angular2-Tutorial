import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TofasComponent } from './tofas.component';

describe('TofasComponent', () => {
  let component: TofasComponent;
  let fixture: ComponentFixture<TofasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TofasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
