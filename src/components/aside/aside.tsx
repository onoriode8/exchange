import { NavLink } from 'react-router-dom'

import { AiTwotoneDashboard } from "react-icons/ai";
import { IoReceiptSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";

import AsideSideDrawer from '../aside_sideDrawer/aside_sideDrawer'

import './aside.css'


interface AsideProps {
    toggleSide: boolean,
    clicked: () => void
}


const aside: React.FC<AsideProps> = (AsideProps) => (
    <div>
        <AsideSideDrawer toggleSide={AsideProps.toggleSide}
            clicked={AsideProps.clicked}/>
        <ul className="aside_wrapper">
            <NavLink to="/user/my/dashboard">
                <AiTwotoneDashboard style={{fontSize: "x-large"}}/>
                <div>Dashboard</div>
            </NavLink>
            <NavLink to="/my/transaction">
                <IoReceiptSharp style={{fontSize: "x-large"}}/>
                <div>Transaction</div>
            </NavLink>
            <NavLink to="/support/team">
                <BiSupport style={{fontSize: "x-large"}}/>
                <div>Support</div>
            </NavLink>
            <NavLink to="/settings">
                <IoMdSettings style={{fontSize: "x-large"}}/>
                <div>Settings</div>
            </NavLink>
            <NavLink to="/logout/user">
                <IoMdLogOut style={{fontSize: "x-large"}}/>
                <div>Logout</div>
            </NavLink>
        </ul>
    </div>
);

export default aside;