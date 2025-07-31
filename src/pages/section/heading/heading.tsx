import { NavLink } from "react-router-dom";

import p2pTrade from "../../../assets/p2p_image.jpg"

import './heading.css'


const heading = () => (
    <div className="heading__wrapper">
        <div>
            <h1>Kickstart Your crypto Journey with Us Today.</h1>
            <p>Trade and swap your cryptocurrency easily and comfortably.</p>
            <NavLink to="/register">
                <button>Register Now</button>
            </NavLink>
        </div>
        <img src={p2pTrade} alt="" />
    </div>
);

export default heading;