import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import usdtImage from '../../../assets/usdt.png'
import btcImage from '../../../assets/Bitcoin.webp'
import ethImage from '../../../assets/eth.png'


import './SelectMethod.css'


interface SelectMethodProps {
    usdt: boolean,
    btc: boolean,
    eth: boolean
}

const selectMethod: React.FC<SelectMethodProps> = ({ usdt, btc, eth }) => (
    <div className='selectMethod_wrapper'>
        <div>
            <div>
                <div className="selectMethod_wrapper_usdt_image">
                    {usdt && <div>
                        <img src={usdtImage} alt='' />
                        <div>USDT</div>
                    </div>}
                    {btc && <div>
                        <img src={btcImage} alt='' />
                        <div>BTC</div>
                    </div>}
                    {eth && <div>
                        <img src={ethImage} alt='' />
                        <div>ETH</div>
                    </div>}
                    <div>
                        <IoMdArrowDropdown style={{fontSize: "larger"}} />
                        <IoMdArrowDropup style={{fontSize: "larger"}} />
                    </div>
                </div>
            </div>
            <div className="selectMethod_wrapper_amount">
                <div>Amount</div>
                <IoMdArrowDropdown style={{fontSize: "larger"}}/>
                <IoMdArrowDropup style={{fontSize: "larger"}} />
            </div>
            <select>
                <option>Bank Transfer</option>
            </select>
        </div>
        <div></div>
    </div>
);

export default selectMethod;