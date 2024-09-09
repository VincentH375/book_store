# Book Store Application

Author: Vincent Heggermont

This repository contains the backend and the frontend parts of the Book Store.

# Table of contents

-   [The Database](#the-database)
-   [Backend API](#backend-api)
    -   [Prerequisites](#prerequisites)
    -   [API Endpoints](#api-endpoints)
        -   [Books](#books)
        -   [Book Orders](#bookorders)
        -   [Users](#users)
    -   [How to use the Backend API](#how-to-use-the-backend-api)
-   [Frontend Application](#frontend-application)
    -   [Prerequisites](#prerequisites-1)
    -   [How to use the frontend application](#how-to-use-the-frontend-application)
    -   [How the application works](#how-the-application-works)

## The Database

The development of this application has been made with a MySQL database.  
A SQL script `db.sql` is provied in the root of the repository. It contains the creation and initialization of tables.

-   Create your database
-   Import the SQL script `db.sql`

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

## Frontend Application

The front-end application has been build using React.js
The only depencies added to the project are

-   axios : for the REST calls
-   react-icons : to include some icons in the page

### Prerequisites

Before running this project, ensure you have the following installed on your machine:

-   Node.js
-   npm (or yarn)

This development has been made with the following versions

```
node version : v20.11.0
npm version : 10.2.4
```

### How to use the frontend application

-   clone the repository
-   update the .env file with the location of your backend services (host and port)
-   open a terminal and go to the root of the application (`book-store-app` folder)
-   install the dependencies
    -   using npm : `npm install`
    -   using yarn : `yarn install`
-   start the application

    -   using npm : `npm start`
    -   using yarn : `yarn start`

    By default, the application will run on http://localhost:3000.

### How the application works

The book store allows the connected users to order books.

The catalog presents the list of books corresponding the the search criteria (book title or book author). This search is case insensitive and corresponds to a "title/author contains the criteria".

The application user can browse the catalog, without being connected, but cannot order a book.

The new users can register the application, using the Register button in the header.  
Users can Sign in the application using the Sign In button in the header.

When the user orders a book, by clicking on the icon in the catalog, the book is added to the cart. If the same book was already in the cart, the quantity is incremented.

The user can visualize the list of books added to the cart, and can change que quantity of each book, using the buttons "+" to add an examplar of a book, "-" to remove remove an examplar book or the "trash bin" to remove all examplars of a book

When the user clicks on the Buy button in the shopping cart, the order is placed with the list of books and their quantities.  
The user is redirected to a confirmation screen presenting the order id and the list of ordered books.  
In case of problem, the confirmation screen will present the error message.
