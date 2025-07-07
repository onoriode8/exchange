
import Buy from './buy/buy'
import Sell from "./sell/sell"


interface P2PUsersProps {
    loading: boolean,
    buy: [],
    sell: [],
    clicked: () => void,
    toggleTrade: boolean,
    placeOrdersList: [
    //     {
    //     name: string,
    //     activity: string,
    //     orders: {
    //         minimumAmount: number,
    //         maximumAmount: number,
    //         quantity: number,
    //         coin: string,
    //         price: number,
    //         bank: string,
    //         duration: string,
    //         ordersLength: number
    //      }
    ]
}

const P2PUsers:React.FC<P2PUsersProps> = (P2PUsersProps) => (
    <div>
        {!P2PUsersProps.toggleTrade ? <Buy buy={P2PUsersProps.buy} 
            clicked={P2PUsersProps.clicked} 
            loading={P2PUsersProps.loading} /> :
        <Sell sell={P2PUsersProps.sell} 
            clicked={P2PUsersProps.clicked} 
            loading={P2PUsersProps.loading}/>}
    </div>
)

export default P2PUsers;