import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Book } from "./model/books";

@Injectable()

export class BookService {

    constructor(private http: HttpClient, private bookService:BookService) { 
    }

}