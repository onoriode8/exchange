import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

interface Wallet {
    id: string,
    BTC: number,
    ETH: number,
    NGN: number,
    USDT: number
}
interface userDataProps {
    id: string,
    email: string,
    wallet: Wallet
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [userData, setUserData] = useState<null>(null)
    const authentication = false
    const [accessToken, setAccessToken] = useState<string>("")
    const [auth] = useState<boolean>(authentication)
    const [account, setAccount] = useState<null | AccountType>(null)

    const [p2pOrder, setP2pOrder] = useState<null | PushUserP2POrder >(null)

    const pushUserP2POrderHandler = (args: PushUserP2POrder) => {
        console.log("PUSH_ORDERS", args)
        setP2pOrder(args)
    }
    const setAccessTokenHandler = (args: string) => {
        console.log(args)
        setAccessToken(args)
    }

    const userDataHandler = (args: userDataProps) => {
        console.log("USER DATA FROM SERVER", args)
        setUserData(args)
    }

    //push selected account from withdraw component.
    const pushAccountHandler = (args: AccountType) => {
        console.log("pushAccount", args)
        setAccount(args)
    }

    console.log(account)
    useEffect(() => {
        if(userData) return 
        const fetchUserData = async() => {
            try {
                const res = await axios.post("http://localhost:8080/user/refresh/token", {}, {
                    withCredentials: true
                })
                console.log("CONTEXT RES", res)
            } catch(err) {
                console.log(err)
            }
        }
        fetchUserData()
    }, [userData])

    return (
        <AuthContext.Provider value={{ 
            userData: userData,
            accessToken: accessToken,
            setAccessToken: setAccessTokenHandler,
            userDataHandler: userDataHandler,
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