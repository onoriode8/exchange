import { useContext } from "react";

import AuthContext from "../../hooks/context";
import { TbWorld } from "react-icons/tb";
import { IoMenuSharp } from "react-icons/io5";
import { HiArrowDownTray } from "react-icons/hi2";

import Auth from '../../pages/headers/auth/auth';
import SideDrawer from '../../pages/headers/sideDrawer/sideDrawer'


import './header.css'


interface HeaderProps {
    toggle: boolean,
    toggleMenuHandler: () => void
} 

const Header:React.FC<HeaderProps> = (HeaderProps) => {
    const { authenticationDataProps } = useContext(AuthContext)
    return (
    <div>
        <div className="header_wrapper">
            <div className="header_logo_wrapper">
                <div>Logo</div>
            </div>
            <div className="header_button_wrapper">
                {authenticationDataProps && <p className="header_button_btn_wrapper">
                    <HiArrowDownTray />
                    <button>Deposit</button>
                </p>}
                {authenticationDataProps && <div className="header_trade_wrapper">
                    <div><TbWorld /></div>
                    <div>Trade</div>
                    <div>My Wallet</div>
                </div>}
                <Auth />
                {/* {authenticationDataProps &&  */}
                <IoMenuSharp className="header_icon_menu" 
                    onClick={HeaderProps.toggleMenuHandler} />
                    {/* } */}
            </div>
        </div>
        {HeaderProps.toggle && <SideDrawer name="P2P" path="/p2p/user" 
            close={HeaderProps.toggleMenuHandler} />}
    </div>
  );
}

export default Header;