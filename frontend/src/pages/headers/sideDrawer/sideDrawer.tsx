import React from "react";
import { NavLink } from "react-router-dom"
import { TbWorld } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

import AuthSide from "./auth/auth";


import './sideDrawer.css'


interface SideDrawerProps {
    name: string,
    path: string,
    close: () => void
}

const sideDrawer: React.FC<SideDrawerProps> = (SideDrawerProps) => (
    <div>
    <div onClick={SideDrawerProps.close} 
            className="sideDrawer_wrapper_background"></div>
        <div className="sideDrawer_wrapper">
            <ul>
                <IoCloseOutline onClick={SideDrawerProps.close} className="sideDrawer_close" />
                <AuthSide />
                <NavLink to={`${SideDrawerProps.path}`}
                    >{SideDrawerProps.name}</NavLink>
                <NavLink to="/trade">Trade</NavLink>
                <NavLink to="/my/wallet">My Wallet</NavLink>
                <NavLink to="">
                    <TbWorld />
                    <div>English</div>
                </NavLink>
            </ul>
        </div>
    </div>
);

export default sideDrawer;