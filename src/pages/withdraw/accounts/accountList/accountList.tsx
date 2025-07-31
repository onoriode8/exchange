import { useContext } from 'react';

import AuthContext from '../../../../hooks/context';

import './accountList.css';


interface AccountListProps {
    bankAccountNumber: number
    bankBranch: string,
    bankName: string,
    name: string,
    id: number
}

interface AccountType {
    id: number,
    name: string,
    bankName: string,
    bankNumber: number
}


const AccountList:React.FC<AccountListProps> = (AccountListProps) => {
    const { pushAccount } = useContext(AuthContext)
    const pushAccountHandler = (args: AccountType) => {
        const data = {
            id: args.id,
            name: args.name,
            bankName: args.bankName,
            bankNumber: args.bankNumber
        }
        pushAccount(data)
    }

    const pushData = {
        id: 1234, 
        name: "ONORIODE UMUKORO",
        bankName: "OPAY",
        bankNumber: 9070351944
    }

    return(
        <div className="accountList_wrapper_account">
            <div>
                <div>{AccountListProps.bankName} United Bank of Africa</div>
                <div>{AccountListProps.name} ONORIODE UMUKORO</div>
                <div>{AccountListProps.bankAccountNumber} 9070351944</div>
            </div>
            <div>
                <input type="checkbox" onClick={() => pushAccountHandler(pushData)}/>
            </div>
        </div>
    );
}

export default AccountList;