// import { useEffect } from 'react';

import { useNavigate, NavLink } from 'react-router-dom';


import { FaArrowLeftLong } from "react-icons/fa6";

import './top.css'

interface TopProps {
    middleTitle: string, 
    lastTitle: string,
    path: string
}

const Top:React.FC<TopProps> = ({ middleTitle, lastTitle, path }) => {
    const navigate = useNavigate()

    return (
        <div className="top_wrapper">
            <div>
                <FaArrowLeftLong onClick={() => navigate(-1)} />
                <p>{middleTitle}</p>
                <NavLink to={`${path}`}>{lastTitle}</NavLink>
            </div>
        </div>
    );
}

export default Top;