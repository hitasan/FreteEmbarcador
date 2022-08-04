import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MotoristaDetailComponent } from './motorista-detail.component';

describe('MotoristaDetailComponent', () => {
  let component: MotoristaDetailComponent;
  let fixture: ComponentFixture<MotoristaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
