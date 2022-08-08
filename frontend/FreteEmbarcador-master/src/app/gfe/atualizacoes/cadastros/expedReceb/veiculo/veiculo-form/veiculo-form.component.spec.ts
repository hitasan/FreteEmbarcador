import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VeiculoFormComponent } from './veiculo-form.component';

describe('VeiculoFormComponent', () => {
  let component: VeiculoFormComponent;
  let fixture: ComponentFixture<VeiculoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
