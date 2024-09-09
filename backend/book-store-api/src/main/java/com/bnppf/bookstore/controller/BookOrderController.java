package com.bnppf.bookstore.controller;

import com.bnppf.bookstore.model.BookOrder;
import com.bnppf.bookstore.model.BookOrderItem;
import com.bnppf.bookstore.model.User;
import com.bnppf.bookstore.repository.BookOrderItemRepository;
import com.bnppf.bookstore.repository.BookOrderRepository;
import com.bnppf.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class BookOrderController {

    @Autowired
    private BookOrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookOrderItemRepository orderItemRepository;

    /**
     * Returns a list of all book orders in the system.
     *
     * @return List of all book orders in the system
     */
    @GetMapping
    public List<BookOrder> getAllBookOrders() {
        return orderRepository.findAll();
    }

    /**
     * Creates a new book order for the given user. The request body should be a
     * list of
     * {@link BookOrderItem} objects, which will be used to create the order items
     * for the
     * order. The new order will be added to the database and the saved order will
     * be
     * returned. If the user does not exist, a 404 will be returned.
     * 
     * @param id         the ID of the user to create the order for
     * @param orderItems the items to include in the order
     * @return the saved order
     */
    @PostMapping("/user/{id}")
    public ResponseEntity<BookOrder> createBookOrder(@PathVariable("id") Long id,
            @RequestBody List<BookOrderItem> orderItems) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        BookOrder order = new BookOrder();
        order.setUser(user.get());
        order.setStatus("NEW");

        // Save the order first, so we have an order ID
        BookOrder savedBookOrder = orderRepository.save(order);

        // Set the order for each order item and save
        for (BookOrderItem item : orderItems) {
            item.setBookOrder(savedBookOrder);
            orderItemRepository.save(item);
        }

        // Return the saved order
        return ResponseEntity.ok(savedBookOrder);
    }

    /**
     * Returns a book order by its ID. If the order does not exist, a 404 will be
     * returned.
     * 
     * @param id the ID of the order to retrieve
     * @return the order if it exists, a 404 response otherwise
     */
    @GetMapping("/{id}")
    public ResponseEntity<BookOrder> getBookOrderById(@PathVariable("id") Long id) {
        Optional<BookOrder> order = orderRepository.findById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Updates an existing order by replacing all items with the given items. If the
     * order does not exist, a 404 will be returned.
     * 
     * @param id           the ID of the order to update
     * @param updatedItems the items to replace the existing items with
     * @return the order with the new items if it exists, a 404 response otherwise
     */
    @PutMapping("/{id}")
    public ResponseEntity<BookOrder> updateBookOrder(@PathVariable("id") Long id,
            @RequestBody List<BookOrderItem> updatedItems) {
        return orderRepository.findById(id)
                .map(order -> {
                    // Remove existing items and replace with new items
                    orderItemRepository.deleteAll(order.getBookOrderItems());
                    for (BookOrderItem item : updatedItems) {
                        item.setBookOrder(order);
                        orderItemRepository.save(item);
                    }
                    return ResponseEntity.ok(order);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Deletes an existing order by its ID. If the order does not exist, a 404 will
     * be returned.
     * 
     * @param id the ID of the order to delete
     * @return a 204 response if the order exists, a 404 response if it does not
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteBookOrder(@PathVariable("id") Long id) {
        return orderRepository.findById(id)
                .map(order -> {
                    orderRepository.delete(order);
                    return ResponseEntity.noContent().build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
