import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracaPedagioFormComponent } from './pracaPedagio-form.component';

describe('PracaPedagioFormComponent', () => {
  let component: PracaPedagioFormComponent;
  let fixture: ComponentFixture<PracaPedagioFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PracaPedagioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracaPedagioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
