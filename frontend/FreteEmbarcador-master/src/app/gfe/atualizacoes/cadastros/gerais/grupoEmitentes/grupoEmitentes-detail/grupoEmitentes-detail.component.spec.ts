import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmitenteDetailComponent } from './grupoEmitentes-detail.component';

describe('GrupoEmitenteDetailComponent', () => {
  let component: GrupoEmitenteDetailComponent;
  let fixture: ComponentFixture<GrupoEmitenteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmitenteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmitenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
