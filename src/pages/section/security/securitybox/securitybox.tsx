

import './securitybox.css'

interface securityBoxProps {
    icon: string,
    title: string,
    paragraph: string
}

const securityBox: React.FC<securityBoxProps> = (securityBoxProps) => (
    <div>
        <div>
            <img src={securityBoxProps.icon} alt="" />
            <h2>{securityBoxProps.title}</h2>
            <p>{securityBoxProps.paragraph}</p>
        </div>
    </div>
);

export default securityBox;