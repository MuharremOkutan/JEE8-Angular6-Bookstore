import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book, BooksService} from "../service";

import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [],
  providers: [BooksService]
})
export class BookDetailComponent implements OnInit {

  book: Book = {} as Book;

  constructor(
    private router: Router,
    private bookService: BooksService,
    private root: ActivatedRoute) { }

  ngOnInit() {

    this.root.params
      .pipe(
        map(params => params['bookId']),
        switchMap(id => this.bookService.getBook(id))
      )
      .subscribe(book => this.book = book);


  }

  delete() {
    // delete
    this.bookService
      .deleteBook(this.book.id)
      .subscribe(() => this.router.navigate(['/book-list']));
  }
}
