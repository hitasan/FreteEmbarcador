import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParametroFormComponent } from './parametro-form.component';

describe('ParametroFormComponent', () => {
  let component: ParametroFormComponent;
  let fixture: ComponentFixture<ParametroFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
