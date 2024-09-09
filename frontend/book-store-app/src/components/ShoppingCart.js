import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

/**
 * A component representing the shopping cart.
 * It displays a list of items added to the cart, their quantities and
 * total price, and two buttons to clear the cart or to proceed to
 * checkout.
 * @returns {React.ReactElement} The component
 */
const ShoppingCart = ({ showOrderSummary }) => {
    const { shoppingCart, clearCart, placeOrder } = useContext(CartContext);

    const handlePlaceOrder = async () => {
        const response = await placeOrder();
        showOrderSummary(response);
    };

    return (
        <div
            style={{
                backgroundColor: "#f2f2f2",
                padding: "0 50px 20px",
                minWidth: "300px",
            }}
        >
            <h2>Shopping Cart</h2>

            {shoppingCart &&
                shoppingCart.map((cartItem, index) => (
                    <ShoppingCartItem key={index} cartItem={cartItem} />
                ))}

            <div style={{ fontSize: "20px", margin: "20px 0" }}>
                <h4>
                    Total:{" "}
                    {Math.round(
                        shoppingCart.reduce(
                            (a, b) => a + b.book.price * b.qty,
                            0
                        ) * 100
                    ) / 100}{" "}
                    €
                </h4>
            </div>

            {shoppingCart.length > 0 && (
                <div
                    style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                    <button
                        style={{
                            display: "flex",
                            padding: "10px",
                            border: "1px solid black",
                            borderRadius: "20px",
                            fontSize: "16px",
                            minWidth: "100px",
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => clearCart()}
                    >
                        <FaRegTrashAlt style={{ marginRight: "5px" }} />
                        <strong>Clear</strong>
                    </button>
                    <button
                        style={{
                            display: "flex",
                            padding: "10px",
                            border: "1px solid black",
                            borderRadius: "20px",
                            fontSize: "16px",
                            minWidth: "100px",
                            backgroundColor: "lime",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={handlePlaceOrder}
                    >
                        <FiShoppingCart style={{ marginRight: "5px" }} />
                        <strong>Buy</strong>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
