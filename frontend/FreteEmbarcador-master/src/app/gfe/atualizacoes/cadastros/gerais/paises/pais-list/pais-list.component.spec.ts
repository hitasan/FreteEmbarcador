import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaisesListComponent } from './pais-list.component';

describe('PaisesListComponent', () => {
  let component: PaisesListComponent;
  let fixture: ComponentFixture<PaisesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
