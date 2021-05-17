import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken'));

    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider>

    )
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };