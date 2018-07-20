package com.pluralsight.bookstore.repository;

import com.pluralsight.bookstore.mock.MockFactory;
import com.pluralsight.bookstore.model.Book;
import com.pluralsight.bookstore.model.Language;
import com.pluralsight.bookstore.utils.IsbnGenerator;
import com.pluralsight.bookstore.utils.NumberGenerator;
import com.pluralsight.bookstore.utils.TextUtil;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(Arquillian.class)
public class BookRepositoryTest {

    @Inject
    private BookRepository bookRepository;

    @Inject
    private MockFactory mockFactory;

    @Deployment
    public static JavaArchive createDeployment() {
        JavaArchive jar = ShrinkWrap.create(JavaArchive.class)
                .addClass(BookRepository.class)
                .addClass(Book.class)
                .addClass(Language.class)
                .addClass(MockFactory.class)
                .addClass(TextUtil.class)
                .addClass(NumberGenerator.class)
                .addClass(IsbnGenerator.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsManifestResource("META-INF/test-persistence.xml", "persistence.xml");
        // System.out.println(jar.toString());
        return jar;
    }

    @Test
    public void createShouldAssignId() {
        assertEquals(Long.valueOf(0), bookRepository.countAll());
        assertEquals(0, bookRepository.findAll().size());

        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        assertNotNull(book.getId());

        bookRepository.delete(book.getId());
    }

    @Test
    public void createShouldNormalizeTitle() {
        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        assertEquals("Book Title", book.getTitle());

        bookRepository.delete(book.getId());
    }

    @Test
    public void createShouldSetIsbn() {
        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        //assertTrue(book.getIsbn().startsWith("13"));

        bookRepository.delete(book.getId());
    }

    @Test
    public void createShouldStore() {
        assertEquals(Long.valueOf(0), bookRepository.countAll());
        assertEquals(0, bookRepository.findAll().size());

        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        assertEquals(Long.valueOf(1), bookRepository.countAll());
        assertEquals(1, bookRepository.findAll().size());

        bookRepository.delete(book.getId());
    }

    @Test(expected = Exception.class)
    public void createInvalidShouldThrow() {
        Book book = mockFactory.buildInvalidBook();
        bookRepository.create(book);
    }

    @Test(expected = Exception.class)
    public void createNullShouldThrow() {
        bookRepository.create(null);
    }

    @Test
    public void deleteShouldRemove() {
        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        assertEquals(Long.valueOf(1), bookRepository.countAll());
        assertEquals(1, bookRepository.findAll().size());

        bookRepository.delete(book.getId());

        assertEquals(Long.valueOf(0), bookRepository.countAll());
        assertEquals(0, bookRepository.findAll().size());
    }

    @Test(expected = Exception.class)
    public void deleteNullShouldThrow() {
        bookRepository.delete(0);
    }

    @Test(expected = Exception.class)
    public void deleteNotExistentShouldThrow() {
        bookRepository.delete(10000);
    }

    @Test
    public void countAllNoRecordsShouldReturnZero() {
        Long expected = bookRepository.countAll();

        assertEquals(expected, Long.valueOf(0));
    }

    @Test
    public void countAllOneRecordsShouldReturnOne() {
        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        Long expected = bookRepository.countAll();
        assertEquals(expected, Long.valueOf(1));

        bookRepository.delete(book.getId());
    }

    @Test
    public void countAllTwoRecordsShouldReturnTwo() {
        Book book = mockFactory.buildBook();
        Book book1 = mockFactory.buildBook();
        bookRepository.create(book);
        bookRepository.create(book1);

        Long expected = bookRepository.countAll();
        assertEquals(expected, Long.valueOf(2));

        bookRepository.delete(book.getId());
        bookRepository.delete(book1.getId());
    }

    @Test
    public void findAllNoRecordsShouldReturnZero() {
        List<Book> expected = bookRepository.findAll();

        assertEquals(expected.size(), 0);
    }

    @Test
    public void findAllOneRecordsShouldReturnOne() {
        Book book = mockFactory.buildBook();
        bookRepository.create(book);

        List<Book> expected = bookRepository.findAll();
        assertEquals(expected.size(), 1);

        bookRepository.delete(book.getId());
    }

    @Test
    public void findAllTwoRecordsShouldReturnTwo() {
        Book book = mockFactory.buildBook();
        Book book1 = mockFactory.buildBook();
        bookRepository.create(book);
        bookRepository.create(book1);

        List<Book> expected = bookRepository.findAll();
        assertEquals(expected.size(), 2);

        bookRepository.delete(book.getId());
        bookRepository.delete(book1.getId());
    }
}
