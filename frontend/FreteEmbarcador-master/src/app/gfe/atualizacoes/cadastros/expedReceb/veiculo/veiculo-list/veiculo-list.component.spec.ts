import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VeiculoListComponent } from './veiculo-list.component';

describe('VeiculoListComponent', () => {
  let component: VeiculoListComponent;
  let fixture: ComponentFixture<VeiculoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
