import './currency.css'


interface CurrencyProps {
    toggleTrade: boolean,
    setToggleTrade: React.Dispatch<React.SetStateAction<boolean>>
}

const currency:React.FC<CurrencyProps> = ({ toggleTrade, setToggleTrade }) => (
    <div className="currency_wrapper">
        <ul>
            <div style={{borderBottom: !toggleTrade ? "4px solid blue" : ""}} 
                onClick={() => setToggleTrade(false)}>Buy</div>
            <div style={{borderBottom: toggleTrade ? "4px solid blue" : ""}}
                onClick={() => setToggleTrade(true)}>Sell</div>
        </ul>
        <select>
            <option>NGN</option>
            <option>GHC</option>
        </select>
    </div>
);

export default currency;