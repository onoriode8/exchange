
import './selectCoin.css';


interface SelectCoinProps {
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
            // checked={1} 
            // onChange={}
            onClick={SelectCoinProps.clicked} />
    </div>
);

export default selectCoin;