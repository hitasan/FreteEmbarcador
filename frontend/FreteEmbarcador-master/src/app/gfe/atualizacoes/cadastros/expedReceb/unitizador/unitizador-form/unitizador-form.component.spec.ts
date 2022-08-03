import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnitizadorFormComponent } from './unitizador-form.component';

describe('UnitizadorFormComponent', () => {
  let component: UnitizadorFormComponent;
  let fixture: ComponentFixture<UnitizadorFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitizadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitizadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
