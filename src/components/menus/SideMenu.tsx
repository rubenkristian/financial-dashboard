import React, { useEffect, useRef, useState } from "react";
import Header from "../container/Header";
import MenuItem from "./MenuItem";
import { useLocation, useNavigate } from "react-router";

interface MenuItem {
    icon: React.ElementType;
    label: string;
    path: string;
}

type SideMenuProps = {
    children: React.ReactNode;
    className?: string;
    menus?: Array<MenuItem>;
    menuSelected: number;
    OnMenuSelected: (menu: number) => void;
}

const SideMenu = ({children, className, menus, menuSelected=0, OnMenuSelected}: SideMenuProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className={`w-full h-screen ${className}`}>
            <Header
                OnToggle={(toggle) => {
                    console.log("open");
                    setIsOpen(toggle);
                }}
                toggle={isOpen}
            >
            </Header>
            <div
                ref={sidebarRef}
                className={
                    `fixed transform transition-transform duration-200 ease-in-out z-40 flex pt-3.5 pl-10 w-[80vw] sm:w-sidebar h-screen bg-white md:translate-x-0 -translate-x-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
                }
            >
                <div className="flex flex-col gap-9-5">
                    {
                        menus && menus.map(({label, icon, path}: MenuItem, index: number) => {
                            return (
                                <MenuItem 
                                    label={label} 
                                    Icon={icon} 
                                    selected={location.pathname === path} 
                                    key={index}
                                    OnClick={async () => {
                                        await navigate(path);
                                        OnMenuSelected(index);
                                        setIsOpen(false);
                                    }}
                                />
                            );
                        })
                    }
                </div>
            </div>
            <div className="w-full h-screen">
                {children}
            </div>
        </div>
    );
}

export default SideMenu;