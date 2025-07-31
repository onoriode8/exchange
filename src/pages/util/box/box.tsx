import './box.css'


interface BoxProps {
    children: React.ReactNode
}

const box: React.FC<BoxProps> = ({ children }) => (
    <div className='box-wrapper_'>
        <div>
            {children}
        </div>
    </div>
);

export default box;