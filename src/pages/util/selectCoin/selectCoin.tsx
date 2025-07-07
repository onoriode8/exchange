
import './selectCoin.css';


interface SelectCoinProps {
    checked: boolean,
    coinImage: string
    coinTitle: string,
    clicked: () => void
}

const selectCoin: React.FC<SelectCoinProps> = (SelectCoinProps) => (
    <div className='selectCoin_wrapper'>
        <div>
            <img src={SelectCoinProps.coinImage} alt="" />
            <div>{SelectCoinProps.coinTitle}</div>
        </div>
        <input type="checkbox" 
            checked={SelectCoinProps.checked} 
            onChange={SelectCoinProps.clicked}
            // onClick={SelectCoinProps.clicked} 
            />
    </div>
);

export default selectCoin;