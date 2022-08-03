import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnitizadorDetailComponent } from './unitizador-detail.component';

describe('UnitizadorDetailComponent', () => {
  let component: UnitizadorDetailComponent;
  let fixture: ComponentFixture<UnitizadorDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitizadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitizadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
