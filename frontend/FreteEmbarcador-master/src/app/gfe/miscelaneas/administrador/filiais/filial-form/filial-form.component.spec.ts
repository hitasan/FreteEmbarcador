import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilialFormComponent } from './filial-form.component';

describe('FilialFormComponent', () => {
  let component: FilialFormComponent;
  let fixture: ComponentFixture<FilialFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
