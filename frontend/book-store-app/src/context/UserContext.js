import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [connectedUser, setConnectedUser] = useState(null);

    return (
        <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
            {children}
        </UserContext.Provider>
    );
};
