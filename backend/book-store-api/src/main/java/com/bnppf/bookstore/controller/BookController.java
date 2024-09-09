package com.bnppf.bookstore.controller;

import org.springframework.web.bind.annotation.RestController;

import com.bnppf.bookstore.model.Book;
import com.bnppf.bookstore.service.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService BookService;

    /**
     * Returns a list of all the books in the database
     * 
     * @return a list of books
     */
    @GetMapping
    public List<Book> getAllBooks() {
        return BookService.getAllBooks();
    }

    /**
     * Returns a book by its id
     * 
     * @param id the id of the book to be searched
     * @return a ResponseEntity containing the book if it was found, otherwise an
     *         empty ResponseEntity with status 200
     */
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) {
        return BookService.getBookById(id)
                .map(Book -> new ResponseEntity<>(Book, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Returns a list of books containing the given title
     * 
     * @param title the title of the books to be searched
     * @return a list of books containing the given title
     */
    @GetMapping("/title/{title}")
    public List<Book> findBooksByTitle(@PathVariable("title") String title) {
        return BookService.findBooksByTitle(title);
    }

    /**
     * Returns a list of books written by the given author
     * 
     * @param author the author of the books to be searched
     * @return a list of books written by the given author
     */
    @GetMapping("/author/{author}")
    public List<Book> findBooksByAuthor(@PathVariable("author") String author) {
        return BookService.findBooksByAuthor(author);
    }

}
