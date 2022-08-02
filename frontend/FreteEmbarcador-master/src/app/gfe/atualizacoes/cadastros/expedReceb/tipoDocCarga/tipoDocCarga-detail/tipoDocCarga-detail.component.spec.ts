import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoDocCargaDetailComponent } from './tipoDocCarga-detail.component';

describe('TipoDocCargaDetailComponent', () => {
  let component: TipoDocCargaDetailComponent;
  let fixture: ComponentFixture<TipoDocCargaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocCargaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocCargaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
