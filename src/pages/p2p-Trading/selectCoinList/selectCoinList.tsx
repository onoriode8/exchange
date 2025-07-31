
import Box from "../../util/box/box";
import BackDrop from "../../util/error/backdrop/backdrop";
import SelectCoin from "../../util/selectCoin/selectCoin";

import usdtImage from '../../../assets/usdt.png'
import btcImage from '../../../assets/Bitcoin.webp'
import ethImage from '../../../assets/eth.png'


interface SelectCoinListProps {
    btc: boolean,
    eth: boolean,
    usdt: boolean,
    toggleCoin: boolean,
    clickUsdt: () => void,
    clickBtc: () => void,
    clickEth: () => void,
    backdropClicked: () => void
}

const selectCoinList:React.FC<SelectCoinListProps> = (SelectCoinListProps) => (
    <div>
        {SelectCoinListProps.toggleCoin && <BackDrop clicked={SelectCoinListProps.backdropClicked} />}
        {SelectCoinListProps.toggleCoin && <Box>
            <SelectCoin checked={SelectCoinListProps.usdt} coinImage={usdtImage} coinTitle="USDT" clicked={SelectCoinListProps.clickUsdt} />
            <SelectCoin checked={SelectCoinListProps.btc} coinImage={btcImage} coinTitle="BTC" clicked={SelectCoinListProps.clickBtc} />
            <SelectCoin checked={SelectCoinListProps.eth} coinImage={ethImage} coinTitle="ETH" clicked={SelectCoinListProps.clickEth} />
        </Box>}
    </div>
);

export default selectCoinList;