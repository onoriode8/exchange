import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../../hooks/context";

import './auth.css'


const AuthSide = () => {
    const { userData } = useContext(AuthContext)
    return (
        <div className='auth_sideDrawer_wrapper'>
            {!userData && <button>
                <NavLink to="/login">LogIn</NavLink>
            </button>}
            {!userData && <div>
                <NavLink to="/register">
                    <button>Register</button>
                </NavLink>
            </div>}
        </div>
    );
}

export default AuthSide;