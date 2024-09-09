import React from "react";
import Login from "./Login";

/**
 * A component representing the header of the application.
 * It displays the title of the app, and a login/logout button.
 * @returns {React.ReactElement} The component
 */
const Header = () => {
    return (
        <div
            style={{
                display: "flex",
                padding: "0 10px",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f2f2f2",
            }}
        >
            <div>
                <h1>Book Store App</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <Login />
            </div>
        </div>
    );
};

export default Header;
