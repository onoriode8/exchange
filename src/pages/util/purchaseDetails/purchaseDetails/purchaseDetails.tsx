import './purchaseDetails.css'


interface PurchaseDetailsProps {
    time: number,
    countDownSec: boolean,
    amount: number | undefined,
    quantity: number | undefined,
    ordersPrice: number | undefined,
    sellerUsername: string | undefined,
    paymethodDuration: string | undefined,
    totalOrdersCompletedBySeller: number | undefined
}


const purchaseDetails:React.FC<PurchaseDetailsProps> = (props) => (
    <div className='purchaseDetails_purchase_wrapper_'>
        <div className='purchaseDetails_purchase_wrapper_price'>
            <p>Price </p>
            <p>N {props.ordersPrice}</p>
            <p>{props.countDownSec ? props.time : 0}s</p>
        </div>
        <div className='purchaseDetails_purchase_wrapper_quantity'>
            <p>Quantity</p>
            {/* <p>full orders</p> */}
            <p>{props.quantity} usdt</p>
        </div>
        <div className='purchaseDetails_purchase_wrapper_paymethod_method'>
            <p>Paymethod Method</p>
            <p>Bank Transfer</p>
        </div>
        <div className='purchaseDetails_purchase_wrapper_payment_duration'>
            <p>Paymethod Duration</p>
            <p>{props.paymethodDuration}(s)</p>
        </div>
    </div>
);

export default purchaseDetails;