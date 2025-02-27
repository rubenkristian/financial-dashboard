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
                OnClick && OnClick(e);
            }}
            className={`flex rounded-button items-start justify-center ${className}`}
        >
            {children}
        </div>
    );
}

export default FillButton;