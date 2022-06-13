import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigParamFormComponent } from './configparam-form.component';

describe('ConfigParamFormComponent', () => {
  let component: ConfigParamFormComponent;
  let fixture: ComponentFixture<ConfigParamFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigParamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigParamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
