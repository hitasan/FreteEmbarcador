import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilialDetailComponent } from './filial-detail.component';

describe('FilialDetailComponent', () => {
  let component: FilialDetailComponent;
  let fixture: ComponentFixture<FilialDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
