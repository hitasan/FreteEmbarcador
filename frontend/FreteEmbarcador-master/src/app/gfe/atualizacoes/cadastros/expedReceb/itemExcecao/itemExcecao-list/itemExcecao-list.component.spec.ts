import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemExcecaoListComponent } from './itemExcecao-list.component';

describe('ItemExcecaoListComponent', () => {
  let component: ItemExcecaoListComponent;
  let fixture: ComponentFixture<ItemExcecaoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExcecaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExcecaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
