import IconCircle from "../icon/IconCircle";
import Text from "../label/Text";

interface ContactProps {
    img: string;
    name: string;
    position: string;
}

const Contact = ({img, name, position}: ContactProps) => {
    return (
        <div className="flex flex-col">
            <IconCircle className="max-h-17 max-w-17">
                <img className="max-h-17 max-w-17" src={img} alt={name}/>
            </IconCircle>
            <Text as="span" className="font-normal text-base text-label-selected line-clamp-2">{name}</Text>
            <Text as="span" className="font-normal text-sl text-label-gray line-clamp-2">{position}</Text>
        </div>
    );
}

export default Contact;