
import "./advertiserTerms.css"


interface AdvertiserTermsProps {
    terms: string,
    purchaser: string,
    ordersCompleted: [],
    PurchaserUsername: string
}


const advertiserTerms:React.FC<AdvertiserTermsProps> = (props) => (
    <div className="advertiserTerms_wrapper">
        <div>
            <h3>Advertiser Terms</h3>
            <div>{props.terms}</div>
        </div>

        <div>
            <h4>Transaction Info</h4>
            <div className="advertiserTerms_wrapper_username">
                <div>{props.purchaser} Username</div>
                <div>{props.PurchaserUsername}</div>
            </div>
            <div className="advertiserTerms_wrapper_orderCompleted">
                <div>Completed Orders</div>
                <div>{props.ordersCompleted} Orders</div>
            </div>
        </div>
    </div>
);

export default advertiserTerms;