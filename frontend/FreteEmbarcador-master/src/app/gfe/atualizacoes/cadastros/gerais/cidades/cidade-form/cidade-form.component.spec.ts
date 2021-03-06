import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CidadeFormComponent } from './cidade-form.component';

describe('CidadeFormComponent', () => {
  let component: CidadeFormComponent;
  let fixture: ComponentFixture<CidadeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
