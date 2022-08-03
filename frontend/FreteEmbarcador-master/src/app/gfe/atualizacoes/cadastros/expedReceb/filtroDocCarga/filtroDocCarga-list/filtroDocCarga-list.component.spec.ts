import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltroDocCargaListComponent } from './filtroDocCarga-list.component';

describe('FiltroDocCargaListComponent', () => {
  let component: FiltroDocCargaListComponent;
  let fixture: ComponentFixture<FiltroDocCargaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroDocCargaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroDocCargaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
