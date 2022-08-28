import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitanteListComponent } from './visitante-list.component';

describe('VisitanteListComponent', () => {
  let component: VisitanteListComponent;
  let fixture: ComponentFixture<VisitanteListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
