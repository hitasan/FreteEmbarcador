import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmitenteFormComponent } from './grupoEmitentes-form.component';

describe('GrupoEmitenteFormComponent', () => {
  let component: GrupoEmitenteFormComponent;
  let fixture: ComponentFixture<GrupoEmitenteFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmitenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmitenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
