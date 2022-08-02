import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmitenteListComponent } from './grupoEmitentes-list.component';

describe('GrupoEmitenteListComponent', () => {
  let component: GrupoEmitenteListComponent;
  let fixture: ComponentFixture<GrupoEmitenteListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmitenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmitenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
