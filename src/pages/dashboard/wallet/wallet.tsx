import React from 'react'

import { GrHide } from "react-icons/gr";

import './wallet.css'

interface WalletProps {
    close: () => void
}

const Wallet: React.FC<WalletProps> = ({ close }) => {
    return (
        <div>
        <div className="wallet_wrapper_wrapper">
            <div className="wallet_wrapper">
                <div className="wallet_wrapper_total_assets">
                    <p>Total Assets</p>
                    <GrHide />
                </div>
                <div>
                    <div>N 0.00 {}</div>
                </div>
            </div>
            <div className="wallet_wrapper_button">
                <button onClick={close}>Deposit</button>
            </div>
        </div>
        <div className='wallet_wrapper_wallet_coin_wrapper'>
            <div>
                <div>BTC/USDT</div>
                <div>{} 0.005 BTC</div>
            </div>
            <div className='wallet_wrapper_wallet_ETH_USDT'>
                <div>ETH/USDT</div>
                <div>{} 0.01 ETH</div>
            </div><div>
                <div>USDT</div>
                <div>{} 0.005 USDT</div>
            </div>
        </div>
        </div>
    )
}

export default Wallet;