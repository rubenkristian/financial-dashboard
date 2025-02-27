import React from "react";

interface ChipProps {
    children: React.ReactNode;
    className: string;
}

const Chip = ({children, className}: ChipProps) => {
    return (
        <div className={`w-chip-horizontal h-chip-vertical rounded-chip ${className}`}>
            {children}
        </div>
    );
}

export default Chip;