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

interface AuthContextPropsData {
    authenticationDataProps: boolean,
    account: null | AccountType,
    p2pOrder: null | PushUserP2POrder,
    pushUserP2POrder: (args: PushUserP2POrder) => void,
    pushAccount: (args: AccountType) => void
}

const AuthContext = React.createContext<AuthContextPropsData>({
    authenticationDataProps: false,
    account: null,
    p2pOrder: null,
    pushUserP2POrder: () => {},
    pushAccount: () => {}
})

// export type { AccountType }
export default AuthContext;