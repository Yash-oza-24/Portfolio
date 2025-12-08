// src/Components/AnimatedBackground.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = ({ variant = "default" }) => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    // Generate random squares for animation
    const generateSquares = () => {
      const newSquares = [];
      for (let i = 0; i < 15; i++) {
        newSquares.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setSquares(newSquares);
    };
    generateSquares();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-[0.03]">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating 3D Squares */}
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="absolute"
          style={{
            left: `${square.x}%`,
            top: `${square.y}%`,
            width: square.size,
            height: square.size,
          }}
          initial={{ opacity: 0, scale: 0, rotateX: 0, rotateY: 0 }}
          animate={{
            opacity: [0, 0.1, 0.05, 0.1, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
            x: [0, 30, -20, 10, 0],
            y: [0, -30, 20, -10, 0],
          }}
          transition={{
            duration: square.duration,
            delay: square.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full border border-accent/20 rounded-lg"
            style={{
              background: `linear-gradient(135deg, rgba(255,107,53,0.05) 0%, transparent 50%)`,
              transformStyle: "preserve-3d",
              boxShadow: "0 0 20px rgba(255,107,53,0.1)",
            }}
          />
        </motion.div>
      ))}

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="0%"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Gradient Orb - Subtle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border border-accent/30 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border border-white/10 rounded-xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 border border-accent/30 rounded-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-20 h-20 border border-white/10 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;