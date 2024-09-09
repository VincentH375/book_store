package com.bnppf.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bnppf.bookstore.model.Book;
import com.bnppf.bookstore.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    /**
     * Returns a list of all books in the database
     *
     * @return a list of books
     */
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    /**
     * Returns a book by its ID. If the book does not exist, an empty Optional
     * will be returned.
     * 
     * @param id the ID of the book to retrieve
     * @return the book if it exists, an empty Optional otherwise
     */
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    /**
     * Creates a new book in the database
     *
     * @param product the book to be saved
     * @return the saved book
     */
    public Book createBook(Book product) {
        return bookRepository.save(product);
    }

    /**
     * Deletes a book from the database
     * 
     * @param id the ID of the book to delete
     */
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    /**
     * Updates an existing book in the database
     * 
     * @param id      the ID of the book to update
     * @param product the updated book
     * @return the updated book
     */
    public Book updateBook(Long id, Book product) {
        product.setId(id);
        return bookRepository.save(product);
    }

    /**
     * Returns a list of books containing the given title
     * 
     * @param title the title of the books to be searched
     * @return a list of books containing the given title
     */
    public List<Book> findBooksByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    /**
     * Returns a list of books written by the given author
     * 
     * @param author the author of the books to be searched
     * @return a list of books written by the given author
     */
    public List<Book> findBooksByAuthor(String author) {
        return bookRepository.findByAuthorContainingIgnoreCase(author);
    }
}
