
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

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
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-8 right-8 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-amber-500 text-sm tracking-widest uppercase mb-4 block">
                    {project.category} — {project.client}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold mb-8">{project.title}</h2>
                  
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-zinc-500 uppercase text-xs tracking-widest mb-2 font-bold">The Problem</h4>
                      <p className="text-xl text-zinc-300 leading-relaxed">{project.problem}</p>
                    </section>
                    <section>
                      <h4 className="text-zinc-500 uppercase text-xs tracking-widest mb-2 font-bold">Strategic Impact</h4>
                      <p className="text-xl text-zinc-300 leading-relaxed">{project.strategy}</p>
                    </section>
                    <section>
                      <h4 className="text-zinc-500 uppercase text-xs tracking-widest mb-2 font-bold">The Result</h4>
                      <div className="p-6 rounded-lg bg-zinc-900 border border-amber-500/20">
                        <p className="text-2xl text-amber-500 font-bold">{project.results}</p>
                      </div>
                    </section>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-2xl shadow-black"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
