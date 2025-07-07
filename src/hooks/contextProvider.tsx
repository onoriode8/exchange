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

interface PushUserP2POrder {
    coin: string, //USDT, BTC ETH
    sellerUsername: string,
    price: number,
    coinData: boolean, //TRUE 
    quantity: number,
    duration: string,
    amountEntered: number, //AmountEntered to buy or sell
    minimumLimit: number,
    maximumLimit: number,
    totalOrdersCompleted: number
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    // const authentication = !!localStorage.getItem("easypay")
  // also get isAuth = true or false from res.cookies to manage page reload by user.

    const authentication = false

    const [auth] = useState<boolean>(authentication)
    const [account, setAccount] = useState<null | AccountType>(null)

    const [p2pOrder, setP2pOrder] = useState<null | PushUserP2POrder >(null)

    const pushUserP2POrderHandler = (args: PushUserP2POrder) => {
        console.log("PUSH_ORDERS", args)
        setP2pOrder(args)
    }

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
            p2pOrder: p2pOrder,
            pushAccount: pushAccountHandler,
            pushUserP2POrder: pushUserP2POrderHandler
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;