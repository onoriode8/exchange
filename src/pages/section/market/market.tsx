import { useState, useEffect } from 'react';

// import MarketData from './marketData/marketData'

import './market.css'

type coinMarketData = {
    name: string,
    marketCap: number,
    marketHigh24h: number,
    marketLow24h: number,
    currentPrice: number,
    marketMaxSupply: number,
    circulatingSupply: number
}

const MarketPage: React.FC<coinMarketData> = () => {
    const [coinData, setCoinData] = useState<[]>([]);

    useEffect(() => {
        async function fetchMarketData(): Promise<void> {
            // try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
                const responseData = await response.json()
                if(!response.ok) throw new Error(responseData)
                setCoinData(responseData)
            // } catch(err: unknown) {
                // console.log(.message)
            // }
        }
        fetchMarketData()
    }, [])

    let displayData;
    if(coinData.length !== 0) {
        // const sliceData = coinData.slice(0, 15)
        // displayData = sliceData.map(i => <MarketData 
            // key={i.id} name={i.name} marketCap={i.market_cap}
            // marketHigh24h={i.high_24h} marketLow24h={i.low_24h}
            // currentPrice={i.current_price} marketMaxSupply={i.max_supply}
            // circulatingSupply={i.circulating_supply}
        // />)
    }

    return (
    <div>
        <h2 style={{textAlign: "center"}}>Markets</h2>
        <div style={{display: "flex",fontFamily: "Verdana, Geneva, Tahoma, sans-serif", fontSize: "25x", alignItems: "center", justifyContent: "space-between"}}>
            <div>CryptoCurrency</div>
            <div>MarketCap</div>
            <div>24HR High</div>
            <div>24HR Low</div>
            <div>Price</div>
            <div>Maximum Supply</div>
            <div>Circulating Supply</div>
        </div>
        {displayData}
    </div>
    );
}
export default MarketPage;