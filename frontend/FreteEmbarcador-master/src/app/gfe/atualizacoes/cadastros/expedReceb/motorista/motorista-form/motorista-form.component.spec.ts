import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MotoristaFormComponent } from './motorista-form.component';

describe('MotoristaFormComponent', () => {
  let component: MotoristaFormComponent;
  let fixture: ComponentFixture<MotoristaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
