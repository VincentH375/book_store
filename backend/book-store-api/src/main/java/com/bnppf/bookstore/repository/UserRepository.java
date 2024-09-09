package com.bnppf.bookstore.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bnppf.bookstore.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
