import {Component, OnInit, ɵEMPTY_ARRAY} from '@angular/core';
import {Book, BooksService} from "../service";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
  providers: [BooksService]
})
export class BookListComponent implements OnInit {

  nbOfBooks: number;

  books: Book[];

  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
    // Get Total Nr. of Books
    this.bookService.countBooks()
      .subscribe(x => this.nbOfBooks = x);

    // Get all Books
    this.bookService.getBooks()
      .subscribe(x => this.books = x);
  }

}
