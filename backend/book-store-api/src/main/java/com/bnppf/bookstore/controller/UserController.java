package com.bnppf.bookstore.controller;

import org.springframework.web.bind.annotation.RestController;

import com.bnppf.bookstore.model.User;
import com.bnppf.bookstore.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Returns a list of all the users in the database.
     * 
     * @return a list of users
     */
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    /**
     * Returns a user by its id.
     * 
     * @param id the id of the user to be searched
     * @return a ResponseEntity containing the user if it was found, otherwise an
     *         empty ResponseEntity with status 200
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Creates a new user in the database.
     * 
     * @param user the new user to be created
     * @return the newly created user if the creation is successful, otherwise a
     *         ResponseEntity with status 409 (Confict) with the error message
     */
    @PostMapping
    public ResponseEntity<Object> createUser(@RequestBody User user) {
        try {
            userService.createUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    /**
     * Updates a user in the database.
     * 
     * @param id   the id of the user to be updated
     * @param user the updated user
     * @return the updated user
     */
    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    /**
     * Logs in a user and returns it if the login is successful, otherwise returns
     * a ResponseEntity with status 401.
     * 
     * @param user the user to be logged in
     * @return the logged in user if the login is successful, otherwise an empty
     *         ResponseEntity with status 401
     */
    @PostMapping("/login")
    public ResponseEntity<User> doLogin(@RequestBody User user) {
        return userService.doLogin(user.getUsername(), user.getPassword())
                .map(user1 -> new ResponseEntity<>(user1, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.UNAUTHORIZED));
    }

}
