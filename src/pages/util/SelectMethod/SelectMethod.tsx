import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import usdtImage from '../../../assets/usdt.png'
import btcImage from '../../../assets/Bitcoin.webp'
import ethImage from '../../../assets/eth.png'


import './SelectMethod.css'


interface SelectMethodProps {
    usdt: boolean,
    btc: boolean,
    eth: boolean,
    toggleCoin: boolean,
    toggleAmount: boolean,
    clicked: () => void,
    amountClicked: () => void
}

const selectMethod: React.FC<SelectMethodProps> = (
    { usdt, btc, eth, toggleCoin, toggleAmount, clicked, amountClicked }) => (
    <div className='selectMethod_wrapper'>
        <div>
            <div>
                <div className="selectMethod_wrapper_usdt_image">
                    {usdt && <div>
                        <img src={usdtImage} alt='' />
                        <div onClick={clicked}>USDT</div>
                    </div>}
                    {btc && <div>
                        <img src={btcImage} alt='' />
                        <div onClick={clicked}>BTC</div>
                    </div>}
                    {eth && <div>
                        <img src={ethImage} alt='' />
                        <div onClick={clicked}>ETH</div>
                    </div>}
                    <div>
                        {!toggleCoin && <IoMdArrowDropdown style={{fontSize: "larger"}} />}
                        {toggleCoin && <IoMdArrowDropup style={{fontSize: "larger"}} />}
                    </div>
                </div>
            </div>
            <div className="selectMethod_wrapper_amount">
                <div onClick={amountClicked}>Amount</div>
                {!toggleAmount && <IoMdArrowDropdown style={{fontSize: "larger"}}/>}
                {toggleAmount && <IoMdArrowDropup style={{fontSize: "larger"}} />}
            </div>
            <select>
                <option>Bank Transfer</option>
            </select>
        </div>
        <div></div>
    </div>
);

export default selectMethod;