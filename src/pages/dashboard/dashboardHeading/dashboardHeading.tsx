import { MdOutlineDarkMode } from "react-icons/md";
import { BiSolidUser, BiSupport } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"

import './dashboardHeading.css'


interface DashboardHeadingProps {
    name: string
}

const dashboardHeading: React.FC<DashboardHeadingProps> = ({name = "Onoriode"}) => (
    <div className="dashboardHeading_wrapper">
        {/* <div className="dashboardHeading_wrapper_div_first_child">
            <div>Dashboard</div>
            <MdOutlineDarkMode />
        </div> */}
        <div className="dasboardHeading_wrapper_div_last_child">
            <div>
                <div>Hi {name}</div>
                <BiSolidUser />
            </div>
            <div>
                <BiSupport className="dashboardHeading_bottom_icon"/>
                <IoIosNotificationsOutline />
            </div>
        </div>
    </div>
);

export default dashboardHeading;