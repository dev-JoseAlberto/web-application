import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { HeaderComponent } from './html-elements/header/header.component';
import { NavComponent } from './html-elements/nav/nav.component';
import { FooterComponent } from './html-elements/footer/footer.component';
import { SlideShowComponent } from './html-elements/slide-show/slide-show.component';



@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SlideShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent,
    HeaderComponent,
    NavComponent,
    SlideShowComponent,
    FooterComponent
  ]
})
export class BooksModule { }
