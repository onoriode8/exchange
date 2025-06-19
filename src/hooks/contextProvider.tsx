import React, { useState } from 'react';
import AuthContext from './context';


interface ContextProps {
    children: React.ReactNode
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const authentication = localStorage.getItem("easypay")

    const [auth] = useState(authentication)
    return (
        <AuthContext.Provider value={{ authenticationDataProps: auth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;