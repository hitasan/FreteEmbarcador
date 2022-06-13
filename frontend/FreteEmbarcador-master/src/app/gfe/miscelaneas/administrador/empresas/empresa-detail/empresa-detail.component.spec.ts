import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpresaDetailComponent } from './empresa-detail.component';

describe('EmpresaDetailComponent', () => {
  let component: EmpresaDetailComponent;
  let fixture: ComponentFixture<EmpresaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
