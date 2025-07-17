import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


export const usePaymentMethod = (urlPath: string) => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<unknown>()
    const [bankName, setBankName] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [bankBranch, setBankBranch] = useState<string>("")
    const [bankAccountNumber, setBankAccountNumber] = useState<number | null>(null)

    const navigate = useNavigate()

    const addPaymentMethodHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        if(bankName.length === 0) {
            setIsValid(true)
            return
        }
        const token = "2164io35gjv"
        try {
            setLoading(true)
            const res = await fetch(urlPath, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + token
                },
                body: JSON.stringify({
                    name, bankName, bankBranch, bankAccountNumber
                })
            })
            const data = await res.json()
            if(data.ok === false) throw new Error(data)
            setLoading(false)
            navigate("/withdraw/user")
        } catch (error) {
            setLoading(false)
            setIsError(true)
            setError(error)
            console.log(error)
        }
    }

    const dummyName = "ONORIODE UMUKORO" //get name from backend server-side.

    return {
        dummyName,
        error,
        isError,
        isValid,
        loading,
        bankName, 
        bankAccountNumber,
        bankBranch,setIsError,
        setBankAccountNumber,
        setBankBranch,
        setBankName,
        setName,
        addPaymentMethodHandler
    }
}