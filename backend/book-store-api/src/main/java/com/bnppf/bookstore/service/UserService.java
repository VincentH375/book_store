package com.bnppf.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.bnppf.bookstore.model.User;
import com.bnppf.bookstore.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Returns a list of all the users in the database.
     * 
     * @return a list of users
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // public List<UserDTO> getAllUsers() {
    // List<User> users = userRepository.findAll();
    // return users.stream().map(user -> {
    // UserDTO dto = new UserDTO();
    // dto.setId(user.getId());
    // dto.setUsername(user.getUsername());
    // dto.setPassword(user.getPassword());
    // return dto;
    // }).collect(Collectors.toList());
    // }

    /**
     * Returns a user by its id.
     * 
     * @param userId the id of the user to be searched
     * @return an Optional containing the user if it was found, otherwise an empty
     *         Optional
     */
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    /**
     * Creates a new user in the database.
     * 
     * @param user the new user to be created
     * @return the newly created user
     */
    public User createUser(User user) {
        try {
            return userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            // If username is not unique, this exception will be thrown
            throw new RuntimeException("Username '" + user.getUsername() + "' is already taken!");
        }
    }

    /**
     * Updates a user in the database.
     * 
     * @param userId the id of the user to be updated
     * @param user   the updated user
     * @return the updated user
     */
    public User updateUser(Long userId, User user) {
        user.setId(userId);
        return userRepository.save(user);
    }

    public Optional<User> doLogin(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

}
