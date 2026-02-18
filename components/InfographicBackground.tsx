
import React from 'react';
import { motion } from 'framer-motion';

const InfographicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
      {/* Dynamic Grid System */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }} 
      />

      {/* Floating Lead Funnel Visualization (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] blur-sm"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500 fill-current">
          <path d="M20,20 L180,20 L140,80 L60,80 Z" className="opacity-40" />
          <path d="M65,85 L135,85 L120,130 L80,130 Z" className="opacity-60" />
          <path d="M85,135 L115,135 L110,180 L90,180 Z" className="opacity-100" />
        </svg>
      </motion.div>

      {/* Animated Data Streams */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <motion.path
          d="M -100 300 C 200 100 500 500 800 300 S 1200 100 1600 400"
          fill="none"
          stroke="url(#amber-glow)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="amber-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing ROI Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%` 
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          <div className="w-3 h-3 bg-amber-500 rounded-full blur-[2px]" />
          <div className="absolute inset-0 w-full h-full bg-amber-500 rounded-full animate-ping opacity-20" />
        </motion.div>
      ))}

      {/* Live Data Tickers */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-12 opacity-20 hidden lg:flex">
        {[
          { label: 'CONV_RATE', val: '4.8%' },
          { label: 'CPC_AVG', val: '$0.12' },
          { label: 'LEAD_SCR', val: '94/100' },
          { label: 'SYS_UP', val: '99.9%' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col border-l-2 border-amber-500/40 pl-4"
          >
            <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em]">{item.label}</span>
            <span className="text-xl font-bold text-amber-500/80 tracking-tighter">{item.val}</span>
          </motion.div>
        ))}
      </div>

      {/* Abstract Growth Bars (Top Left) */}
      <div className="absolute top-10 left-10 flex gap-1 opacity-20">
        {[20, 45, 30, 60, 40, 80, 50, 95].map((h, i) => (
          <motion.div
            key={i}
            className="w-2 bg-amber-500 rounded-t-sm self-end"
            initial={{ height: 0 }}
            animate={{ height: h }}
            transition={{ delay: i * 0.1, duration: 1.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Peripheral Scan Line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-20 w-full"
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default InfographicBackground;
