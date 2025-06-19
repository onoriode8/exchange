import React from "react";
import { NavLink } from "react-router-dom"
import { TbWorld } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

import './sideDrawer.css'

interface SideDrawerProps {
    name: string,
    path: string,
    close: () => void
}

const sideDrawer: React.FC<SideDrawerProps> = (SideDrawerProps) => (
    <div className="sideDrawer_wrapper">
        <ul>
            <IoCloseOutline onClick={SideDrawerProps.close} className="sideDrawer_close" />
            <NavLink to={`${SideDrawerProps.path}`}
                >{SideDrawerProps.name}</NavLink>
            <NavLink to="/trade">Trade</NavLink>
            <NavLink to="/my/wallet">My Wallet</NavLink>
            <NavLink to="">
                <TbWorld />
                <div>English</div>
            </NavLink>
            {/* <NavLink to="/my/wallet">My wallet</NavLink>
            <NavLink to="/my/wallet">My wallet</NavLink>
            <NavLink to="/my/wallet">My wallet</NavLink> */}

        </ul>
    </div>
);

export default sideDrawer;