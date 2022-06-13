import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParametroDetailComponent } from './parametro-detail.component';

describe('ParametroDetailComponent', () => {
  let component: ParametroDetailComponent;
  let fixture: ComponentFixture<ParametroDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
