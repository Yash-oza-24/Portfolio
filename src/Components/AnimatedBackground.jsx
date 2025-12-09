// src/Components/AnimatedBackground.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating shapes
    const newShapes = [];
    for (let i = 0; i < 8; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 40,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
      });
    }
    setShapes(newShapes);

    // Generate small particles
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient - Warm Dark Theme */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255, 107, 53, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30, 20, 15, 0.8) 0%, transparent 70%),
            linear-gradient(180deg, 
              #0d0a08 0%, 
              #12100d 25%, 
              #151210 50%, 
              #12100d 75%, 
              #0d0a08 100%
            )
          `,
        }}
      />

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-[0.03]">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#ff6b35"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating 3D Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            rotate: shape.rotation 
          }}
          animate={{
            opacity: [0, 0.08, 0.04, 0.08, 0],
            scale: [0.5, 1, 1.1, 1, 0.5],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-2xl"
            style={{
              border: "1px solid rgba(255, 107, 53, 0.12)",
              background: `linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, transparent 60%)`,
              boxShadow: "0 0 40px rgba(255, 107, 53, 0.05)",
              backdropFilter: "blur(1px)",
            }}
          />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: "rgba(255, 107, 53, 0.4)",
            boxShadow: "0 0 6px rgba(255, 107, 53, 0.3)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Horizontal Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 107, 53, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 107, 53, 0.5)" />
            <stop offset="70%" stopColor="rgba(255, 107, 53, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 107, 53, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Animated scanning lines */}
        {[15, 35, 55, 75, 90].map((position, index) => (
          <motion.line
            key={index}
            x1="0%"
            y1={`${position}%`}
            x2="100%"
            y2={`${position}%`}
            stroke={index % 2 === 0 ? "url(#lineGradient1)" : "url(#lineGradient2)"}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 6 + index * 1.5,
              delay: index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Vertical accent lines */}
      <svg className="absolute inset-0 w-full h-full opacity-50">
        <defs>
          <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 107, 53, 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <motion.line
          x1="20%"
          y1="0%"
          x2="20%"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="80%"
          y1="0%"
          x2="80%"
          y2="100%"
          stroke="url(#verticalGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Central Gradient Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.04) 0%, rgba(255, 107, 53, 0.02) 30%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary floating orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom left orb */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          delay: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Corner Decorations - Top Right */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-30">
        <motion.div
          className="absolute top-16 right-16 w-32 h-32 border border-accent/20 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-24 right-24 w-20 h-20 border border-white/5 rounded-xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-12 right-12 w-8 h-8 bg-accent/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Corner Decorations - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30">
        <motion.div
          className="absolute bottom-16 left-16 w-32 h-32 border border-accent/20 rounded-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-24 left-24 w-20 h-20 border border-white/5 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-12 left-12 w-6 h-6 bg-accent/10 rounded-full"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Accent glow spots */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(10, 8, 6, 0.4) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;