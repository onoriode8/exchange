import { useState } from 'react';

import Top from "../../util/top/top";
import Currency from '../../util/currency/currency'
import SelectMethod from '../../util/SelectMethod/SelectMethod';
import Box from '../../util/box/box';
import SelectCoin from "../../util/selectCoin/selectCoin";

import usdtImage from '../../../assets/usdt.png'
import btcImage from '../../../assets/Bitcoin.webp'
import ethImage from '../../../assets/eth.png'


const P2pTrading = () => {
    const [usdt, setUsdt] = useState<boolean>(false)
    const [btc, setBtc] = useState<boolean>(false)
    const [eth, setEth] = useState<boolean>(false)

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    console.log("USDT", usdt)
    console.log("BTC", btc)
    console.log("ETH", eth)

    return (
        <div>
            <Top middleTitle="P2P" lastTitle="" path="" />
            <Currency />
            <SelectMethod usdt={usdt} btc={btc} eth={eth} />
            <Box>
                <SelectCoin coinImage={usdtImage} coinTitle="USDT" clicked={() => setUsdt(!usdt)} />
                <SelectCoin coinImage={btcImage} coinTitle="BTC" clicked={() => setBtc(!btc)} />
                <SelectCoin coinImage={ethImage} coinTitle="ETH" clicked={() => setEth(!eth)} />
            </Box>
        </div>
    );
}

export default P2pTrading;