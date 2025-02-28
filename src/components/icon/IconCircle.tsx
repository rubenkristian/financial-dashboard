import React from "react";

interface IconCircleProps {
    children?: React.ReactNode;
    className?: string;
    OnClick?: () => void;
}

const IconCircle = ({children, className, OnClick}: IconCircleProps) => {
    return (
        <div 
            className={`flex p-0 ${className} rounded-full justify-center items-center overflow-clip`}
            onClick={() => {
                OnClick && OnClick();
            }}
        >
            {children}
        </div>
    );
}

export default IconCircle;