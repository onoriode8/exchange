import React from "react"

interface AuthContextProps {
    auth: boolean
}

interface AuthContextPropsData {
    authenticationDataProps: AuthContextProps | null
}

const AuthContext = React.createContext<AuthContextPropsData>({
    authenticationDataProps: null
})

export default AuthContext;