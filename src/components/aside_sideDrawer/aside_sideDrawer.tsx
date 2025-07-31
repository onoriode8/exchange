import { FaAngleRight } from "react-icons/fa6";

import ASideDrawer from '../../pages/asideDrawer/asideDrawer'

import './aside_sideDrawer.css'

interface AsideSideDrawerProps {
    clicked: () => void,
    toggleSide: boolean
}

const asideSideDrawer:React.FC<AsideSideDrawerProps> = (AsideSideDrawerProps) => (
    <div>
        {AsideSideDrawerProps.toggleSide && <div 
            onClick={AsideSideDrawerProps.clicked}
            className="asideSideDrawer_backdrop_wrapper"></div>}
        {AsideSideDrawerProps.toggleSide && <ASideDrawer click={AsideSideDrawerProps.clicked}/>}
        <div className="asideSideDrawer_wrapper">
            <div>Dashboard</div>
            {/* <div onClick={AsideSideDrawerProps.clicked}> */}
            <FaAngleRight onClick={AsideSideDrawerProps.clicked} />
                {/* </div> */}
        </div>
    </div>
);

export default asideSideDrawer;