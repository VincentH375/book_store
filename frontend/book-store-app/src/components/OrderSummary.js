import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";

/**
 * A component that displays the order summary, after the user has placed an order.
 * It displays the order status (success or failure), the items in the order, the total price,
 * and a button to go back to the shop.
 * @param {{ success: boolean, message: string }} orderStatus The status of the order
 * @param {function} showShoppingArea A function to show the shopping area
 * @returns {React.ReactElement} The component
 */
const OrderSummary = ({ orderStatus, showShoppingArea }) => {
    const { shoppingCart, clearCart } = useContext(CartContext);

    const handleBackToShop = () => {
        if (orderStatus.success === true) clearCart();
        showShoppingArea();
    };

    return (
        <div>
            {orderStatus.success === true && (
                <h2 style={{ color: "green" }}>{orderStatus.message}</h2>
            )}
            {orderStatus.success === false && (
                <h2 style={{ color: "red" }}>{orderStatus.message}</h2>
            )}
            <h2>Order Summary</h2>
            {shoppingCart.map((item) => (
                <ShoppingCartItem
                    key={item.book.id}
                    cartItem={item}
                    readOnly={true}
                />
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

            <button
                onClick={handleBackToShop}
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
            >
                Back to the shop
            </button>
        </div>
    );
};

export default OrderSummary;
