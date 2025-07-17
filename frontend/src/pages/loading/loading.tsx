import { useContext } from 'react'

import AuthContext from '../../hooks/context';


import './loading.css'


const Loading = () => {
    const {authenticationDataProps} = useContext(AuthContext)
    // console.log(!authenticationDataProps)
    const styles = authenticationDataProps ? "-1em" : "15em"
    return (
        <div style={{marginTop: styles}} className='loading_wrapper'>
            <span className="loading_loader"></span>
        </div>
    );
}

export default Loading;