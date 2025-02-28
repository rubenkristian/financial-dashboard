import { useRef, useState } from "react";
import Chip from "../card/Chip";
import Text from "../label/Text";
import { useNavigate } from "react-router";

export interface MyCardData {
    balance: number;
    holder: string;
    valid: string;
    numbers: string;
}

interface MyCardProps {
    data: Array<MyCardData>;
}

const MyCard = ({data}: MyCardProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const navigate = useNavigate();
    
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
      const walk = (x - startX) * 2; 
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    return (
        <div className="flex flex-col grow gap-5 w-full content:max-w-2/3">
            <div className="flex w-full justify-between items-center">
                <Text as="h1">My Cards</Text>
                <Text 
                    as="div" 
                    className="cursor-pointer text-blue-500 hover:text-blue-700 active:text-blue-900 transition-colors duration-200"
                    OnClick={() => {
                        navigate('/credit-cards')
                    }}
                >
                    See All
                </Text>
            </div>
            <div 
                className="flex gap-7-5 overflow-x-auto whitespace-nowrap max-h-96 scrollbar-hide"
                ref={scrollRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {
                    data.map(({balance, holder, valid, numbers}: MyCardData, index: number) => {
                        return (
                            <Chip
                                key={index}
                                balance={balance} 
                                holder={holder} 
                                valid={valid} 
                                numbers={numbers}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MyCard;