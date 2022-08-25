import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracaPedagioDetailComponent } from './pracaPedagio-detail.component';

describe('PracaPedagioDetailComponent', () => {
  let component: PracaPedagioDetailComponent;
  let fixture: ComponentFixture<PracaPedagioDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PracaPedagioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracaPedagioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
