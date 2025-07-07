
import './placeordersList.css'


interface PlaceOrderListProps {
    name: string,
    activity: string,
    clicked: () => void
}

const placeOrdersList:React.FC<PlaceOrderListProps> = ({ name, activity, clicked }) => (
    <div className='placeOrdersList_wrapper_wrapper_container'>
        <div className='placeOrdersList_wrapper'>
            <div className='placeOrdersList_wrapper_name'>
                <div className='placeOrderList_wrapper_div_first_child'
                    >{name.split("")[0]}
                </div>
                <div>
                    <div>{name}</div>
                    <div>15min(s) {}</div>
                </div>
            </div>
            <div className='placeOrdersList_wrapper_price'>
                <div>N 1,540.00 {}</div>
                <div className='placeOrdersList_wrapper_price_second_div'>Quantity 200 USDT{}</div>
                <div className='placeOrdersList_wrapper_price_second_div'>Limits 200000 - 500000 NGN{}</div>
                <div className='placeOrdersList_wrapper_price_second_div'>Bank Transfer</div>
            </div>
        </div>
        <div className='placeOrdersList_wrapper_orders_button'>
            <div>50 orders {}</div>
            <button onClick={clicked}>{activity}</button>
        </div>
    </div>
);

export default placeOrdersList;