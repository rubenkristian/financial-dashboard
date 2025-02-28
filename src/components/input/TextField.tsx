import React from "react";
import Text from "../label/Text";

interface TextFieldProps {
    className?: string;
    OnChange?: (text: string) => void;
    name?: string;
    value?: string;
    placeholder: string;
    type?: React.HTMLInputTypeAttribute;
    error?: string;
}

const TextField = ({className, name, OnChange, value, placeholder, type = 'text', error}: TextFieldProps) => {
    return (
        <div className="flex flex-col gap-2.5">
            <label htmlFor={name} title={name} className="font-normal text-base">
                {placeholder}
            </label>
            <div className={`flex px-5 py-4 rounded-input border transition-all
                    ${error ? 'border-red-500' : 'border-light-pastel-blue hover:border-gray-500 focus-within:border-blue-500'}
                    ${className}`}>
                <input
                    className="w-full border-b border-transparent focus:outline-none placeholder-text-placeholder"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        OnChange && OnChange(e.target.value);
                    }}
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    title={placeholder}
                    aria-required="true"
                />
            </div>
            {error && <Text as="span" className="text-red-500">{error}</Text>}
        </div>
    );
}

export default TextField;