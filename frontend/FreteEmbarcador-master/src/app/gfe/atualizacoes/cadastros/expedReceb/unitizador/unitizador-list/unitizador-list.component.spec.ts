import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnitizadorListComponent } from './unitizador-list.component';

describe('UnitizadorListComponent', () => {
  let component: UnitizadorListComponent;
  let fixture: ComponentFixture<UnitizadorListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitizadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitizadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
