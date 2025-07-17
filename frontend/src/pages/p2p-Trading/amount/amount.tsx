import Box from '../../util/box/box';
import BackDrop from '../../util/error/backdrop/backdrop';


import './amount.css';


interface AmountProps {
    reset: () => void,
    amountClicked: boolean,
    backdropClicked: () => void,
    amountInput: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}



const amount:React.FC<AmountProps> = (AmountProps) => (
    <div>
        {AmountProps.amountClicked && <BackDrop clicked={AmountProps.backdropClicked}/>}
        {AmountProps.amountClicked && <Box>
            <div className='amount_wrapper_p2p'>
                <div>
                    <input type="number" value={Number(AmountProps.amountInput)} 
                        placeholder="Enter Amount" onChange={AmountProps.onChange} />
                    <div>NGN</div>
                </div>

                <div>
                    <input type='reset' onClick={AmountProps.reset}/>
                    <button onClick={AmountProps.backdropClicked}>Confirm</button>
                </div>
            </div>
        </Box>}
    </div>
);

export default amount;