import { useEffect, useRef, useState } from "react";
import Text from "../../components/label/Text";
import { Outlet, useLocation, useNavigate } from "react-router";

interface Tab {
    path: string;
    label: string;
}
const tabs: Array<Tab> = [
    {path: '/setting', label: 'Edit Profile', },
    {path: '/setting/preference', label: 'Preferences', },
    {path: '/setting/security', label: 'Security', }
]

const SettingIndexPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tabsRef = useRef(new Map<number, HTMLDivElement>());
    const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
    
    useEffect(() => {
        const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname);
        if (activeIndex !== -1) {
            const tabElement = tabsRef.current.get(activeIndex);
            if (tabElement) {
                setActiveStyle({
                    left: tabElement.offsetLeft,
                    width: tabElement.offsetWidth,
                });
            }
        }
    }, [location.pathname]);
    
    return (
        <div className="bg-white rounded-chip px-5 py-11 md:p-7-5">
            <div className="relative">
                <div className="flex w-full h-7-5 gap-10 md:gap-17 overflow-x-auto scrollbar-hide border-b border-border">
                    {
                        tabs.map(({path, label}: Tab, index: number) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) tabsRef.current.set(index, el);
                                }}
                                onClick={() => {
                                    navigate(path);
                                }}
                                className={`cursor-pointer ${location.pathname === path ? 'text-black font-semibold' : 'text-gray-500'}`}
                            >
                                <Text 
                                    as="span" 
                                    className={`whitespace-nowrap text-ellipsis`}
                                >
                                    {label}
                                </Text>
                            </div>
                        ))
                    }
                </div>
                <div
                    className="absolute bottom-0 h-1 bg-black rounded-tl-lg rounded-tr-lg transition-all duration-300"
                    style={{
                        left: `${activeStyle.left}px`,
                        width: `${activeStyle.width}px`,
                    }}
                ></div>
            </div>
            <Outlet/>
        </div>
    );
}

export default SettingIndexPage;