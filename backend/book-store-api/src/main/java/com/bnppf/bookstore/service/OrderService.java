package com.bnppf.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bnppf.bookstore.model.BookOrder;
import com.bnppf.bookstore.repository.BookOrderRepository;

@Service
public class OrderService {

    @Autowired
    private BookOrderRepository orderRepository;

    /**
     * Returns a list of all book orders in the system.
     *
     * @return List of all book orders in the system
     */
    public List<BookOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    /**
     * Returns a book order by its ID. If the order does not exist, an empty
     * Optional will be returned.
     * 
     * @param id the ID of the order to retrieve
     * @return the order if it exists, an empty Optional otherwise
     */
    public Optional<BookOrder> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    /**
     * Creates a new book order. The new order will be added to the database and the
     * saved order will be returned.
     * 
     * @param bookOrder the order to create
     * @return the saved order
     */
    public BookOrder createOrder(BookOrder bookOrder) {
        return orderRepository.save(bookOrder);
    }

    /**
     * Deletes an existing order by its ID. If the order does not exist, a 404 will
     * be returned.
     * 
     * @param id the ID of the order to delete
     */
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    /**
     * Updates an existing order by replacing all items with the given items. If the
     * order does not exist, a 404 will be returned.
     * 
     * @param id        the ID of the order to update
     * @param bookOrder the items to replace the existing items with
     * @return the order with the new items if it exists, a 404 response otherwise
     */
    public BookOrder updateOrder(Long id, BookOrder bookOrder) {
        bookOrder.setId(id);
        return orderRepository.save(bookOrder);
    }
}
