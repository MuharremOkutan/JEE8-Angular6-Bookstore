import { Component, OnInit } from '@angular/core';
import {Book, BooksService} from "../service";
import {Router} from "@angular/router";

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: [],
  providers: [BooksService]
})
export class BookFormComponent implements OnInit {

  book: Book = {} as Book;

  constructor(
    private router: Router,
    private bookService: BooksService) { }

  ngOnInit() {
  }

  create() {
    // delete
    this.bookService
      .createBook(this.book)
      .subscribe(() => this.router.navigate(['/book-list']));

  }
}
