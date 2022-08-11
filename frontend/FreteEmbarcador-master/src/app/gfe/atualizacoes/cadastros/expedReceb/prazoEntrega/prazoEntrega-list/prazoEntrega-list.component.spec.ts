import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrazoEntregaListComponent } from './prazoEntrega-list.component';

describe('PrazoEntregaListComponent', () => {
  let component: PrazoEntregaListComponent;
  let fixture: ComponentFixture<PrazoEntregaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrazoEntregaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazoEntregaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
