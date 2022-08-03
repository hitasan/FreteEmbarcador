import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltroDocCargaFormComponent } from './filtroDocCarga-form.component';

describe('FiltroDocCargaFormComponent', () => {
  let component: FiltroDocCargaFormComponent;
  let fixture: ComponentFixture<FiltroDocCargaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroDocCargaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroDocCargaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
