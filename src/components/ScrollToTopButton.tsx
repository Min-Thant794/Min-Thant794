import type React from "react";
import { useEffect, useState } from "react";

type ScrollToTopProps = {
    targetRef: React.RefObject<HTMLElement | null>;
    children: React.ReactNode;
    className?: string;
    offset?: number;
    showAfter?: number;
}

const ScrollToTopButton = ({ targetRef, children, className, offset = 0, showAfter = 200}: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > showAfter)
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [showAfter])
    
    const handleClick = () => {
        if (!targetRef.current) return;

        const y = targetRef.current.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    }

    if (!isVisible) return null;
    
    return (
        <button
        type="button" 
        onClick={handleClick} 
        className={`${className}
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}>
            {children}
        </button>
    )
}

export default ScrollToTopButton;