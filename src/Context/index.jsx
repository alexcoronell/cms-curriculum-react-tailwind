import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        setCurrentUser(currentUser);
    }, []);

    const setCurrentUser = (currentUser) => {
        if (currentUser) {
            const { accessToken } = currentUser.stsTokenManager;
            const date = new Date();
            const currentTime = date.getTime() / 1000;
            console.log(accessToken)
            const { exp } = jwt_decode(accessToken)
            if (exp > currentTime) {
                setUser(currentUser);
                setAuthenticated(true)
            } else {
                localStorage.removeItem('user')
            }
        } else {
            setAuthenticated(false)
        }
    };

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                authenticated,
                setAuthenticated
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
