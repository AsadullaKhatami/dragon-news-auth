import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        {
            name: "rohim mia",
            email: "rohim@mia.com"
        }
    );
    const authData = {
        user,
        setUser
    }
    return <UserContext value={authData}>{children}</UserContext>
}

export default AuthProvider;