import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrazoEntregaFormComponent } from './prazoEntrega-form.component';

describe('PrazoEntregaFormComponent', () => {
  let component: PrazoEntregaFormComponent;
  let fixture: ComponentFixture<PrazoEntregaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrazoEntregaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazoEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
