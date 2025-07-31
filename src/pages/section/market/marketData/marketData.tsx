

import './marketData.css'


type marketDataProps = {
    name: string,
    marketCap: number,
    marketHigh24h: number,
    marketLow24h: number,
    currentPrice: number,
    marketMaxSupply: number,
    circulatingSupply: number
}


const marketData: React.FC<marketDataProps> = (marketDataProps) => (
    <div className="marketData_wrapper">
        <div>
            <div>{marketDataProps.name.toUpperCase()}</div>
            <div>{marketDataProps.marketCap.toLocaleString()}</div>
            <div>{marketDataProps.marketHigh24h}</div>
            <div>{marketDataProps.marketLow24h}</div>
            <div>{marketDataProps.currentPrice}</div>
            {/* <div>{marketDataProps.marketMaxSupply}</div> */}
            <div>{marketDataProps.circulatingSupply.toLocaleString()}</div>
        </div>
    </div>
);

export default marketData;