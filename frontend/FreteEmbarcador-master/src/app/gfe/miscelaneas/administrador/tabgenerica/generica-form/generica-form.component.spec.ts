import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericaFormComponent } from './generica-form.component';

describe('GenericaFormComponent', () => {
  let component: GenericaFormComponent;
  let fixture: ComponentFixture<GenericaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
