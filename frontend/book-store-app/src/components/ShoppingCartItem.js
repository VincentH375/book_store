import React, { useContext } from "react";
import { FaRegTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

/**
 * A component representing a single item in the shopping cart.
 * @param {Object} cartItem The item in the cart
 * @return {React.ReactElement} The component
 */
const ShoppingCartItem = ({ cartItem, readOnly = false }) => {
    const { addToCart, removeFromCart, deleteFromCart } =
        useContext(CartContext);

    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    margin: "10px",
                }}
            >
                <div>
                    <span>
                        <strong>{cartItem.book.title}</strong>
                    </span>
                    <br />
                    <span>
                        <i>{cartItem.book.author}</i>
                    </span>
                    <br />
                    <span>Unit Price : {cartItem.book.price}</span>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >
                        <span>Quantity : {cartItem.qty}</span>
                        {!readOnly && (
                            <div style={{ display: "flex", gap: "0px" }}>
                                <button
                                    onClick={() => addToCart(cartItem.book)}
                                    style={{
                                        cursor: "pointer",
                                        border: "none",
                                    }}
                                >
                                    <FaPlus />
                                </button>
                                <button
                                    onClick={() =>
                                        removeFromCart(cartItem.book)
                                    }
                                    style={{
                                        cursor: "pointer",
                                        border: "none",
                                    }}
                                >
                                    <FaMinus />
                                </button>
                                <button
                                    onClick={() =>
                                        deleteFromCart(cartItem.book)
                                    }
                                    style={{
                                        cursor: "pointer",
                                        border: "none",
                                    }}
                                >
                                    <FaRegTrashAlt />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
