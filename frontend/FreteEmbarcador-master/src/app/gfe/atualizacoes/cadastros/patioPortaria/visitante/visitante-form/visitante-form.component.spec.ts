import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitanteFormComponent } from './visitante-form.component';

describe('VisitanteFormComponent', () => {
  let component: VisitanteFormComponent;
  let fixture: ComponentFixture<VisitanteFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
