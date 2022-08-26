import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistanciaCidadeDetailComponent } from './distanciaCidade-detail.component';

describe('DistanciaCidadeDetailComponent', () => {
  let component: DistanciaCidadeDetailComponent;
  let fixture: ComponentFixture<DistanciaCidadeDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaCidadeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaCidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
