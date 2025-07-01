import React, { useState, useEffect } from 'react';


import Top from '../../pages/util/top/top'
import WithdrawMethod from '../../pages/withdraw/withdrawMethod/withdrawMethod'
import Accounts from '../../pages/withdraw/accounts/accounts';


const Withdraw: React.FC = () => {
    const [accountList, setAccountList] = useState<[]>([])
    
    const token = '25373ghc'
    useEffect(() => {
        async function fetchUserExistingAccountsDetails ():Promise<void> {
            try {
                const res = await fetch("http://localhost:8080/useraccount/details", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":"Bearer " + token
                    }
                })
                const response = await res.json()
                if(res.ok === false) throw new Error(response)
                const sliceAccount = response.slice(0, 3)
                setAccountList(sliceAccount)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserExistingAccountsDetails();
    }, [])

    return (
        <div>
            <Top middleTitle="Withdraw" lastTitle="History" path="/history" />
            <WithdrawMethod />
            <Accounts accountList={accountList} />
        </div>
    );
}

export default Withdraw;