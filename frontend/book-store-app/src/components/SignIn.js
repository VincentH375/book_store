import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "../utils/axios";

/**
 * Component to sign in a user
 */
const SignIn = ({ onClose }) => {
    const { setConnectedUser } = useContext(UserContext);

    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setError("");
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setForm({
            username: "",
            password: "",
        });
    };

    /**
     * Handle the sign in form submission
     * Call to the login service. If the login is successful,
     * the popup is closed, otherwise an error message is displayed
     * @param {React.FormEvent<HTMLFormElement>} e - The event
     */
    const handleSignInSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const resp = await axios.post("/users/login", {
                username: form.username,
                password: form.password,
            });
            setConnectedUser(resp.data);
            resetForm();
            onClose();
        } catch (error) {
            setError("Invalid credentials, please try again.");
        }
    };

    return (
        <div className="register-popup">
            <div className="register-popup-container">
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Sign In
                </span>

                <div
                    style={{
                        justifyContent: "center",
                        display: "flex",
                        minHeight: "60px",
                    }}
                >
                    {error && (
                        <p style={{ color: "red", fontWeight: "bold" }}>
                            {error}
                        </p>
                    )}
                </div>

                <form onSubmit={handleSignInSubmit} className="register-form">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <label
                            className="register-form-label"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                            value={form.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <label
                            className="register-form-label"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="register-popup-container-buttons">
                        <button
                            type="button"
                            className="register-popup-button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="register-popup-button"
                            onClick={resetForm}
                        >
                            Reset
                        </button>
                        <button className="register-popup-button" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
