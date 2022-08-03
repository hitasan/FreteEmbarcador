import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltroDocCargaDetailComponent } from './filtroDocCarga-detail.component';

describe('FiltroDocCargaDetailComponent', () => {
  let component: FiltroDocCargaDetailComponent;
  let fixture: ComponentFixture<FiltroDocCargaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroDocCargaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroDocCargaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
