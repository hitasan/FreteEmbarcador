import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CidadeImportComponent } from './cidade-import.component';

describe('CidadeImportComponent', () => {
  let component: CidadeImportComponent;
  let fixture: ComponentFixture<CidadeImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
