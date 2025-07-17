import { useState } from 'react';
import { usePaymentMethod } from './paymentmethod';


export const usePostMyAds = (username: string) => {
    const [selectPurchase, setSelectPurchase] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<boolean>(false);
    
    const [fixedPrice, setFixedPrice] = useState<number>(0)
    const [increment, setIncrement] = useState<number>(0)
    const [decrement, setDecrement] = useState<number>(0)

    const [postMyAdsError, setPostMyAdsError] = useState<unknown>();

    // console.log("USERNAME PASSED FROM MYADS", username)
    let purchaseValue: string;
    if(selectPurchase) {
          purchaseValue = "Buy"
    } else {
        purchaseValue = "Sell"
    }
    const nextFunctionHandler = () => {
        if(purchaseValue.length < 3 && fixedPrice === 0) return
        setNextPage(true)
    }

    const incrementhandler = () => {
        setIncrement(prev => prev + 1)
    }

    const decrementhandler = () => {
        if(decrement < 0) return
        setDecrement(prev => prev - 1)
    }

    const { bankName, bankAccountNumber,
            bankBranch, dummyName } = usePaymentMethod("")
    let pay: number;
    if(bankAccountNumber === null) {
        pay = 0
    } else if(typeof(bankAccountNumber) === "number") {
        pay = bankAccountNumber
    }

    const postCreatedAdsHandler = async() => {
        console.log("CLICKED")
        if(username.length < 5) return
        if(bankBranch.length < 3 && pay < 10 
            && bankName.length < 5 
            && dummyName.length < 7) return 
        const purchase = selectPurchase ? "Buy" : "Sell"
        const created = {
            //pass other data like the coin selected, 
            // NGN, fixed price, price ready to buy or sell.
            username, purchase, purchaseValue, fixedPrice,
            bankName, bankAccountNumber, bankBranch, dummyName
        }
        try {
            setLoading(true)
            const res = await fetch("http://localhost:8080/myAds", {
                method: "GET",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":"Bearer"
                },
                body: JSON.stringify(created)
            })
            const data = await res.json()
            if(data.ok === false) throw new Error(data)
            setLoading(false)
        } catch(err) {
            setLoading(false)
            setTimeout(() => {
                setPostMyAdsError(err) 
            }, 2000)
        }
    }

    return { 
            selectPurchase, loading,
            nextPage, fixedPrice,
            postMyAdsError,
            increment, 
            incrementhandler,
            decrementhandler,
            setFixedPrice,
            setSelectPurchase, 
            nextFunctionHandler,
            postCreatedAdsHandler 
    }
}