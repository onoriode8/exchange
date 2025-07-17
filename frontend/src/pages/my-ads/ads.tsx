import { useState, type ChangeEvent } from "react";

import { GoPlus } from "react-icons/go";
import { IoReceiptSharp } from "react-icons/io5";

import Top from "../util/top/top";
import SetMyAds from "./set-myads/set-myads";
import PostAds from "./post-ads/post-ads";
import Backdrop from "../util/error/backdrop/backdrop";
import ErrorMessage from "../util/error/errorMessage/error";
import { useFetchMyAds } from "../../custom-hooks/purchase-orders";
import { usePostMyAds } from "../../custom-hooks/post-request";

import './ads.css'


const MyAds = () => {
    const [showMyAds, setShowMyAds] = useState<boolean>(false)
    const [showInnerAds, setShowInnerAds] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [errors, setErrors] = useState<unknown>()

    const { error, myAds, setError } = useFetchMyAds()
    const setUsernameHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if(username.length === 15) return
        const value = e.target.value
        setUsername(value)
    }

    const { selectPurchase, setSelectPurchase } = usePostMyAds(username)

    const continueHandler = async () => {
         setShowMyAds(false)
            setShowInnerAds(true)
        if(username.length < 5) return
        console.log("USERNAME", username)
        //will check if the username already exist.
        try {
            const res = await fetch("http://localhost:8080/check/myAds/exist", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer "
                },
                body: JSON.stringify(username)
            })
            const data = await res.json()
            if(!res.ok) throw new Error(data)
            setShowMyAds(false)
            setShowInnerAds(true)
        } catch(err) {
            setErrors(err)
            console.log("ERROR", err)
        }
    }

    return (
        <div>
            {error && <ErrorMessage error={error ? error : errors} click={() => setError(undefined)}/>}
            {showMyAds && <Backdrop clicked={() => setShowMyAds(false)}/>}
            {showMyAds && <SetMyAds username={username} 
                cancel={() => setShowMyAds(false)}
                continueHandler={continueHandler}
                setUsernameHandler={setUsernameHandler} />}

            {showInnerAds && <Backdrop clicked={() => setShowInnerAds(false)}/>}
            {showInnerAds && <PostAds
                selectPurchase={selectPurchase}
                close={() => setShowInnerAds(false)}
                setSelectPurchase={setSelectPurchase}
            />}
            <Top lastTitle="" path="" middleTitle="My Ads" />
            <div className="MyAds_wrapper">
                <h2>Active</h2>
                <div><GoPlus onClick={() => setShowMyAds(true)} /></div>
            </div>

            <div className="MyAds_wrapper_post_now">
                <IoReceiptSharp style={{fontSize: "xx-large", color: "blue"}} />
                <p>Oops, you don't have any ads yet.</p>
                <div onClick={() => setShowMyAds(true)}>
                    <GoPlus />
                    <div>Post Now</div>
                </div>
            </div>
        </div>
    )
}

export default MyAds;