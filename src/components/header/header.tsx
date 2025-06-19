import { TbWorld } from "react-icons/tb";
import { IoMenuSharp } from "react-icons/io5";
import { HiArrowDownTray } from "react-icons/hi2";


import SideDrawer from '../../pages/sideDrawer/sideDrawer'


import './header.css'


interface HeaderProps {
    toggle: boolean,
    toggleMenuHandler: () => void
} 

const header:React.FC<HeaderProps> = (HeaderProps) => (
    <div>
        <div className="header_wrapper">
            <div className="header_logo_wrapper">
                <div>Logo</div>
            </div>
            <div className="header_button_wrapper">
                <p className="header_button_btn_wrapper">
                    <HiArrowDownTray />
                    <button>Deposit</button>
                </p>
                <div>
                    <div><TbWorld /></div>
                    <div>Trade</div>
                    <div>My Wallet</div>
                </div>
                <IoMenuSharp className="header_icon_menu" 
                    onClick={HeaderProps.toggleMenuHandler} />
            </div>
        </div>
        {HeaderProps.toggle && <SideDrawer name="P2P" path="/p2p/user" 
            close={HeaderProps.toggleMenuHandler} />}
    </div>
);

export default header;