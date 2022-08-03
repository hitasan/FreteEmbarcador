import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemExcecaoDetailComponent } from './itemExcecao-detail.component';

describe('ItemExcecaoDetailComponent', () => {
  let component: ItemExcecaoDetailComponent;
  let fixture: ComponentFixture<ItemExcecaoDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExcecaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExcecaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
