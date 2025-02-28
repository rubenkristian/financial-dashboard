import React, { useEffect, useRef, useState } from "react";
import Header from "../container/Header";
import MenuItem from "./MenuItem";
import { useLocation, useNavigate } from "react-router";
import { setPageLabel } from "../../stores/reducers/page";
import { useDispatch } from "react-redux";

interface MenuItem {
    icon: React.ElementType;
    label: string;
    path: string[];
}

type SideMenuProps = {
    children: React.ReactNode;
    className?: string;
    menus?: Array<MenuItem>;
    menuSelected: number;
    OnMenuSelected: (menu: number) => void;
}

const SideMenu = ({children, className, menus, OnMenuSelected}: SideMenuProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef(new Map<number, HTMLDivElement>());
    const [activeStyle, setActiveStyle] = useState({ top: 0, height: 0 });
        
    useEffect(() => {
        const activeIndex = menus && menus.findIndex((menu) => menu.path.includes(location.pathname));
        if (activeIndex !== -1) {
            const menuElement = menuRef.current.get(activeIndex ?? 0);
            if (menuElement) {
                setActiveStyle({
                    top: menuElement.offsetTop,
                    height: menuElement.offsetHeight,
                });
            }

            if (menus) {
                dispatch(setPageLabel(menus[activeIndex ?? 0].label))
            }
        }
        window.scrollTo(0, 0);
    }, [location.pathname, menus]);

    return (
        <div className={`w-full h-screen ${className}`}>
            <Header
                OnToggle={(toggle) => {
                    setIsOpen(toggle);
                }}
                toggle={isOpen}
            >
            </Header>
            <div
                className={
                    `fixed transform transition-transform duration-200 ease-in-out z-40 flex pt-3.5 w-[80vw] md:w-sidebar h-screen bg-white md:translate-x-0 -translate-x-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
                }
            >
                <div className="relative">
                    <div className="flex flex-col gap-9-5">
                        {
                            menus && menus.map(({label, icon, path}: MenuItem, index: number) => {
                                return (
                                    <div
                                        ref={(el) => {
                                            if (el) menuRef.current.set(index, el);
                                        }}
                                    >
                                        <MenuItem
                                            label={label} 
                                            Icon={icon} 
                                            selected={path.includes(location.pathname)} 
                                            key={index}
                                            OnClick={async () => {
                                                await navigate(path[0]);
                                                OnMenuSelected(index);
                                                setIsOpen(false);
                                                dispatch(setPageLabel(label));
                                            }}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div
                        className="absolute left-0 w-1 bg-black rounded-tr-lg rounded-br-lg transition-all duration-300"
                        style={{
                            top: `${activeStyle.top}px`,
                            height: `${activeStyle.height}px`,
                        }}
                    ></div>
                </div>
            </div>
            <div className="w-full h-screen">
                <div
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className={`fixed w-full h-full bg-black opacity-10 ${isOpen ? 'block' : 'hidden'}`}
                ></div>
                {children}
            </div>
        </div>
    );
}

export default SideMenu;