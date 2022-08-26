import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistanciaCidadeListComponent } from './distanciaCidade-list.component';

describe('DistanciaCidadeListComponent', () => {
  let component: DistanciaCidadeListComponent;
  let fixture: ComponentFixture<DistanciaCidadeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaCidadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaCidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
