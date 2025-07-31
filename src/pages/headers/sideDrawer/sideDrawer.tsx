import React, { useContext } from "react";
import { NavLink } from "react-router-dom"
import { TbWorld } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

import AuthSide from "./auth/auth";
import AuthContext from "../../../hooks/context";

import './sideDrawer.css'


interface SideDrawerProps {
    name: string,
    path: string,
    close: () => void
}

const SideDrawer: React.FC<SideDrawerProps> = (SideDrawerProps) => {
    const { userData } = useContext(AuthContext)
    return (
    <div>
    <div onClick={SideDrawerProps.close} 
            className="sideDrawer_wrapper_background"></div>
        <div className="sideDrawer_wrapper">
            <ul onClick={SideDrawerProps.close}>
                <IoCloseOutline onClick={SideDrawerProps.close} className="sideDrawer_close" />
                <AuthSide />
                {/* <NavLink to={`${SideDrawerProps.path}`} */}
                    {/* >{SideDrawerProps.name}</NavLink> */}
                <NavLink to="/user/p2p/trading">P2P</NavLink>
                {userData && <NavLink to="/trade">Trade</NavLink>}
                {userData && <NavLink to="/my/wallet">My Wallet</NavLink>}
                <NavLink to="">
                    <TbWorld />
                    <div>English</div>
                </NavLink>
            </ul>
        </div>
    </div>
    );
}

export default SideDrawer;