import React from "react";
import Text from "../label/Text";
import { formatCurrency } from "../../utils/currency";

interface ChipProps {
    children?: React.ReactNode;
    className?: string;
    balance: number;
    holder: string;
    valid: string;
    numbers: string;
}

const Chip = ({balance, holder, valid, numbers, className}: ChipProps) => {
    return (
        <div className={`flex flex-col bg-gradient-to-r from-light-black to-black w-[350px] h-full min-w-[265px] rounded-chip ${className ?? ''}`}>
            <div className="flex flex-col gap-8-5 py-6 px-6-5">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <Text as="span" className="font-normal text-xs text-white opacity-70">Balance</Text>
                        <Text as="span" className="font-semibold text-base text-white">{formatCurrency(balance)}</Text>
                    </div>
                    <img className="w-[34.77px] h-[34.77px]" src="/public/white-chip.png"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <Text as="span" className="font-normal text-xs text-white opacity-70">CARD HOLDER</Text>
                        <Text as="span" className="font-semibold text-base text-white">{holder}</Text>
                    </div>
                    <div className="flex flex-col">
                        <Text as="span" className="font-normal text-xs text-white opacity-70">VALID THRU</Text>
                        <Text as="span" className="font-semibold text-base text-white">{valid}</Text>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(0,0,0,0.1))] rounded-b-chip py-5 px-6-5">
                <div className="flex justify-between items-center w-full">
                    <Text as="span" className="font-semibold text-base text-white">{numbers}</Text>
                    <div>
                        <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.20455" cy="9.20455" r="9.20455" fill="white" fill-opacity="0.5"/>
                            <circle cx="17.7955" cy="9.20455" r="9.20455" fill="white" fill-opacity="0.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chip;