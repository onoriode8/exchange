
import { NavLink } from 'react-router-dom';
import AccountLists from './accountList/accountList'

import './accounts.css';


interface AccountProps {
    accountList: [] //change later to accept array of strings and numbers.
}

const accounts:React.FC<AccountProps> = ({ accountList }) => (
    <div className="accounts_wrapper">
        {accountList.map(i => 
        <AccountLists key={i.id} id={i.id}
            bankAccountNumber={i.bankAccountNumber} bankBranch={i.bankBranch}
            bankName={i.bankName}
            name={i.name}/>)}
        <AccountLists />
        <div className='accounts_button_wrapper'>
            <button style={{background: "#ccc"}}><NavLink to="/user/add-payment/method">Add a Payment Method</NavLink></button>
            <button>Continue</button>
        </div>
    </div>
);

export default accounts;