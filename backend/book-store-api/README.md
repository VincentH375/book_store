# Book Store Application (Backend)

Author: Vincent Heggermont

# Table of contents

-   [Backend API](#backend-api)
    -   [Prerequisites](#prerequisites)
    -   [API Endpoints](#api-endpoints)
        -   [Books](#books)
        -   [Book Orders](#bookorders)
        -   [Users](#users)
    -   [How to use the Backend API](#how-to-use-the-backend-api)

## Backend API

### Prerequisites

Before running this project, make sure you have the following installed:

-   JDK 17 or later – Download Here

This development has been made with the following Java version

```
java version "21.0.4" 2024-07-16 LTS
Java(TM) SE Runtime Environment (build 21.0.4+8-LTS-274)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.4+8-LTS-274, mixed mode, sharing)
```

### API Endpoints

The backend API consists in services for the management of

#### Books

-   getAllBooks : returns the list of all books

    ```
    GET /api/books
    ```

-   getBookById : returns the books with the corresponding id

    ```
    GET /api/books/{id}
    ```

-   findBooksByTitle : returns the list of books having the search query in the title (case insensitive)

    ```
    GET /api/books/title/{searchString}
    ```

-   findBooksByAuthor : returns the list of books written by the authors having the search query in the name (case insensitive)
    ```
    GET /api/books/author/{searchString}
    ```

#### BookOrders

-   getAllBookOrders : returns the list of all book orders (NOT USED)

    ```
    GET /api/orders
    ```

-   getBookOrderById : returns the list of all book orders (NOT USED)

    ```
    GET /api/orders/{id}
    ```

-   updateBookOrder : returns the list of all book orders (NOT USED)

    ```
    PUT /api/orders/{id}
    ```

-   deleteBookOrder : returns the list of all book orders (NOT USED)

    ```
    DELETE /api/orders/{id}
    ```

-   createBookOrder : Creates a new order for the user with id in query parameter.  
     The request body must contain the list of books (book id) and their quantity
    ```
    POST /api/orders/user/{id}
    Request body: [
        {
            book: {
                id: <book_id>
            },
            quantity: <qty>
        }
    ]
    ```

#### Users

-   getAllUsers : Returns a list of all the users in the database

    ```
    GET /api/users
    ```

-   getUserById : returns the user with the corresponding id

    ```
    GET /api/users/{id}
    ```

-   createUser : Creates a new user in the database

    ```
    POST /api/users
    Request body : {
        username: <username>,
        password: <password>
    }
    ```

-   updateUser : Updates a user in the database (NOT USED)

    ```
    PUT /api/users/{id}
    ```

-   doLogin : Logs in a user and returns it if the login is successful, or an 401 error
    ```
    POST /api/users/login
    Request body : {
        username: <username>,
        password: <password>
    }
    ```

### How to use the Backend API

To start the application, you will need :

-   a MySQL database
-   clone the repository
-   open the file `book-store-api\src\main\resources\application.properties` and
    replace the connection string, corresponding to your environment

    ```
    spring.datasource.url=jdbc:mysql://<host>:<port>/<database_name>
    spring.datasource.username=<user>
    spring.datasource.password=<password>

    ```

-   open a terminal
-   go to the root of the application (`book-store-api` folder)
-   run the application using the command `./gradlew bootRun`  
    By default, the application will run on http://localhost:8080.
