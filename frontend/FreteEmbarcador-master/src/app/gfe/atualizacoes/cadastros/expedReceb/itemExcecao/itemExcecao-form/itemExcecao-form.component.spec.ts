import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemExcecaoFormComponent } from './itemExcecao-form.component';

describe('ItemExcecaoFormComponent', () => {
  let component: ItemExcecaoFormComponent;
  let fixture: ComponentFixture<ItemExcecaoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExcecaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExcecaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
