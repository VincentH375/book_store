import React, { useState, useContext, useEffect } from "react";
import SearchBook from "./SearchBook";
import axios from "../utils/axios";
import { FaShoppingBasket } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

/**
 * A component representing the catalog of books.
 * It displays a list of books, their prices and a button to add each one to the cart.
 * The button is disabled if the user is not connected.
 * @returns {React.ReactElement} The component
 */
const Catalog = () => {
    const [listOfBooks, setListOfBooks] = useState([]);
    const [enableShopping, setEnableShopping] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { connectedUser } = useContext(UserContext);

    useEffect(() => {
        setEnableShopping(connectedUser !== null);
    }, [connectedUser]);

    /**
     * Searches for books in the catalog, given a search type (title or author)
     * and a search value.
     * @param {string} searchBy - the search type (title or author)
     * @param {string} searchCriteria - the search value
     */
    const searchBooks = async (searchBy, searchCriteria) => {
        try {
            const resp = await axios.get(`books/${searchBy}/${searchCriteria}`);
            setListOfBooks(resp.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Catalog</h1>
            <SearchBook search={searchBooks} />
            <table border={1} cellSpacing={0} cellPadding={5}>
                <thead>
                    <tr>
                        <th style={{ minWidth: "300px" }}>Title</th>
                        <th style={{ minWidth: "300px" }}>Author</th>
                        <th style={{ minWidth: "100px" }}>Price (€)</th>
                        <th style={{ minWidth: "100px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfBooks.map((book) => (
                        <tr key={book.id} style={{ padding: "10px" }}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td style={{ textAlign: "right" }}>{book.price}</td>
                            <td>
                                <button
                                    style={{
                                        border: "none",
                                        backgroundColor: "white",
                                    }}
                                    disabled={!enableShopping}
                                    title={
                                        !enableShopping
                                            ? "Please login to start shopping"
                                            : "Add to cart"
                                    }
                                    onClick={() => addToCart(book)}
                                >
                                    <FaShoppingBasket size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Catalog;
