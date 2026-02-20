
import React from 'react';
import { motion } from 'framer-motion';

const InfographicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
      {/* Dynamic Grid System - More subtle and layered */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }} 
      />
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #666 1px, transparent 1px), linear-gradient(to bottom, #666 1px, transparent 1px)`, 
          backgroundSize: '20px 20px' 
        }} 
      />

      {/* Large Ambient Glows - Spread across the page */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-600/5 blur-[150px] rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-amber-900/5 blur-[150px] rounded-full" />

      {/* Floating Lead Funnel Visualization (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] blur-[1px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500 fill-current">
          <path d="M20,20 L180,20 L140,80 L60,80 Z" className="opacity-40" />
          <path d="M65,85 L135,85 L120,130 L80,130 Z" className="opacity-60" />
          <path d="M85,135 L115,135 L110,180 L90,180 Z" className="opacity-100" />
        </svg>
      </motion.div>

      {/* Animated Data Streams - Multiple paths for complexity */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M -100 300 C 200 100 500 500 800 300 S 1200 100 1600 400"
          fill="none"
          stroke="url(#amber-glow-1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M -100 600 C 300 800 600 400 900 600 S 1300 800 1700 500"
          fill="none"
          stroke="url(#amber-glow-2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <defs>
          <linearGradient id="amber-glow-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="amber-glow-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing ROI Nodes - More nodes, better spread */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%` 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        >
          <div className="w-2 h-2 bg-amber-500/50 rounded-full blur-[1px]" />
        </motion.div>
      ))}

      {/* Live Data Tickers - Distributed vertically */}
      <div className="absolute top-0 bottom-0 left-4 flex flex-col justify-around opacity-10 hidden lg:flex py-20">
        {[
          { label: 'CONV_RATE', val: '4.8%' },
          { label: 'CPC_AVG', val: '$0.12' },
          { label: 'LEAD_SCR', val: '94/100' },
          { label: 'SYS_UP', val: '99.9%' },
          { label: 'ROI_INDX', val: '3.2x' },
          { label: 'LTV_EST', val: '$1.4k' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col border-l border-amber-500/20 pl-4"
          >
            <span className="text-[8px] font-mono text-zinc-600 tracking-[0.2em]">{item.label}</span>
            <span className="text-sm font-bold text-amber-500/60 tracking-tighter">{item.val}</span>
          </motion.div>
        ))}
      </div>

      {/* Peripheral Scan Line - Slower, more elegant */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent h-40 w-full"
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default InfographicBackground;
