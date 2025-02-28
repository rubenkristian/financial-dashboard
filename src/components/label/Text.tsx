import React from "react";

interface TextProps {
    children?: React.ReactNode;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'div';
    className?: string;
    OnClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Text = ({children, as: Tag = "span", className = "", OnClick}: TextProps) => {
    const baseClass = 'font-inter';
    const sizes = {
        h1: 'text-head-1 leading-head-1',
        h2: 'text-head-2 leading-head-2',
        h3: 'text-head-3 leading-head-3',
        h4: 'text-head-4 leading-head-4',
        h5: 'text-head-5 leading-head-5',
        span: '',
        p: '',
        div: '',
    }
    return (
        <Tag 
            onClick={(e) => {
                OnClick && OnClick(e);
            }} 
            className={`${baseClass} ${sizes[Tag]} ${className}`}
            title={React.Children.toArray(children).join('')}
        >
            {children}
        </Tag>
    );
}

export default Text;