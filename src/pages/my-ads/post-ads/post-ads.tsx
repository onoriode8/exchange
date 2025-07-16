import { usePostMyAds } from "../../../custom-hooks/post-request";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

import Addpaymentmethod from "../../util/paymentMethod/addpaymentmethod/addpaymentmethod";

import "./post-ads.css";


interface PostAdsProps {
    selectPurchase: boolean
    close: () => void,
    setSelectPurchase: React.Dispatch<React.SetStateAction<boolean>>
}

const PostAds:React.FC<PostAdsProps> = (props) => {
    const { loading, nextPage, fixedPrice,
        postMyAdsError, 
        increment, 
        incrementhandler,
        decrementhandler,
        setFixedPrice,
        nextFunctionHandler,
        postCreatedAdsHandler } = usePostMyAds("")
    return (
    <div>
    {!nextPage && <div className="postAds_wrapper-inner">
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <p>I want to</p>
            <IoIosCloseCircleOutline onClick={props.close} style={{fontSize: "1.5em"}} />
        </div>
        {loading && <div>Loading ...</div>}
        {postMyAdsError && <div>{postMyAdsError}</div>}
        <div className="postAds_wrapper-inner_div">
            <button onClick={() =>props.setSelectPurchase(true)} 
                style={{borderBottom: props.selectPurchase 
                && "2px solid blue"}}>Buy</button>
            <button onClick={() =>props.setSelectPurchase(false)}
                style={{borderBottom: !props.selectPurchase 
                && "2px solid blue"}}>Sell</button>
        </div>

        <div className="postAds_wrapper_asset_fiat">
            <div>
                <label>Asset</label>
                <div>
                    <div>USDT </div>
                    <MdArrowDropDown style={{fontSize: "1.5em"}} />
                </div>
            </div>
            <div>
                <label>With Fiat</label>
                <div>NGN</div>
            </div>
        </div>
        <div className="postAds_wrapper_fixed_wrapper">
            <label>Fixed</label>
            <div className="postAds_wrapper_fixed_wrapper_div_first-child">
                <div onClick={decrementhandler }>-</div>
                <input type="number" value={increment}
                     placeholder="Fixed"
                    onChange={(e) => setFixedPrice(+e.target.value)} />
                <div onClick={incrementhandler}>+</div>
            </div>
            <div>Price range NGN{} - NGN{}</div>
        </div>
        <div style={{textAlign: "start", padding: "10px"}}>Your Price NGN {fixedPrice}</div>
        <div style={{textAlign: "start", padding: "10px"}}>Highest Ad Price NGN {}.toFixed(2)</div>
        {/* <Addpaymentmethod urlPath="" /> */}
        <div className="postAds_wrapper-inner_button">
            <button onClick={nextFunctionHandler}>Next</button>
        </div>
    </div>}
    {nextPage && <div className="postAds_wrapper_paymethod_wrapper">
            <Addpaymentmethod urlPath="" processPayment={false} />
            <button onClick={postCreatedAdsHandler}>Confirm</button>
        </div>}
    </div>
    );
}

export default PostAds;