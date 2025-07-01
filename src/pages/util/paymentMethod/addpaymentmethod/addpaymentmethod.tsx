import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../input/input'

import './addpaymentmethod.css'
import Loading from '../../../loading/loading'
import ErrorMessage from '../../error/errorMessage/error'
import Backdrop from '../../error/backdrop/backdrop'


interface AddPaymentMethodProps {
    urlPath: string
}

const Addpaymentmethod: React.FC<AddPaymentMethodProps> = ({ urlPath }) => {
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

    return (
        <div className='Addpaymentmethod_wrapper'>
            {loading && <div><Loading /></div>}
            {isError && <div>
                <Backdrop />
                <ErrorMessage error={error} click={() => setIsError(false)} />
            </div>}
            <form onSubmit={addPaymentMethodHandler} className='Addpaymentmethod_form'>
                <p>Payment Method</p>
                <Input type="text" value={dummyName} isValid={isValid} placeholder="" label="Name"
                    onChangeFunc={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <Input type="text" value={bankName} isValid={isValid} placeholder="Please Enter Bank Name" label="Bank Name"
                    onChangeFunc={(e: React.ChangeEvent<HTMLInputElement>) => setBankName(e.target.value)} />
                <Input type="number" value={Number(bankAccountNumber)} isValid={isValid} placeholder="Please Enter Account Number" label="Bank Account Number"
                    onChangeFunc={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccountNumber(Number(e.target.value))} />
                <Input type="text" value={bankBranch} isValid={isValid} placeholder="Please Enter Bank Branch" label="Bank Branch"
                    onChangeFunc={(e: React.ChangeEvent<HTMLInputElement>) => setBankBranch(e.target.value)} />
                <button type='submit'>Confirm</button>
            </form>
        </div>
    );
}

export default Addpaymentmethod;