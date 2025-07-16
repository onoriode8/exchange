import { useState, useEffect } from "react";

export const useFetch = (userPath: string, ordersPath: string) => {
    const [userBalance, setUserBalance] = useState<number>(0)
    const [orders, setOrders] = useState<[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    
    useEffect(() => {
        if(userBalance !== 0) return
        //logic to fetch user balance in real time, from server.
        //const fetchUserBalance = async () => {
        // setLoading(true)
        // await fetch(userPath, {
        // method: "GET",
        // headers: { "Content-Type": "application/json"}
        //})
        //}
        // setUserBalance()
        //fetchUserBalance()
    }, [])

     useEffect(() => {
        if(orders.length !== 0) return
        //logic to fetch seller order in real time, 
        // setLoading(true)
        // const fetchUserBalance = async () => {
        // await fetch(ordersPath, {
        // method: "GET",
        // headers: { "Content-Type": "application/json"}
        //})

        // on this page and the price attached from server.
        // setOrders()
    }, [])

    return { userBalance, orders, loading }
}

export const useFetchMyAds = () => {
    const [myAds, setMyAds] = useState<[]>([])
    const [error, setError] = useState<unknown>(undefined)

    useEffect(() => {
        const fetchMyAds = async() => {
            try {
                const res = await fetch("http://localhost:8080/myAds", {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                const data = await res.json()
                if(data.ok === false) throw new Error(data)
                setMyAds(data)
            
            } catch(err) {
                setError(err)
                console.log(err)
            }
        }
        fetchMyAds()
    }, []);

    return { error, myAds, setError }
}