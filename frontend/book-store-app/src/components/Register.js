import React, { useContext, useState } from "react";
import axios from "../utils/axios";
import { UserContext } from "../context/UserContext";

/**
 * Register component
 *
 * @param {function} onClose - Function to close the popup
 *
 * @returns {JSX.Element} - The Register component
 */
const Register = ({ onClose }) => {
    const { setConnectedUser } = useContext(UserContext);
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
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
            confirmPassword: "",
        });
    };

    /**
     * Handle the registration form submission
     * Call to the registration service. If the registration is successful,
     * the user is automatally logged in and the popup is closed
     */
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const resp = await axios.post("/users", {
                username: form.username,
                password: form.password,
            });
            setConnectedUser(resp.data);
            resetForm();
            onClose();
        } catch (error) {
            setError(error?.response?.data || "Error during the registration");
        }
    };
    return (
        <div className="register-popup">
            <div className="register-popup-container">
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Register
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

                <form onSubmit={handleRegisterSubmit} className="register-form">
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <label
                            className="register-form-label"
                            htmlFor="confirmPassword"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            required
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="register-popup-container-buttons">
                        <button
                            className="register-popup-button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className="register-popup-button"
                            onClick={resetForm}
                        >
                            Reset
                        </button>
                        <button className="register-popup-button" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
