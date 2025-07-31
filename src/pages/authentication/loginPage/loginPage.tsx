import { NavLink, useLocation } from 'react-router-dom';

import { useLogin } from '../../../custom-hooks/authentication';
import Button from '../../authBtn/authBtn'
import Loading from '../../loading/loading';
import ErrorMessage from '../../util/error/errorMessage/error';
import Backdrop from '../../util/error/backdrop/backdrop';

import './loginPage.css'

// import AuthContext from '../../../hooks/context';
// import { useContext } from 'react';

const LoginPage:React.FC = () => {
    const { email, loading, error, loginHandler, setError,
        setEmail, password, setPassword } = useLogin()
    const location = useLocation()
    // const { userData } = useContext(AuthContext)
    // console.log("LOGINPAGE", userData)
    return (
        <form className="loginPage_wrapper" onSubmit={loginHandler}>
            {error && <Backdrop clicked={() => setError(null)}/>}
            {error && <ErrorMessage error={error} click={() => setError(null)}/>}
            <p>Log In</p>
            <input type="email" value={email} 
                placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} 
                placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {loading && <Loading />}
            <Button title="Log In" /> { /* style this button to look great for all devices later. */}
            <ul>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/user/reset_password/email">Forget Password</NavLink>
                {location.pathname === "/login" ? null : <NavLink to="/login">Log In</NavLink>}
            </ul>
        </form>
    );
}

export default LoginPage;