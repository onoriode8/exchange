import Button from '../authBtn/authBtn'


import './loginPage.css'


const loginPage = () => (
    <form className="loginPage_wrapper">
        <p>Log In</p>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <Button title="Log In" />
    </form>
);

export default loginPage;