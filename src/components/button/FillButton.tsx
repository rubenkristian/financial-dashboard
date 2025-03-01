import React from "react";

interface FillButtonProps {
    children?: React.ReactNode;
    className?: string;
    OnClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const FillButton = ({children, className, OnClick}: FillButtonProps) => {
    return (
        <div
            onClick={(e) => {
                if (OnClick) {
                    OnClick(e);
                }
            }}
            className={`flex rounded-button items-center justify-center transition-all duration-200 
                hover:bg-opacity-80 hover:scale-105 
                active:scale-95 active:bg-opacity-70
                cursor-pointer select-none ${className}`}
        >
            {children}
        </div>
    );
}

export default FillButton;