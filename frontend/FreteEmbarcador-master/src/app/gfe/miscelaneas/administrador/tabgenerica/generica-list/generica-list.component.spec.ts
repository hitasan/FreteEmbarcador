import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericaListComponent } from './generica-list.component';

describe('GenericaListComponent', () => {
  let component: GenericaListComponent;
  let fixture: ComponentFixture<GenericaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
