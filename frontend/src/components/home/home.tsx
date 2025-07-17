import { useState } from "react";

import Header from "../header/header";
import Section from '../section/section'


const Home = () => {
    const [toggle, setToggle] = useState(false);
    
    const toggleMenuHandler = () => {
        setToggle(prevState => !prevState)
    }

    return (
        <div>
            <Header toggle={toggle} toggleMenuHandler={toggleMenuHandler} />
            <Section />
        </div>
    );
}

export default Home;