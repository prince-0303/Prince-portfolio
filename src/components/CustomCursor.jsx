import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Add class to body to handle cursor on elements
        document.body.classList.add('custom-cursor-active');

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: 1,
            backgroundColor: "rgba(0, 243, 255, 0.4)",
            border: "1px solid rgba(0, 243, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 243, 255, 0.4)"
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
            backgroundColor: "transparent",
            border: "2px solid rgba(255, 0, 170, 0.8)",
            boxShadow: "0 0 20px rgba(255, 0, 170, 0.4)",
            width: "48px",
            height: "48px"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
    );
};

export default CustomCursor;
