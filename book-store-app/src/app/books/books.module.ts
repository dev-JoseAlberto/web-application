import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { HeaderComponent } from './html-elements/header/header.component';
import { NavComponent } from './html-elements/nav/nav.component';
import { FooterComponent } from './html-elements/footer/footer.component';
import { SlideShowComponent } from './html-elements/slide-show/slide-show.component';
import { BooksItensComponent } from './books-list/books-itens/books-itens.component';
import { BookService } from './books-list/books-list.component.service';



@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SlideShowComponent,
    BooksItensComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    BooksComponent,
    HeaderComponent,
    NavComponent,
    SlideShowComponent,
    BooksListComponent,
    BooksItensComponent,
    FooterComponent
  ],
  providers: [BookService]
})
export class BooksModule { }
