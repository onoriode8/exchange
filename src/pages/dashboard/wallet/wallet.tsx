import React, { useContext } from 'react'

import { GrHide } from "react-icons/gr";

import './wallet.css'

interface WalletProps {
    close: () => void
}

const Wallet: React.FC<WalletProps> = ({ close }) => {
    return (
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
    )
}

export default Wallet;