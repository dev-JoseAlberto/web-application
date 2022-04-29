import { Component, Input,OnInit } from '@angular/core';
import { Book } from '../model/books';

@Component({
  selector: 'app-books-itens',
  templateUrl: './books-itens.component.html',
  styleUrls: ['./books-itens.component.css']
})
export class BooksItensComponent implements OnInit {

  @Input()
  books!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
