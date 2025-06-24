import { VscEye } from "react-icons/vsc";

// import AuthButton from '../../pages/authBtn/authBtn';


import './register.css'
import { NavLink } from "react-router-dom";


const register = () => (
    <div className="register_wrapper">
        <h1>Create an Account</h1>
        <form>
            <div>
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <div className="register_wrapper_show_eye">
                    <VscEye />
                </div>
                {/* <input type="text" placeholder='Referral Code' /> */}
                {/* <AuthButton title="Create an Account" /> */}
                <button type="submit">Create an Account</button>
            </div>
        </form>
        <ul>
            <li>Already registered?</li>
            <NavLink to="/login">Log In</NavLink>
        </ul>
    </div>
);

export default register;