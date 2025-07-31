
import './authBtn.css'

interface AuthBtnProps {
    title: string
}

const authBtn:React.FC<AuthBtnProps> = ({ title }) => (
    <div className="authBtn_btn">
        <button type="submit">{title}</button>
    </div>
);

export default authBtn;