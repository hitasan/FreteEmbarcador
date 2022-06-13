import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParametroListComponent } from './parametro-list.component';

describe('ParametroListComponent', () => {
  let component: ParametroListComponent;
  let fixture: ComponentFixture<ParametroListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
