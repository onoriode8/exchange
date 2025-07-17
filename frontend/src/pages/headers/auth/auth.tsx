import { NavLink } from "react-router-dom";

import { BiWorld } from "react-icons/bi";

import './auth.css'


const auth = () => (
    <div className='auth_side_wrapper'>
        <button>
            <NavLink to="/login">Log In</NavLink>
        </button>
        <div>
            <NavLink to="/register">
                <button>Register</button>
            </NavLink>
        </div>
        <BiWorld className="auth_side_icon"/>
    </div>
);

export default auth;