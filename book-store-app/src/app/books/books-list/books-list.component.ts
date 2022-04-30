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
        id:1,
        urlImage:'/assets/images/image04.jpg',
        name:'Data Science for Business',
        author:'Foster Provost & Tom Fawcett',
        price:32.14,
        quantity:1,
        category:"Business"
      },
      { 
        id:2,
        urlImage:'/assets/images/image05.jpg',
        name:'Storytelling with Data: Lets Practice!',
        author:'Cole Nussbaumer Knaflic',
        price:24.12,
        quantity:1,
        category:"Business & Money"
      }


    ]
  }

}
