import React from "react";
import Heading from "../label/Heading";
import SearchField from "../input/SearchField";
import IconCircle from "../icon/IconCircle";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    OnToggle: (toggle: boolean) => void;
    toggle: boolean;
}

const Header = ({children, className, OnToggle, toggle}: HeaderProps) => {
    return (
        <div className={`md:z-50 fixed top-0 left-0 w-screen h-header-mobile md:h-header bg-white ${className ?? ''}`}>
            <div
                className="flex flex-col h-full w-full pt-default pb-5 px-default md:hidden gap-5"
            >
                <div className="flex justify-between items-center h-appbar-mobile w-full">
                    <svg onClick={() => {OnToggle(!toggle)}} width="18" height="14" viewBox="0 0 18 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z" fill="#343C6A"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z" fill="#343C6A"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z" fill="#343C6A"/>
                    </svg>
                    <Heading as="h3" className={"text-default font-extrabold    "}>Overview</Heading>
                    <div className="h-appbar-mobile w-appbar-mobile rounded-full bg-amber-950"></div>
                </div>
                <SearchField placeholder="Search for something"/>
            </div>
            <div
                className="hidden md:flex items-center gap-21 h-full w-full py-5 pl-9-5 pr-10"
            >
                <div className="flex gap-2.5">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.875 2.91669C22.387 2.9167 22.89 3.05147 23.3333 3.30746C23.7767 3.56346 24.1449 3.93164 24.4009 4.37502H26.25C27.0236 4.37502 27.7655 4.68231 28.3124 5.22929C28.8594 5.77627 29.1667 6.51814 29.1667 7.29169V24.7917C29.1667 26.7256 28.3985 28.5802 27.031 29.9477C25.6636 31.3151 23.8089 32.0834 21.875 32.0834H8.75004C7.97649 32.0834 7.23463 31.7761 6.68765 31.2291C6.14066 30.6821 5.83337 29.9402 5.83337 29.1667V7.29169C5.83337 6.51814 6.14066 5.77627 6.68765 5.22929C7.23463 4.68231 7.97649 4.37502 8.75004 4.37502H10.5992C10.8552 3.93164 11.2234 3.56346 11.6667 3.30746C12.1101 3.05147 12.6131 2.9167 13.125 2.91669H21.875ZM21.6184 13.6777L15.4321 19.8654L13.3686 17.8019C13.0935 17.5362 12.7252 17.3893 12.3428 17.3926C11.9604 17.3959 11.5947 17.5493 11.3243 17.8197C11.0539 18.09 10.9005 18.4558 10.8972 18.8382C10.8939 19.2206 11.0409 19.5889 11.3065 19.864L14.2961 22.855C14.4451 23.0041 14.6219 23.1223 14.8166 23.203C15.0113 23.2836 15.2199 23.3251 15.4307 23.3251C15.6414 23.3251 15.8501 23.2836 16.0447 23.203C16.2394 23.1223 16.4163 23.0041 16.5652 22.855L23.6819 15.7398C23.8173 15.6043 23.9247 15.4435 23.9979 15.2665C24.0712 15.0895 24.1088 14.8998 24.1088 14.7083C24.1087 14.5167 24.0709 14.327 23.9975 14.1501C23.9242 13.9732 23.8167 13.8124 23.6812 13.677C23.5457 13.5416 23.3849 13.4342 23.2079 13.361C23.0309 13.2877 22.8412 13.2501 22.6496 13.2501C22.4581 13.2502 22.2684 13.288 22.0915 13.3614C21.9145 13.4347 21.7538 13.5422 21.6184 13.6777ZM21.1459 5.83335H13.8542C13.6835 5.8333 13.5183 5.8931 13.3872 6.00236C13.2561 6.11161 13.1674 6.2634 13.1367 6.43127L13.125 6.56252V8.02085C13.125 8.19152 13.1848 8.35679 13.294 8.4879C13.4033 8.619 13.5551 8.70763 13.723 8.73835L13.8542 8.75002H21.1459C21.3165 8.75008 21.4818 8.69027 21.6129 8.58101C21.744 8.47176 21.8327 8.31998 21.8634 8.1521L21.875 8.02085V6.56252C21.8751 6.39186 21.8153 6.22658 21.706 6.09548C21.5968 5.96437 21.445 5.87574 21.2771 5.84502L21.1459 5.83335Z" fill="#232323"/>
                    </svg>
                    <Heading as="span" className="text-logo font-extrabold text-default">Soar Task</Heading>
                </div>
                <div className="flex flex-grow items-center justify-between gap-2.5">
                    <Heading as="h1">Overview</Heading>
                    
                    <div className="flex items-center justify-between gap-8-5">
                        <div className="flex grow gap-7-5">
                            <SearchField placeholder="Search for something"/>
                            <IconCircle className="h-12-5 min-w-12-5 bg-greyish-blues">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <g clipPath="url(#clip0_14_1199)">
                                    <path d="M13.2845 25H11.7155C10.4465 25 9.41401 23.9676 9.41401 22.6986V22.1678C8.87451 21.9954 8.35034 21.7778 7.84678 21.5172L7.47061 21.8934C6.55952 22.8056 5.1001 22.7789 4.21548 21.8931L3.10654 20.7842C2.22036 19.899 2.19487 18.44 3.10684 17.5291L3.48271 17.1532C3.22212 16.6496 3.00459 16.1255 2.83218 15.5859H2.30142C1.03247 15.5859 0 14.5535 0 13.2845V11.7155C0 10.4465 1.03247 9.41406 2.30146 9.41406H2.83223C3.00464 8.87451 3.22217 8.35039 3.48276 7.84683L3.10659 7.4707C2.19517 6.56025 2.22031 5.10117 3.10688 4.21558L4.21592 3.10659C5.10259 2.2187 6.56167 2.19653 7.471 3.10688L7.84683 3.48271C8.35039 3.22217 8.87456 3.00459 9.41406 2.83218V2.30142C9.41406 1.03242 10.4465 0 11.7155 0H13.2845C14.5535 0 15.5859 1.03242 15.5859 2.30142V2.83223C16.1254 3.00459 16.6496 3.22217 17.1532 3.48276L17.5293 3.10659C18.4404 2.19438 19.8999 2.22114 20.7845 3.10693L21.8934 4.21582C22.7796 5.10103 22.8051 6.55996 21.8931 7.47095L21.5172 7.84683C21.7778 8.35039 21.9954 8.87446 22.1678 9.41406H22.6985C23.9675 9.41406 25 10.4465 25 11.7155V13.2845C25 14.5535 23.9675 15.5859 22.6985 15.5859H22.1678C21.9954 16.1255 21.7778 16.6496 21.5172 17.1532L21.8934 17.5293C22.8048 18.4398 22.7797 19.8989 21.8931 20.7845L20.7841 21.8935C19.8974 22.7813 18.4383 22.8035 17.529 21.8932L17.1532 21.5173C16.6496 21.7779 16.1254 21.9955 15.5859 22.1679V22.6987C15.5859 23.9676 14.5535 25 13.2845 25ZM8.09165 19.979C8.79121 20.3927 9.54414 20.7053 10.3295 20.908C10.6529 20.9914 10.8789 21.2831 10.8789 21.6171V22.6986C10.8789 23.1599 11.2542 23.5352 11.7155 23.5352H13.2845C13.7458 23.5352 14.1211 23.1599 14.1211 22.6986V21.6171C14.1211 21.2831 14.3471 20.9914 14.6706 20.908C15.4559 20.7053 16.2088 20.3927 16.9084 19.979C17.1962 19.8088 17.5627 19.8551 17.7992 20.0916L18.5652 20.8576C18.8955 21.1883 19.4258 21.1806 19.748 20.858L20.8577 19.7483C21.1791 19.4273 21.1898 18.8968 20.858 18.5654L20.0917 17.7991C19.8552 17.5626 19.8089 17.1961 19.9791 16.9083C20.3928 16.2088 20.7053 15.4559 20.908 14.6705C20.9915 14.3471 21.2832 14.1211 21.6172 14.1211H22.6986C23.1599 14.1211 23.5352 13.7458 23.5352 13.2846V11.7155C23.5352 11.2542 23.1599 10.879 22.6986 10.879H21.6172C21.2832 10.879 20.9915 10.653 20.908 10.3296C20.7053 9.54419 20.3928 8.79126 19.9791 8.09175C19.8089 7.80395 19.8552 7.43745 20.0917 7.20103L20.8577 6.43496C21.1889 6.1042 21.1802 5.57393 20.858 5.2521L19.7484 4.14248C19.4268 3.82041 18.8963 3.81099 18.5655 4.14219L17.7992 4.90855C17.5628 5.14502 17.1962 5.19131 16.9084 5.02109C16.2089 4.60737 15.456 4.29482 14.6706 4.09214C14.3472 4.00869 14.1212 3.71699 14.1212 3.38296V2.30142C14.1212 1.84014 13.7458 1.46484 13.2846 1.46484H11.7156C11.2543 1.46484 10.879 1.84014 10.879 2.30142V3.38286C10.879 3.71689 10.653 4.00859 10.3295 4.09204C9.54419 4.29473 8.79126 4.60728 8.0917 5.021C7.80381 5.19116 7.43735 5.14487 7.20093 4.90845L6.43491 4.14238C6.10464 3.81172 5.57422 3.81938 5.2521 4.14204L4.14238 5.25171C3.821 5.57271 3.81025 6.10313 4.14209 6.43457L4.90845 7.20093C5.14487 7.43735 5.19116 7.80386 5.021 8.09165C4.60728 8.79116 4.29478 9.54409 4.09209 10.3295C4.00859 10.6529 3.71689 10.8789 3.38291 10.8789H2.30146C1.84019 10.8789 1.46484 11.2542 1.46484 11.7155V13.2845C1.46484 13.7458 1.84019 14.1211 2.30146 14.1211H3.38286C3.71689 14.1211 4.00854 14.3471 4.09204 14.6705C4.29473 15.4559 4.60728 16.2088 5.02095 16.9083C5.19111 17.1961 5.14482 17.5626 4.9084 17.799L4.14233 18.5651C3.81118 18.8959 3.81982 19.4261 4.14204 19.7479L5.25166 20.8576C5.57329 21.1796 6.10376 21.1891 6.43452 20.8579L7.20083 20.0915C7.37505 19.9173 7.7375 19.7695 8.09165 19.979Z" fill="#718EBF"/>
                                    <path d="M12.5 17.9395C9.50063 17.9395 7.06055 15.4993 7.06055 12.5C7.06055 9.50068 9.50063 7.06055 12.5 7.06055C15.4994 7.06055 17.9395 9.50068 17.9395 12.5C17.9395 15.4993 15.4994 17.9395 12.5 17.9395ZM12.5 8.52539C10.3083 8.52539 8.52539 10.3084 8.52539 12.5C8.52539 14.6916 10.3084 16.4746 12.5 16.4746C14.6916 16.4746 16.4746 14.6916 16.4746 12.5C16.4746 10.3084 14.6917 8.52539 12.5 8.52539Z" fill="#718EBF"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_14_1199">
                                    <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </IconCircle>
                            <IconCircle className="h-12-5 min-w-12-5 bg-greyish-blues">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M11.442 25C9.289 25 7.53577 23.2479 7.53577 21.0938C7.53577 20.6625 7.88577 20.3125 8.31702 20.3125C8.74827 20.3125 9.09827 20.6625 9.09827 21.0938C9.09827 22.3866 10.1504 23.4375 11.442 23.4375C12.7337 23.4375 13.7858 22.3866 13.7858 21.0938C13.7858 20.6625 14.1358 20.3125 14.567 20.3125C14.9983 20.3125 15.3483 20.6625 15.3483 21.0938C15.3483 23.2479 13.5952 25 11.442 25Z" fill="#396AFF"/>
                                    <path d="M20.0357 21.875H2.84824C1.84307 21.875 1.02539 21.0573 1.02539 20.0521C1.02539 19.5187 1.25771 19.0136 1.66283 18.6666C1.68896 18.6438 1.717 18.623 1.74618 18.6041C3.2753 17.2697 4.15039 15.35 4.15039 13.3228V10.4166C4.15039 6.39591 7.42226 3.125 11.442 3.125C11.6087 3.125 11.7889 3.12805 11.9556 3.15628C12.3816 3.22704 12.6692 3.63026 12.5982 4.05521C12.5275 4.48017 12.117 4.7678 11.6993 4.69685C11.6159 4.6833 11.5244 4.6875 11.442 4.6875C8.28381 4.6875 5.71289 7.25727 5.71289 10.4166V13.3228C5.71289 15.8396 4.60968 18.2209 2.68898 19.8551C2.67334 19.8677 2.6598 19.8792 2.64301 19.8906C2.61497 19.9261 2.58789 19.9802 2.58789 20.0521C2.58789 20.1937 2.70672 20.3125 2.84824 20.3125H20.0357C20.1775 20.3125 20.2963 20.1937 20.2963 20.0521C20.2963 19.9791 20.2692 19.9261 20.24 19.8906C20.2244 19.8792 20.2108 19.8677 20.1952 19.8551C18.2734 18.2198 17.1713 15.8396 17.1713 13.3228V12.1876C17.1713 11.7563 17.5213 11.4063 17.9525 11.4063C18.3838 11.4063 18.7338 11.7563 18.7338 12.1876V13.3228C18.7338 15.3511 19.6098 17.2718 21.1411 18.6073C21.1691 18.626 21.1962 18.6459 21.2212 18.6678C21.6265 19.0136 21.8588 19.5187 21.8588 20.0521C21.8588 21.0573 21.0411 21.875 20.0357 21.875Z" fill="#396AFF"/>
                                    <path d="M18.7338 10.4166C15.8619 10.4166 13.5254 8.08029 13.5254 5.2084C13.5254 2.3365 15.8619 0 18.7338 0C21.6057 0 23.942 2.3365 23.942 5.2084C23.942 8.08029 21.6057 10.4166 18.7338 10.4166ZM18.7338 1.5625C16.7233 1.5625 15.0879 3.19786 15.0879 5.2084C15.0879 7.21874 16.7233 8.8541 18.7338 8.8541C20.7441 8.8541 22.3795 7.21874 22.3795 5.2084C22.3795 3.19786 20.7441 1.5625 18.7338 1.5625Z" fill="#396AFF"/>
                                </svg>
                            </IconCircle>
                        </div>
                        <IconCircle className="h-15 w-15 bg-greyish-blues">
                        </IconCircle>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;