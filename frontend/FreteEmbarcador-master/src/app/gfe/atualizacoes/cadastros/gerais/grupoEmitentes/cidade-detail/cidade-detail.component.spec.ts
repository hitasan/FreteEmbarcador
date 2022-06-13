import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CidadeDetailComponent } from './cidade-detail.component';

describe('CidadeDetailComponent', () => {
  let component: CidadeDetailComponent;
  let fixture: ComponentFixture<CidadeDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
