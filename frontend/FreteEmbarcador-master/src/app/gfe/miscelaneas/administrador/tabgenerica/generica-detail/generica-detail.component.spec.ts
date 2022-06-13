import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericaDetailComponent } from './generica-detail.component';

describe('GenericaDetailComponent', () => {
  let component: GenericaDetailComponent;
  let fixture: ComponentFixture<GenericaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
