import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaisImportComponent } from './pais-import.component';

describe('PaisImportComponent', () => {
  let component: PaisImportComponent;
  let fixture: ComponentFixture<PaisImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
