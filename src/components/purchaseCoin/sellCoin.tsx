import { useState, useContext } from "react";

import AuthContext from "../../hooks/context";
import Top from "../../pages/util/top/top";
import Purchase from "../../pages/util/purchaseDetails/purchase";
import { useCountDown } from '../../custom-hooks/countDown';
import { useFetch } from "../../custom-hooks/purchase-orders";
import Loading from "../../pages/loading/loading";
import Backdrop from "../../pages/util/error/backdrop/backdrop";


const SellCoin = () => {
    const [amount, setAmount] = useState<number | undefined>()

    const { p2pOrder } = useContext(AuthContext)
    const { time, countDownSec } = useCountDown()
    const userPath = 'http://localhost:8080/user/balance'
    const ordersPath = "http://localhost:8080/sell/orders"
    const { userBalance, orders, loading } = useFetch(userPath, ordersPath)

    const amountInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value)
    }


    console.log("Sell_COIN", p2pOrder)
    return (
        <div>
            {loading && <Loading />}
            {loading && <Backdrop clicked={() => {}}/>}
            <Top middleTitle={`Sell ${p2pOrder?.coin}`} lastTitle="" path=""/>
            <Purchase ordersPrice={p2pOrder?.price}
                countDownSec={countDownSec}
                time={time} activity="Sell"
                purchaser="Seller"
                PurchaserUsername="Seller username e.g EXCHANGE_GUY"
                ordersCompleted={orders} //change to orders.length from server
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

export default SellCoin;