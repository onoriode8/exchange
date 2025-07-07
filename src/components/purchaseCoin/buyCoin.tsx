import { useContext } from "react";

import AuthContext from "../../hooks/context";
import Top from "../../pages/util/top/top";



const BuyCoin = () => {
    const { p2pOrder } = useContext(AuthContext)
    console.log("BUY_COIN", p2pOrder)
    return (
        <div>
            <Top middleTitle={`Buy ${p2pOrder.coin}`} lastTitle="" path=""/>

        </div>
    );
}

export default BuyCoin;