package com.bnppf.bookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookStoreApplication {

	/**
	 * Main entry point of the application. This method is called automatically by
	 * the Spring Boot framework when the application is started.
	 *
	 * @param args the command line arguments passed to the application.
	 */
	public static void main(String[] args) {
		SpringApplication.run(BookStoreApplication.class, args);
	}

}
