import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrazoEntregaDetailComponent } from './prazoEntrega-detail.component';

describe('PrazoEntregaDetailComponent', () => {
  let component: PrazoEntregaDetailComponent;
  let fixture: ComponentFixture<PrazoEntregaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrazoEntregaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazoEntregaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
