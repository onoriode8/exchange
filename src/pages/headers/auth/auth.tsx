import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { BiWorld } from "react-icons/bi";
import AuthContext from "../../../hooks/context";

import './auth.css'


const Auth = () => {
    const { userData } = useContext(AuthContext)
    return (
        <div className='auth_side_wrapper'>
            {!userData && <button>
                <NavLink to="/login">Log In</NavLink>
            </button>}
            {!userData && <div>
                <NavLink to="/register">
                    <button>Register</button>
                </NavLink>
            </div>}
            <BiWorld className="auth_side_icon"/>
        </div>
    );
}

export default Auth;