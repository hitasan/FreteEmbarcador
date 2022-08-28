import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitanteDetailComponent } from './visitante-detail.component';

describe('VisitanteDetailComponent', () => {
  let component: VisitanteDetailComponent;
  let fixture: ComponentFixture<VisitanteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
