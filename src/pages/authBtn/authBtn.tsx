
import './authBtn.css'

interface AuthBtnProps {
    title: string
}

const authBtn:React.FC<AuthBtnProps> = ({ title }) => (
    <div className="authBtn_btn">
        <button>{title}</button>
    </div>
);

export default authBtn;