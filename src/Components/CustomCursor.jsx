import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring animation for cursor
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorX = useSpring(mousePosition.x - 8, springConfig);
  const cursorY = useSpring(mousePosition.y - 8, springConfig);

  const trailSpringConfig = { stiffness: 150, damping: 15 };
  const trailX = useSpring(mousePosition.x - 20, trailSpringConfig);
  const trailY = useSpring(mousePosition.y - 20, trailSpringConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x - 8);
    cursorY.set(mousePosition.y - 8);
    trailX.set(mousePosition.x - 20);
    trailY.set(mousePosition.y - 20);
  }, [mousePosition, cursorX, cursorY, trailX, trailY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-4 h-4 bg-accent rounded-full"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
            borderColor: isHovering ? "#ff6b35" : "rgba(255,107,53,0.5)",
            backgroundColor: isHovering ? "rgba(255,107,53,0.1)" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>

      {/* Particle trail effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: useSpring(mousePosition.x - 4, { stiffness: 100 - i * 20, damping: 15 }),
            y: useSpring(mousePosition.y - 4, { stiffness: 100 - i * 20, damping: 15 }),
          }}
        >
          <motion.div
            className="w-2 h-2 bg-accent/30 rounded-full"
            style={{ opacity: 0.3 - i * 0.1 }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;