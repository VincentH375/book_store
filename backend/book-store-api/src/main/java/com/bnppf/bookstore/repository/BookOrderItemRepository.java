package com.bnppf.bookstore.repository;

import com.bnppf.bookstore.model.BookOrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookOrderItemRepository extends JpaRepository<BookOrderItem, Long> {
}
