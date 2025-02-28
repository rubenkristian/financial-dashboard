import { useEffect, useRef, useState } from "react";
import Contact from "../card/Contact"
import IconCircle from "../icon/IconCircle";


export interface TransferData {
    name: string;
    position: string;
    img: string;
}

interface ContactListProps {
    data: Array<TransferData>;
}

const ContactList = ({data}: ContactListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleTouchStart = (event: React.TouchEvent) => {
        if (scrollRef.current) {
        setStartX(event.touches[0].clientX);
        setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        if (scrollRef.current) {
        const moveX = event.touches[0].clientX - startX;
        event.preventDefault();
        scrollRef.current.scrollLeft = scrollLeft - moveX;
        }
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        if (scrollRef.current) {
        setIsDragging(true);
        setStartX(event.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        event.preventDefault();
        const x = event.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.7

            const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            
            scrollRef.current.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
            });
        }
    };
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    useEffect(() => {
        const handleResize = () => {
            checkScrollPosition();
        };

        if (scrollRef.current) {
          scrollRef.current.addEventListener("scroll", checkScrollPosition);
          checkScrollPosition()
        }

        window.addEventListener("resize", handleResize);
        return () => {
          if (scrollRef.current) {
            scrollRef.current.removeEventListener("scroll", checkScrollPosition);
          }
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return (
        <div
            className="relative w-full"
        >
            <div
                className="flex gap-7 overflow-x-auto scrollbar-hide"
                ref={scrollRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onScroll={checkScrollPosition}
            >
                {
                    data.map(({name, position, img}: TransferData, index: number) => {
                        return (
                            <Contact
                                key={index}
                                name={name}
                                position={position}
                                img={img}
                            />
                        )
                    })
                }
            </div>
            {!isAtStart && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-full w-15">
                    <div className="h-full flex items-center justify-center">
                        <IconCircle 
                            className="h-5xl w-5xl rotate-y-180 shadow bg-white"
                            OnClick={() => {
                                scroll('left')
                            }}
                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.00024L7.5 7.50024L1 14.0002" stroke="#718EBF" stroke-width="1.5"/>
                            </svg>
                        </IconCircle>
                    </div>
                </div>
            )}
            {!isAtEnd && (
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-full w-15">
                    <div className="h-full flex items-center justify-center">
                        <IconCircle 
                            className="h-5xl w-5xl shadow bg-white"
                            OnClick={() => {
                                scroll('right')
                            }}
                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.00024L7.5 7.50024L1 14.0002" stroke="#718EBF" stroke-width="1.5"/>
                            </svg>
                        </IconCircle>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactList;