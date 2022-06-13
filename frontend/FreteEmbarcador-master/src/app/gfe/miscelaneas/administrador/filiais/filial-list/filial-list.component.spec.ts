import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilialListComponent } from './filial-list.component';

describe('FilialListComponent', () => {
  let component: FilialListComponent;
  let fixture: ComponentFixture<FilialListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
