
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);

  // Motion values for raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Circle spring: slow and laggy
  const circleSpringConfig = { damping: 40, stiffness: 150 };
  const circleX = useSpring(mouseX, circleSpringConfig);
  const circleY = useSpring(mouseY, circleSpringConfig);

  // Dot spring: fast and responsive (it leads)
  const dotSpringConfig = { damping: 20, stiffness: 800 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      // fix: Convert potential element returns from .closest() to boolean to match state type
      setIsPointer(
        Boolean(
          window.getComputedStyle(target).cursor === 'pointer' || 
          target.tagName.toLowerCase() === 'button' || 
          target.tagName.toLowerCase() === 'a' ||
          target.closest('button') ||
          target.closest('a')
        )
      );
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Lagging Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-amber-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: circleX,
          y: circleY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPointer ? 1.5 : 1,
        }}
      />
      {/* Leading Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPointer ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
