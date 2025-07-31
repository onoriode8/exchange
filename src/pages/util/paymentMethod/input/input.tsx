
import './input.css';


interface InputProps {
    value: string | number,
    type: string,
    label: string,
    isValid: boolean,
    placeholder: string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const input: React.FC<InputProps> = (InputProps) => (
    <div className='input_label_wrapper'>
        <label>{InputProps.label}</label>
        <input type={InputProps.type} value={InputProps.value} placeholder={InputProps.placeholder}
            onChange={InputProps.onChangeFunc}
        />
        {InputProps.isValid && <p style={{color: "red"}}>{InputProps.placeholder}</p>}
    </div>
);

export default input;