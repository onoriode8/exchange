import { NavLink } from "react-router-dom";

import { RiP2pFill } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { PiReceiptFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";


import './bottomNav.css';


const bottomNav = () => (
    <div className="bottomNav_wrapper">
        <NavLink to="/user/p2p/trading">
            <RiP2pFill style={{fontSize: "1.5em"}} />
            <div>P2P</div>
        </NavLink>
        <NavLink to="/user/ads">
            <FcAdvertising style={{fontSize: "1.5em"}} />
            <div>Ads</div>
        </NavLink>
        <NavLink to="/user/orders">
            <PiReceiptFill style={{fontSize: "1.5em"}} />
            <div>Orders</div>
        </NavLink>
        <NavLink to="/user/profile">
            <RxAvatar style={{fontSize: "1.5em"}} />
            <div>Profile</div>
        </NavLink>
    </div>
);

export default bottomNav;