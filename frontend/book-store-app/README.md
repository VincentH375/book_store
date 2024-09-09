# Book Store Application (Frontend)

Author: Vincent Heggermont

# Table of contents

-   [Frontend Application](#frontend-application)
    -   [Prerequisites](#prerequisites-1)
    -   [How to use the frontend application](#how-to-use-the-frontend-application)
    -   [How the application works](#how-the-application-works)

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
