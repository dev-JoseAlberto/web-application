import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItensComponent } from './books-itens.component';

describe('BooksItensComponent', () => {
  let component: BooksItensComponent;
  let fixture: ComponentFixture<BooksItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
