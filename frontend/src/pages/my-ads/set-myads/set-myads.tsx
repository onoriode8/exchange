

import type { ChangeEvent } from 'react';
import './set-myads.css'


interface SetMyAdsProps {
    username: string,
    cancel: () => void,
    continueHandler: () => void,
    setUsernameHandler: (e: ChangeEvent<HTMLInputElement>) => void
}


const setMyAds:React.FC<SetMyAdsProps> = (props) => (
    <div className='setMyAds_wrapper'>
        <div className='setMyAds_wrapper_caution'>
            <p>!</p>
            <p>Please note that your username can only be set 
                once and can not be modified after confirmation.</p>
        </div>
        <div className='setMyAds_wrapper_div_second'>
            <p>My Ads</p>
            <p onClick={props.cancel}>X</p>
        </div>
        <div className='setMyAds_wrapper_last'>
            <label>username</label>
            <input type="text" placeholder="Enter your username"
                onChange={props.setUsernameHandler} />
        </div>
        <div className='setMyAds_wrapper_character'>{props.username.length}/15</div>
        <div className='setMyAds_wrapper_button'>
            <button onClick={props.continueHandler}>Confirm</button>
        </div>
    </div>
);

export default setMyAds;