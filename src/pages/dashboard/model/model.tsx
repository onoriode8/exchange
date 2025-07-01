import { MdOutlineCancel } from "react-icons/md";
import { RiP2pFill } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";

import './model.css'

interface ModelProps {
    close: () => void
}

const model:React.FC<ModelProps> = ({ close }) => (
    <div>
        <div className="model_backdrop_wrapper"></div>
        <div className="model_wrapper_container">
        <div className="model_wrapper">
            <div className="model_wrapper_div_first_child">
                <p>Select Payment Method</p>
                <MdOutlineCancel onClick={close} className="model_wrapper_icon"/>
            </div>
            <div className="model_wrapper_crypto_wrapper">
                <div className="model_wrapper_p2p_wrapper">
                    <p>Buy Crypto with Fiat</p>
                    <div>
                        <RiP2pFill className="model_wrapper_icon" />
                        <div>
                            <div>P2P Trading  0.5 USD Fees</div>
                            <div>Bank Transfer</div>
                        </div>
                    </div>
                </div>
        
                <div className="model_wrapper_deposit_wrapper">
                    <p>Deposit with Crypto</p>
                    <div>
                        <BiTransfer className="model_wrapper_icon" />
                        <div>
                            <div>Deposit Crypto</div>
                            <div>Already have Crypto? Deposit directly</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);

export default model;