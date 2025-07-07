import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Top from "../../util/top/top";
import Currency from '../../util/currency/currency'
import SelectMethod from '../../util/SelectMethod/SelectMethod';
import Amount from '../amount/amount';
import SelectCoinList from '../selectCoinList/selectCoinList';
import P2PUsers from '../P2PUsers/P2PUsers';
import AuthContext from '../../../hooks/context';


const P2pTrading = () => {
    const [usdt, setUsdt] = useState<boolean>(true)
    const [btc, setBtc] = useState<boolean>(false)
    const [eth, setEth] = useState<boolean>(false)
    const [toggleTrade, setToggleTrade] = useState<boolean>(false)

    const [toggleCoin, setToggleCoin] = useState<boolean>(false)
    const [toggleAmount, setToggleAmount] = useState<boolean>(false)

    const [amountInput, setAmountInput] = useState<number>(0)

    const [buy, setBuy] = useState<[]>([])
    const [sell, setSell] = useState<[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    
    const navigate = useNavigate()

    const { pushUserP2POrder } = useContext(AuthContext)

    useEffect(() => {
        if(toggleTrade) return 
        console.log("BUY", toggleTrade) //
        setLoading(true)
        const fetchBuyOrdersHandler = async () => {
            try {
                const res = await fetch("http://localhost:8080/get/buy/orders", {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization":"Bearer " + "token"
                    }
                })
                const response = await res.json()
                if(!res.ok) throw new Error(response)
                setLoading(false)
                console.log("RESPONSE", response)
                setBuy(response)
            } catch(err) {
                setLoading(false)
                console.log(err) //
            }
        }
        fetchBuyOrdersHandler()
    }, [toggleTrade])

    useEffect(() => {
        if(!toggleTrade) return 
        console.log("SELL", toggleTrade) //
        setLoading(true)
        const fetchSellOrdersHandler = async () => {
            try {
                const res = await fetch("http://localhost:8080/get/sell/orders", {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json",
                        "Authorization":"Bearer " + "token"
                    }
                })
                const response = await res.json()
                if(!res.ok) throw new Error(response)
                setLoading(false)
                console.log("RESPONSE", response)
                setSell(response)
            } catch(err) {
                setLoading(false)
                console.log(err) //
            }
        }
        fetchSellOrdersHandler()
    }, [toggleTrade])

    console.log("USDT", usdt)
    console.log("BTC", btc)
    console.log("ETH", eth)
    console.log("TOOGLE COIN", toggleCoin)

    const handleUsdtFunc = () => {
        const toggle = usdt
        setUsdt(!toggle)
        setBtc(false)
        setEth(false)
    }
    const handleBtcFunc = () => {
        const toggle = btc
        setBtc(!toggle)
        setUsdt(false)
        setEth(false)
    }
    const handleEthFunc = () => {
        const toggle = eth
        setEth(!toggle)
        setUsdt(false)
        setBtc(false)
    }

    let coin: string
    let coinData: boolean
    if(usdt === true) {
        coin = "USDT"
        coinData = usdt
    }else if(btc === true) {
        coin = "BTC"
        coinData = btc
    }else if(eth === true) {
        coin = "ETH"
        coinData = eth
    }

    const pushOrderToPlaceOrderHandler = () => {
        console.log("COIN SELECTED", coinData, coin)
        if(coinData === false && coin.length < 3) return
        if(amountInput === 0) return
        console.log("Amount Entered", amountInput)
        const order = {
            coin: coin, //USDT, BTC ETH
            sellerUsername: "", //seller name
            price: 1540,
            coinData: coinData, //TRUE 
            quantity: 20,
            duration: "15m",
            amountEntered: amountInput, //AmountEntered to buy or sell
            minimumLimit: 200000,
            maximumLimit: 500000,
            totalOrdersCompleted: 50
        }
        pushUserP2POrder(order)
        navigate("/purchase/buy")
    }

    const arrayOfPlaceOrdersList: [] = [
        {
            name: "Onoriode",
            activity: "buy",
            orders: {
                minimumAmount: 4000,
                maximumAmount: 100000,
                quantity: 200,
                coin: "USDT",
                price: 1540,
                bank: "Bank Transfer",
                duration: "15m",
                ordersLength: 5 //fetch orders.length 
                // from backend to render only the length
                //  or number of orders fullfilled.
            }
        },
         {
            name: "Onoriode",
            activity: "buy",
            orders: {
                minimumAmount: 4000,
                maximumAmount: 100000,
                quantity: 200,
                coin: "USDT",
                price: 1540,
                bank: "Bank Transfer",
                duration: "15m",
                ordersLength: 5 //fetch orders.length 
                // from backend to render only the length
                //  or number of orders fullfilled.
            }
        },
         {
            name: "Onoriode",
            activity: "buy",
            orders: {
                minimumAmount: 4000,
                maximumAmount: 100000,
                quantity: 200,
                coin: "USDT",
                price: 1540,
                bank: "Bank Transfer",
                duration: "15m",
                ordersLength: 5 //fetch orders.length 
                // from backend to render only the length
                //  or number of orders fullfilled.
            }
        },
         {
            name: "Onoriode",
            activity: "buy",
            orders: {
                minimumAmount: 4000,
                maximumAmount: 100000,
                quantity: 200,
                coin: "USDT",
                price: 1540,
                bank: "Bank Transfer",
                duration: "15m",
                ordersLength: 5 //fetch orders.length 
                // from backend to render only the length
                //  or number of orders fullfilled.
            }
        }
    ]

    return (
        <div>
            <Top middleTitle="P2P" lastTitle="" path="" />
            <Currency toggleTrade={toggleTrade} 
                setToggleTrade={setToggleTrade} />
            <SelectMethod usdt={usdt} btc={btc} eth={eth} 
                toggleCoin={toggleCoin} toggleAmount={toggleAmount}
                clicked={() => setToggleCoin(!toggleCoin)}
                amountClicked={() => setToggleAmount(true)} />
            <SelectCoinList usdt={usdt} btc={btc} eth={eth} toggleCoin={toggleCoin}
                backdropClicked={() => setToggleCoin(!toggleCoin)}
                clickUsdt={handleUsdtFunc} clickBtc={handleBtcFunc} clickEth={handleEthFunc}/>
            <Amount amountClicked={toggleAmount} amountInput={amountInput} reset={() => setAmountInput(0)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setAmountInput(Number(e.target.value))} 
                backdropClicked={() => setToggleAmount(false)} />
            <P2PUsers loading={loading} buy={buy} sell={sell}
                toggleTrade={toggleTrade}
                placeOrdersList={arrayOfPlaceOrdersList}
                clicked={pushOrderToPlaceOrderHandler} />
        </div>
    );
}

export default P2pTrading;