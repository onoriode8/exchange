import { useState, useContext, type ChangeEvent } from "react";

import AuthContext from "../hooks/context";
import { useNavigate } from "react-router-dom";


export const useRegister = () => {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<unknown>()
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    
    const registerHandler = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch("http://localhost:8080/user/register", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            console.log("REGISTER", data)
            if(!res.ok) {
                throw new Error(data)
            }
            setLoading(false)
        } catch (error: unknown) {
            setLoading(false)
            setError(error)
        }
    }

    return { 
        email, loading, error, registerHandler,
        setEmail, password, setPassword 
    }
}


export const useLogin = () => {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<unknown>()
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    const { setAccessToken, userDataHandler } = useContext(AuthContext)

    const loginHandler = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            console.log(data)
            if(!res.ok) {
                throw new Error(data)
            }
            setLoading(false)
            userDataHandler(data.user)
            setAccessToken(data.accessToken)
            navigate('/user/my/dashboard')
        } catch (error: unknown) {
            setLoading(false)
            setError(error)
        }
    }

    return { 
        email, loading, error, loginHandler,
        setEmail, password, setPassword, setError
    }
}