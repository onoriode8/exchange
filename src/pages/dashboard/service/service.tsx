import { NavLink } from 'react-router-dom'

import { RiP2pFill } from "react-icons/ri";
import { PiHandWithdrawFill } from "react-icons/pi";
import { BiTransfer } from "react-icons/bi";

import './service.css';


const service: React.FC = () => (
    <div className="service_wrapper">
        <div className="service_wrapper_div_first_child">
            <div>
                <RiP2pFill className="service_wrapper_icon"/>
                <div><NavLink to="/user/p2p/trading">P2P</NavLink></div>
            </div>
            <div className="service_wrapper_div_middle_child">
                <PiHandWithdrawFill className="service_wrapper_icon"/>
                <div><NavLink to="/withdraw/user">Withdraw</NavLink></div>
            </div>
            <div>
                <BiTransfer className="service_wrapper_icon"/>
                <div><NavLink to="/trade">Trade</NavLink></div>
            </div>
        </div>
    </div>
);

export default service;