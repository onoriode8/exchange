import { NavLink } from 'react-router-dom';

import './currency.css'


const currency = () => (
    <div className="currency_wrapper">
        <ul>
            <NavLink to="/buy">Buy</NavLink>
            <NavLink to="/sell">Sell</NavLink>
        </ul>
        <select>
            <option>NGN</option>
            <option>GHC</option>
        </select>
    </div>
);

export default currency;