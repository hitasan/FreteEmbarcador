import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracaPedagioListComponent } from './pracaPedagio-list.component';

describe('PracaPedagioListComponent', () => {
  let component: PracaPedagioListComponent;
  let fixture: ComponentFixture<PracaPedagioListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PracaPedagioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracaPedagioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
