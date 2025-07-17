import { MdOutlineError } from "react-icons/md";

import './error.css'


interface ErrorMessageProps {
    error: unknown,
    click: () => void
}

const errorMessage:React.FC<ErrorMessageProps> = ({ error, click }) => {
    let message;
    if(error instanceof Error) {
        message = error.message
    }
    // message = error;
    // console.log(error instanceof Error) //returns => true if they are errors
    return (
        <div className="errorMessage_wrapper">
            <MdOutlineError />
            <p>{message}</p>
            <button onClick={click}>OK</button>
        </div>
    );
}

export default errorMessage;