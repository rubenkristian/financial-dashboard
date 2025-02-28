import Text from "../label/Text";

interface MenuItemProps {
    label: string;
    Icon: React.ElementType;
    selected: boolean;
    OnClick: () => void;
}

const MenuItem = ({label, Icon, selected, OnClick}: MenuItemProps) => {
    return (
        <div 
            onClick={() => {
                OnClick();
            }}
            className="flex items-center gap-6-5 h-default cursor-pointer"
        >
            <Icon color={selected ? '#232323' : '#B1B1B1'}/>
            <Text as="span" className={`font-medium text-lg ${selected ? 'text-label-selected' : 'text-label-unselected'}`}>{label}</Text>
        </div>
    );
}

export default MenuItem;