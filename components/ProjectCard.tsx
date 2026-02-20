
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectBackground = ({ id }: { id: string }) => {
  switch (id) {
    case '1': // B2B Lead Pipeline Engine
      return (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <motion.path 
              d="M100 400 Q400 100 700 400 T1300 400" 
              fill="none" stroke="#f59e0b" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path 
              d="M100 500 Q400 200 700 500 T1300 500" 
              fill="none" stroke="#f59e0b" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <circle cx="200" cy="200" r="50" fill="#f59e0b" className="blur-3xl" />
            <circle cx="600" cy="600" r="80" fill="#f59e0b" className="blur-3xl opacity-50" />
          </svg>
        </div>
      );
    case '2': // Search Authority Growth
      return (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-8 gap-4 w-full h-full p-20">
             {[...Array(32)].map((_, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0 }} animate={{ opacity: Math.random() }} 
                 transition={{ repeat: Infinity, duration: 2 + Math.random() * 2 }}
                 className="h-1 bg-amber-500/20" 
               />
             ))}
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" />
        </div>
      );
    case '3': // Social Ecosystem Launch
      return (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {[...Array(5)].map((_, i) => (
              <motion.circle 
                key={i} cx={20 + i*15} cy={20 + (i%2)*20} r="1" fill="#f59e0b"
                animate={{ scale: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
              />
            ))}
            <line x1="20" y1="20" x2="80" y2="80" stroke="#f59e0b" strokeWidth="0.1" />
            <line x1="20" y1="80" x2="80" y2="20" stroke="#f59e0b" strokeWidth="0.1" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
        </div>
      );
    default:
      return null;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * 15, y: -x * 15 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.div
        className="relative group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(true)}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-colors duration-500 group-hover:border-amber-500/50"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
            <span className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <div className="flex items-center gap-2 text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
              View Case Study <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-6 md:p-12 overflow-y-auto"
          >
            <ProjectBackground id={project.id} />
            
            <div className="max-w-6xl mx-auto relative z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-4 right-4 md:top-8 md:right-8 text-zinc-400 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} className="md:w-8 md:h-8" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-amber-500 text-xs md:text-sm tracking-widest uppercase mb-4 block">
                    {project.category} — {project.client}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8">{project.title}</h2>
                  
                  <div className="space-y-6 md:space-y-8">
                    <section>
                      <h4 className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest mb-2 font-bold">The Problem</h4>
                      <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{project.problem}</p>
                    </section>
                    <section>
                      <h4 className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest mb-2 font-bold">Strategic Impact</h4>
                      <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{project.strategy}</p>
                    </section>
                    <section>
                      <h4 className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest mb-2 font-bold">The Result</h4>
                      <div className="p-4 md:p-6 rounded-lg bg-zinc-900 border border-amber-500/20">
                        <p className="text-xl md:text-2xl text-amber-500 font-bold">{project.results}</p>
                      </div>
                    </section>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-2xl shadow-black relative group"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
