import React, { useState } from 'react';

import AuthContext from './context';


interface ContextProps {
    children: React.ReactNode
}

interface AccountType {
    id: number,
    name: string,
    bankName: string,
    bankNumber: number
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    // const authentication = !!localStorage.getItem("easypay")
    const authentication = false

    const [auth] = useState<boolean>(authentication)
    const [account, setAccount] = useState<null>(null)

    //push selected account from withdraw component.
    const pushAccountHandler = (args: AccountType) => {
        console.log("pushAccount", args)
        setAccount(args)
    }

    console.log(account)

    return (
        <AuthContext.Provider value={{ 
            authenticationDataProps: auth,
            account: account,
            pushAccount: pushAccountHandler
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;