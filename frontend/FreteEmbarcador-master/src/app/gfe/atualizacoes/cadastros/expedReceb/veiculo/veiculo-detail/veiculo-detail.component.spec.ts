import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VeiculoDetailComponent } from './veiculo-detail.component';

describe('VeiculoDetailComponent', () => {
  let component: VeiculoDetailComponent;
  let fixture: ComponentFixture<VeiculoDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
