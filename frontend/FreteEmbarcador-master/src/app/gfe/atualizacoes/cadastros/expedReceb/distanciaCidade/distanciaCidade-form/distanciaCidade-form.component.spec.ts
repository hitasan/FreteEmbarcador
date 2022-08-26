import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistanciaCidadeFormComponent } from './distanciaCidade-form.component';

describe('DistanciaCidadeFormComponent', () => {
  let component: DistanciaCidadeFormComponent;
  let fixture: ComponentFixture<DistanciaCidadeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaCidadeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaCidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
