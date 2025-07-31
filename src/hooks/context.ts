import React from "react"


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

interface AuthContextPropsData {
    userData: null,
    accessToken: string,
    setAccessToken: (args: string) => void,
    userDataHandler: (arg: userDataProps) => void,
    authenticationDataProps: boolean,
    user: null,
    account: null | AccountType,
    p2pOrder: null | PushUserP2POrder,
    pushUserP2POrder: (args: PushUserP2POrder) => void,
    setUser: () => void,
    pushAccount: (args: AccountType) => void
}

const AuthContext = React.createContext<AuthContextPropsData>({
    userData: null,
    accessToken: "",
    setAccessToken: () => {},
    userDataHandler: () => {},
    authenticationDataProps: false,
    user: null,
    account: null,
    p2pOrder: null,
    setUser: () => {},
    pushUserP2POrder: () => {},
    pushAccount: () => {}
})


// export type { AccountType }
export default AuthContext;