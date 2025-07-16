
import PlaceOrderList from '../../../util/placeordersList/placeordersList';

interface SellProps {
    sell: [], 
    loading: boolean,
    clicked: () => void
}

const sell:React.FC<SellProps> = (SellProps) => {
    // SellProps.sell.map(i => i)
    const uniqueUsernameOfAds = "Onoriode"
    return (
        <div>
            <PlaceOrderList name={uniqueUsernameOfAds}
                activity="Sell" clicked={SellProps.clicked} />
        </div>
    );
}

export default sell;