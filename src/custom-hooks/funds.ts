import { useState, useContext, useEffect} from 'react'

import AuthContext from '../hooks/context'


export const useWallet = () => {
    const {wallet, setWallet} = useState<null>(null)
    const {error, setError} = useState<unknown>()

    const { userData, accessToken } = useContext(AuthContext)
    
    useEffect(() => {
        const fetchUserWallet = async() => {
            try {
                const res = await fetch(
                    `http://localhost:8080/user/funds/${userData.id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type":"application/json",
                            "Authorization":"Bearer " + accessToken
                        },
                        credentials: "include"
                    })
                console.log("RESPONSE FROM FUNDS", res)
                if(!res.data) throw new Error()
                setWallet(res.data)
            } catch (error) {
                setError(error)
            }
        }
        fetchUserWallet()
    }, [userData, accessToken])
    
    return { wallet, error }
}