import React, { useState } from 'react';

import Header from '../../components/header/header';
import Aside from '../../components/aside/aside'

interface PropsArgs {
    children: React.JSX.Element
}

const Layout: React.FC<PropsArgs> = (PropsArgs) => {
    const [toggle, setToggle] = useState(false);
    const [toggleRightSideDrawer, setToggleRightSideDrawer] = useState(false);

    const toggleMenuHandler = () => {
        setToggle(prevState => !prevState)
    }

    const toggleRightSideDrawerHandler = () => {
        setToggleRightSideDrawer(prev => !prev)
    }

    return (
        <div>
            <Header toggle={toggle} toggleMenuHandler={toggleMenuHandler} />
            <div>
                <Aside toggleSide={toggleRightSideDrawer}
                    clicked={toggleRightSideDrawerHandler} />
                <main>
                    {PropsArgs.children}
                </main>
            </div>
            <div>Footer</div>
        </div>
    );
}

export default Layout;