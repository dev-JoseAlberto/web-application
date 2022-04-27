import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
