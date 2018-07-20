package com.pluralsight.bookstore.mock;

import com.pluralsight.bookstore.model.Book;
import com.pluralsight.bookstore.model.Language;

import java.util.Date;

public class MockFactory {

    public Book buildBook() {
        return new Book(
                "Book  Title",
                "Book Description",
                100f,
                "isbn",
                new Date(),
                100,
                "image.jpg",
                Language.ENGLISH);
    }

    public Book buildBookWithoutTitle() {
        return new Book(
                null,
                "Book Description",
                100f,
                "isbn",
                new Date(),
                100,
                "image.jpg",
                Language.ENGLISH);
    }

    public Book buildBookWithLowUnitCost() {
        return new Book(
                "Book Title",
                "Book Description",
                0f,
                "isbn",
                new Date(),
                100,
                "image.jpg",
                Language.ENGLISH);
    }

    public Book buildInvalidBook() {
        return new Book(
                null,
                "Book Description",
                100f,
                "isbn",
                new Date(),
                100,
                "image.jpg",
                Language.ENGLISH);
    }
}
