import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import Register from "./Register";
import SignIn from "./SignIn";

/**
 * A component to handle user login and logout.
 * If the user is logged in, it displays a welcome message with the username
 * and a logout button.
 * If the user is not logged in, it displays two buttons: Sign In and Register.
 * When either button is clicked, it displays the corresponding form in a
 * popup.
 */

const Login = () => {
    const { clearCart } = useContext(CartContext);
    const { connectedUser, setConnectedUser } = useContext(UserContext);
    const [openRegister, setOpenRegister] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);

    const toggleRegister = () => {
        setOpenRegister(!openRegister);
    };

    const toggleSignIn = () => {
        setOpenSignIn(!openSignIn);
    };

    const handleLogout = () => {
        clearCart();
        setConnectedUser && setConnectedUser(null);
    };

    return (
        <div>
            {connectedUser && (
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span>Welcome {connectedUser.username}</span>
                    <button
                        onClick={handleLogout}
                        className="register-popup-button"
                    >
                        Logout
                    </button>
                </div>
            )}
            {!connectedUser && (
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        onClick={toggleSignIn}
                        className="register-popup-button"
                    >
                        Sign In
                    </button>

                    <button
                        onClick={toggleRegister}
                        className="register-popup-button"
                    >
                        Register
                    </button>
                </div>
            )}
            {openRegister && <Register onClose={toggleRegister} />}
            {openSignIn && <SignIn onClose={toggleSignIn} />}
        </div>
    );
};

export default Login;
