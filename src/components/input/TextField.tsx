import React from "react";

interface TextFieldProps {
    className?: string;
    OnChange?: (text: string) => void;
    name?: string;
    value?: string;
    placeholder: string;
}

const TextField = ({className, name, OnChange, value, placeholder}: TextFieldProps) => {
    return (
        <div className={`flex px-5 py-4 border border-light-pastel-blue rounded-input ${className}`}>
            <input
                className="w-full border-b border-transparent focus:outline-none placeholder-text-placeholder"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    OnChange && OnChange(e.target.value);
                }}
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                aria-label={placeholder}
                title={placeholder}
            />
        </div>
    );
}

export default TextField;