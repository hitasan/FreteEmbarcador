import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoDocCargaListComponent } from './tipoDocCarga-list.component';

describe('TipoDocCargaListComponent', () => {
  let component: TipoDocCargaListComponent;
  let fixture: ComponentFixture<TipoDocCargaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocCargaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocCargaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
