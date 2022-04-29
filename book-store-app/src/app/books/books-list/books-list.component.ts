import { Component, OnInit } from '@angular/core';

import { Book } from "./model/books";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.books = [
      {
        name:'Data Science for Business: What you need to know about data mining and data-analytic thinking',
        price:59.83,
        quantity:1,
        category:"Business"
    

      }
    ]
  }

}
