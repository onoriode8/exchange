import { useState, useContext } from "react";

import AuthContext from "../../hooks/context";
import Top from "../../pages/util/top/top";
import Purchase from "../../pages/util/purchaseDetails/purchase";
import { useCountDown } from '../../custom-hooks/countDown';
import { useFetch } from "../../custom-hooks/purchase-orders";
import Loading from "../../pages/loading/loading";
import Backdrop from "../../pages/util/error/backdrop/backdrop";



const BuyCoin = () => {
    const [amount, setAmount] = useState<number | undefined>()

    const { p2pOrder } = useContext(AuthContext)
    const { time, countDownSec } = useCountDown()
    const userPath = 'http://localhost:8080/user/balance'
    const ordersPath = "http://localhost:8080/buy/orders"
    const { userBalance, orders, loading } = useFetch(userPath, ordersPath)

    console.log("BUY_COIN", p2pOrder)

    const amountInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value)
    }


    return (
        <div>
            {loading && <Loading />}
            {loading && <Backdrop clicked={() => {}}/>}
            <Top middleTitle={`Buy ${p2pOrder?.coin}`} lastTitle="" path=""/>
            <Purchase ordersPrice={p2pOrder?.price}
                countDownSec={countDownSec}
                time={time} activity="Buy"
                purchaser="Buyer"
                PurchaserUsername="Buy username e.g EXCHANGE_GUY"
                ordersCompleted={orders} //change to orders.length
                terms={}
                amountRequested={amount} 
                setAmount={amountInputHandler}
                balance={userBalance}
                quantity={p2pOrder?.quantity}
                paymethodDuration={p2pOrder?.duration}
                amount={p2pOrder?.amountEntered}
                sellerUsername={p2pOrder?.sellerUsername}
                totalOrdersCompletedBySeller={p2pOrder?.totalOrdersCompleted}
            />
        </div>
    );
}

export default BuyCoin;