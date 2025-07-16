import { useState, useEffect } from 'react'


export const useCountDown = () => {
    const [time, setTime] = useState<number>(30)
    const [countDownSec, setCountDownSec] = useState<boolean>(true)
    
    useEffect(() => {
        if(time === 0) {
            setCountDownSec(false)
            return
        }
        const intervalId = setInterval(() => {
            setTime(time - 1)
        }, 1100);
        return () => clearInterval(intervalId)
    }, [time])

    return { time, countDownSec }
}