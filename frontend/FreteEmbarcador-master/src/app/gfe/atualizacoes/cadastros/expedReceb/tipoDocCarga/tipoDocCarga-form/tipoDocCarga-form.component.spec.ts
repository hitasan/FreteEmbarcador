import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoDocCargaFormComponent } from './tipoDocCarga-form.component';

describe('TipoDocCargaFormComponent', () => {
  let component: TipoDocCargaFormComponent;
  let fixture: ComponentFixture<TipoDocCargaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocCargaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocCargaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
