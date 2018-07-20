package com.pluralsight.bookstore.repository;

import com.pluralsight.bookstore.model.Book;
import com.pluralsight.bookstore.utils.NumberGenerator;
import com.pluralsight.bookstore.utils.TextUtil;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.util.List;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

/**
 * Provide access to the Book information stored in the Database
 */
@Transactional(SUPPORTS)
public class BookRepository {

    @PersistenceContext(unitName = "bookStorePU")
    private EntityManager em;

    @Inject
    private TextUtil textUtil;

    @Inject
    private NumberGenerator numberGenerator;

    /**
     * Search for a specific Book
     *
     * @param id The unique id of the Book
     * @return Return a book from the Datastore or a null object
     */
    public Book find(Long id) {
        Book book = em.find(Book.class, id);
        return book;
    }

    /**
     * Return a full collection of available Book
     *
     * @return a List of Books
     */
    public List<Book> findAll() {
        TypedQuery<Book> query =
                em.createQuery("SELECT b FROM Book b ORDER BY b.title DESC", Book.class);
        return query.getResultList();
    }

    /**
     * Return the Total Number of available books
     *
     * @return A Long representing the total number of books
     */
    public Long countAll() {
        TypedQuery<Long> query =
                em.createQuery("SELECT count(b) from Book b", Long.class);
        return query.getSingleResult();
    }

    /**
     * Create a new Book and store it into the Datastore
     *
     * @param book The Book to be created
     * @return Return the newly created Book
     */
    @Transactional(REQUIRED)
    public Book create(@NotNull Book book) {
        book.setTitle(textUtil.sanitize(book.getTitle()));
        book.setIsbn(numberGenerator.generateNumber());
        em.persist(book);
        return book;
    }

    /**
     * Delete an existing Book
     *
     * @param id The Id of the existing Book
     */
    @Transactional(REQUIRED)
    public void delete(long id) {
        Book book = em.getReference(Book.class, id);
        em.remove(book);
    }
}
