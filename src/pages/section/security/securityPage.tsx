import SecurityBox from './securitybox/securitybox';
import securityImage from '../../../assets/images.png'
// import p2pSecurity from '../../../assets/p2p_security.webp'

import { RiP2pFill } from "react-icons/ri";

import './securityPage.css'



const securityPage = () => (
    <div style={{display: "flex", 
        alignItems: "center", justifyContent: "space-evenly"}}>
        <SecurityBox icon={securityImage} title="some text" paragraph="pag"/>
        <SecurityBox icon={<RiP2pFill />} title="some text" paragraph="pag"/>
        {/* <SecurityBox icon={securityImage} title="some text" paragraph="pag"/> */}
    </div>
);

export default securityPage;