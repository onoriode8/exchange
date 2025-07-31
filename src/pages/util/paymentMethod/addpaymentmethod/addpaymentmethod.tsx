import Input from '../input/input'

import './addpaymentmethod.css'
import Loading from '../../../loading/loading'
import ErrorMessage from '../../error/errorMessage/error'
import Backdrop from '../../error/backdrop/backdrop'
import { usePaymentMethod } from '../../../../custom-hooks/paymentmethod'


interface AddPaymentMethodProps {
    urlPath: string,
    processPayment: boolean
}

const Addpaymentmethod: React.FC<AddPaymentMethodProps> = ({ urlPath, processPayment }) => {
    const {
        bankName, bankAccountNumber,bankBranch,setIsError,
        dummyName, error, isError, isValid, loading,
        setBankAccountNumber, setBankBranch, setBankName,
        setName, addPaymentMethodHandler } = usePaymentMethod(urlPath)
    return (
        <div className='Addpaymentmethod_wrapper'>
            {loading && <div><Loading /></div>}
            {isError && <div>
                <Backdrop clicked={() => {}}/>
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
                {processPayment && <button type='submit'>Confirm</button>}
            </form>
        </div>
    );
}

export default Addpaymentmethod;