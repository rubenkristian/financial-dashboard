import React from "react";

interface FlexProps {
    children: React.ReactNode;
    className: string;
}

const Flex = ({children, className}: FlexProps) => {
    return (
        <div className={`flex rounded-chip p-default bg-white ${className} md:bg-transparent md:p-mobile`}>
            {children}
        </div>
    );
}

export default Flex;