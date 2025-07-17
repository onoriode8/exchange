import { NavLink } from 'react-router-dom';

import Button from '../authBtn/authBtn'

import './loginPage.css'


const loginPage = () => (
    <form className="loginPage_wrapper">
        <p>Log In</p>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <Button title="Log In" />
        <ul>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/user/reset_password/email">Forget Password</NavLink>
        </ul>
    </form>
);

export default loginPage;