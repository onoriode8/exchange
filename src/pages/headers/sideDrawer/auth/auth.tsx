import { NavLink } from "react-router-dom";


import './auth.css'


const authSide = () => (
    <div className='auth_sideDrawer_wrapper'>
        <button>
            <NavLink to="/login">LogIn</NavLink>
        </button>
        <div>
            <NavLink to="/register">
                <button>Register</button>
            </NavLink>
        </div>
    </div>
);

export default authSide;