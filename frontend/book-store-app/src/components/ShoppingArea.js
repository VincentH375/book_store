import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Catalog from "./Catalog";
import OrderSummary from "./OrderSummary";

const ShoppingArea = () => {
    const [orderStatus, setOrderStatus] = useState(null);

    return (
        <div
            style={{
                padding: "20px",
            }}
        >
            {!orderStatus && (
                <main
                    style={{
                        display: orderStatus !== null ? "none" : "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                    }}
                >
                    <Catalog />
                    <ShoppingCart
                        showOrderSummary={(resp) => setOrderStatus(resp)}
                    />
                </main>
            )}
            {orderStatus && (
                <OrderSummary
                    showShoppingArea={() => setOrderStatus(null)}
                    orderStatus={orderStatus}
                />
            )}
        </div>
    );
};

export default ShoppingArea;
