import PurchaseDetails from './purchaseDetails/purchaseDetails'
import AmountBox from './amountBox/amountBox'
import AdvertiserTerms from './advertiserTerms/advertiserTerms'


interface PurchaseDetailsProps {
    time: number,
    terms: string,
    balance: number,
    activity: string,
    purchaser: string,
    ordersCompleted: [],
    countDownSec: boolean,
    PurchaserUsername: string,
    amount: number | undefined,
    quantity: number | undefined,
    amountInputHandler: () => void,
    ordersPrice: number | undefined,
    sellerUsername: string | undefined,
    amountRequested: number | undefined,
    paymethodDuration: string | undefined,
    totalOrdersCompletedBySeller: number | undefined
}

const purchaseDetails:React.FC<PurchaseDetailsProps> = (props) => (
    <div>
        <PurchaseDetails 
        //removed the ? attached to the props later.
            time={props.time}
            countDownSec={props.countDownSec}
            ordersPrice={props?.ordersPrice} 
            quantity={props?.quantity}
            paymethodDuration={props?.paymethodDuration}
            amount={props?.amount}
            sellerUsername={props?.sellerUsername}
            totalOrdersCompletedBySeller={
                props?.totalOrdersCompletedBySeller}/>
        <AmountBox balance={props.balance} 
            activity={props.activity}
            countDownSec={props.countDownSec}
            amountRequested={props.amountRequested}
            amountInputHandler={props.amountInputHandler} />
        <AdvertiserTerms purchaser={props.purchaser}
            terms={props.terms}
            PurchaserUsername={props.PurchaserUsername}
            ordersCompleted={props.ordersCompleted}
        />
            {/* Note advertiserTerms will be coming from server */}
    </div>
);

export default purchaseDetails;