
import './backdrop.css'


interface BackdropProps {
    clicked: () => void
}

const backdrop:React.FC<BackdropProps> = ({ clicked }) => (
    <div className='backdrop_wrapper_util' onClick={clicked}>
        <div></div>
    </div>
);

export default backdrop;