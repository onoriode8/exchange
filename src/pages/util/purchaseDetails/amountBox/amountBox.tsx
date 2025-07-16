import { useContext } from 'react';

import AuthContext from '../../../../hooks/context';

import './amountBox.css'


interface AmountBoxProps {
    balance: number,
    activity: string,
    countDownSec: boolean,
    amountInputHandler: () => void,
    amountRequested: number | undefined
}

const AmountBox:React.FC<AmountBoxProps> = (props) => {
    const { p2pOrder } = useContext(AuthContext)
    console.log(props.activity)
    return (
        <div className='AmountBox_wrapper_'>
            {/* {props.amountRequested} */}
            <p>Fiat</p>
            <div className='AmountBox_wrapper_input'>
                <input type="number" 
                    placeholder='Please enter amount' 
                    onChange={props.amountInputHandler} />
                <div>NGN</div>
                <div>All</div> 
{/* Onclicking on all will put all the user dollars  */}
{/* into the input and calculate to usdt below */}
            </div>
            <div className='AmountBox_wrapper_receive'>
                <div>I will receive</div>
                {/* Divide the amount Entered in NGN to USDT and rendered bewlow*/}
                <div>20 {p2pOrder?.coin}</div> 
            </div>
            {props.countDownSec ? 
                <button>{props.activity}</button> :
                <button>Refresh Quote</button>
            }
        </div>
    );
}

export default AmountBox;