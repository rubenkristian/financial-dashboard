import React from "react";

interface IconCircleProps {
    children?: React.ReactNode;
    className?: string;
}

const IconCircle = ({children, className}: IconCircleProps) => {
    return (
        <div className={`flex p-0 ${className} rounded-full justify-center items-center`}>
            {children}
        </div>
    );
}

export default IconCircle;