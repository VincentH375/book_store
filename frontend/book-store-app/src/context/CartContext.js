import React, { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "../utils/axios";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const { connectedUser } = useContext(UserContext);

    /**
     * Add a book to the cart, increase the quantity of this book by 1 if already in cart
     * @param {Book} book The book to add
     * @returns {void}
     */
    const addToCart = (book) => {
        const bookInCart = shoppingCart.find(
            (item) => item.book.id === book.id
        );

        if (bookInCart) {
            setShoppingCart(
                shoppingCart.map((item) =>
                    item.book.id === book.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
            return;
        } else {
            setShoppingCart([...shoppingCart, { book, qty: 1 }]);
            return;
        }
    };

    /**
     * Remove a book from the cart, decrease the quantity of this book by 1, and delete from cart if quantity is 0
     * @param {Book} book
     * @returns
     */
    const removeFromCart = (book) => {
        const bookInCart = shoppingCart.find(
            (item) => item.book.id === book.id
        );

        if (bookInCart.qty === 1) {
            setShoppingCart(
                shoppingCart.filter((item) => item.book.id !== book.id)
            );
            return;
        } else {
            setShoppingCart(
                shoppingCart.map((item) =>
                    item.book.id === book.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
            );
            return;
        }
    };

    /**
     * Delete completely a book from the cart, remove all instances of this book
     * @param {Book} book The book to remove
     * @returns {void}
     */
    const deleteFromCart = (book) => {
        setShoppingCart(
            shoppingCart.filter((item) => item.book.id !== book.id)
        );
    };

    /**
     * Clear the shopping cart, delete all items
     * @returns {void}
     */
    const clearCart = () => {
        setShoppingCart([]);
    };

    /**
     * Place the order for the connected user, with all items in the cart
     * @returns {void}
     * @example
     * url POST : api/orders/user/1
     * body :
     * [
     * {
     *         "quantity": 4,
     *         "book": { "id": 54 }
     *     },
     *     {
     *         "quantity": 5,
     *         "book": { "id": 13 }
     *     }
     * ]
     */
    const placeOrder = async () => {
        // const url = "orders/user/2";
        const url = "orders/user/" + connectedUser.id;
        const body = shoppingCart.map((item) => ({
            book: { id: item.book.id },
            quantity: item.qty,
        }));
        try {
            const resp = await axios.post(url, body);
            return {
                success: true,
                data: resp.data,
                message: `Your order (#${resp.data.id}) has been placed successfully !`,
            };
        } catch (error) {
            return {
                success: false,
                error: error.response.data,
                message: "Sorry, an issue occurred during the order.",
            };
        }
    };

    return (
        <CartContext.Provider
            value={{
                shoppingCart,
                setShoppingCart,
                addToCart,
                removeFromCart,
                clearCart,
                deleteFromCart,
                placeOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
