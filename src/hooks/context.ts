import React from "react"

// interface AuthContextProps {
//     auth: boolean,
//     account: null,
//     pushAccount: () => void
// }

interface AccountType {
    id: number,
    name: string,
    bankName: string,
    bankNumber: number
}

interface AuthContextPropsData {
    authenticationDataProps: boolean,
    account: null,
    pushAccount: (args: AccountType) => void
}

const AuthContext = React.createContext<AuthContextPropsData>({
    authenticationDataProps: false,
    account: null,
    pushAccount: () => {}
})

export type { AccountType }
export default AuthContext;