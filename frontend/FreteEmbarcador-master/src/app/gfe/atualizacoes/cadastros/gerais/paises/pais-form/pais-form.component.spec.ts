import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaisFormComponent } from './pais-form.component';

describe('PaisFormComponent', () => {
  let component: PaisFormComponent;
  let fixture: ComponentFixture<PaisFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
