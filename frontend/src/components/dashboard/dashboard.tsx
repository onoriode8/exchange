import { useState} from 'react'

import DashboardHeading from '../../pages/dashboard/dashboardHeading/dashboardHeading';
import Wallet from '../../pages/dashboard/wallet/wallet'
import Service from '../../pages/dashboard/service/service'
import Model from "../../pages/dashboard/model/model"


const Dashboard:React.FC = () => {
    const [toggle, setToggle] = useState(false)
    // idealy you should style this component to set properly on the screen.

    const toggleModelHandler = () => {
        setToggle(prevState => !prevState)
    }

    return (
        <div>
            <DashboardHeading />
            <Wallet close={toggleModelHandler} />
            <Service />
            {toggle && <Model close={toggleModelHandler} />}
        </div>
    );
}

export default Dashboard;