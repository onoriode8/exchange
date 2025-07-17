
import PlaceOrderLists from '../../../util/placeordersList/placeordersList';

interface BuyProps {
    buy: [], 
    loading: boolean,
    clicked: () => void
}

const buy:React.FC<BuyProps> = (BuyProps) => {
    // BuyProps.buy.map(i => i)
    const uniqueUsernameOfAds = "Onoriode"

    return (
        <div>
            <PlaceOrderLists name={uniqueUsernameOfAds}
                activity="Buy" clicked={BuyProps.clicked} />
        </div>
    );
}

export default buy;