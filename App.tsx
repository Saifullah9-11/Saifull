
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SERVICES, TESTIMONIALS } from './constants';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import Generators from './components/Generators';
import { ChevronDown, ArrowRight, Instagram, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center gap-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              className="h-[1px] bg-amber-500"
            />
            <h1 className="text-3xl font-bold tracking-[0.2em] uppercase italic">Saifullah Irfan</h1>
            <p className="text-zinc-500 text-xs tracking-widest animate-pulse">Establishing Immersive Experience...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold pointer-events-auto cursor-pointer mix-blend-difference"
        >
          S.I.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 items-center pointer-events-auto"
        >
          <a href="#portfolio" className="text-xs uppercase tracking-widest font-bold hover:text-amber-500 transition-colors">Portfolio</a>
          <a href="#ai-suite" className="text-xs uppercase tracking-widest font-bold hover:text-amber-500 transition-colors">AI Suite</a>
          <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-all shadow-lg shadow-white/5">Let's Talk</a>
        </motion.div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 blur-[120px] rounded-full" />
          </div>
          
          <div className="relative z-10 text-center max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-500 text-xs tracking-[0.4em] uppercase font-bold mb-6 block"
            >
              Creative Excellence &bull; Strategic Impact
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold mb-8 leading-[0.9]"
            >
              Hi, I'm <br />
              <span className="italic serif text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-white">Saifullah Irfan</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Architecting high-end digital experiences that define the intersection of strategy and sophistication for luxury brands worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="#portfolio" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
                View Portfolio <ArrowRight size={20} />
              </a>
              <a href="#contact" className="px-10 py-5 border border-zinc-800 hover:border-white transition-colors font-bold uppercase tracking-widest rounded-full flex items-center justify-center">
                Let's Work Together
              </a>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800">
                <img src="https://picsum.photos/seed/portrait/800/1000" alt="Saifullah Irfan" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500 rounded-2xl flex items-center justify-center p-8 rotate-12">
                <p className="text-black font-bold text-lg text-center leading-tight">10+ Years of Excellence</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <span className="text-zinc-500 text-sm tracking-[0.3em] uppercase font-bold block">The Authority</span>
              <h2 className="text-5xl md:text-6xl font-bold italic serif">Redefining the digital <br /> landscape.</h2>
              <p className="text-zinc-400 text-xl leading-relaxed">
                Based at the intersection of creativity and logic, I partner with founders and agencies to deliver measurable impact through intentional design. My approach is rooted in understanding the core business objectives before moving a single pixel.
              </p>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-sm uppercase tracking-widest">Brand Strategy</span>
                  <span className="text-amber-500">98%</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98%' }}
                    viewport={{ once: true }}
                    className="h-full bg-amber-500" 
                  />
                </div>
                
                <div className="flex justify-between items-end">
                  <span className="font-bold text-sm uppercase tracking-widest">UX/UI Engineering</span>
                  <span className="text-amber-500">95%</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    viewport={{ once: true }}
                    className="h-full bg-amber-500" 
                  />
                </div>
              </div>
              
              <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest group">
                Download Resume <Download className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-32 px-6">
          <div className="max-w-6xl mx-auto mb-20">
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-4">Selected Works</span>
            <h2 className="text-6xl md:text-8xl font-bold">Showcase.</h2>
          </div>
          
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* AI GENERATORS */}
        <Generators />

        {/* SERVICES */}
        <section className="py-32 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((s) => (
                <div key={s.id} className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-900 hover:border-amber-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-amber-500 font-bold text-xl italic">{s.id.padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 bg-zinc-900/30 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
             <div className="flex flex-col items-center text-center mb-20">
               <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-6">Social Proof</span>
               <h2 className="text-5xl md:text-7xl font-bold italic serif">Trusted by Visionaries.</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {TESTIMONIALS.map((t) => (
                 <motion.div 
                   key={t.id}
                   whileHover={{ y: -10 }}
                   className="p-12 rounded-[40px] bg-zinc-950 border border-zinc-900 relative"
                 >
                   <p className="text-2xl text-zinc-300 leading-relaxed mb-10 italic">"{t.content}"</p>
                   <div className="flex items-center gap-4">
                     <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full grayscale" />
                     <div>
                       <h4 className="font-bold text-xl">{t.name}</h4>
                       <p className="text-amber-500 text-xs uppercase tracking-widest">{t.role}</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-6xl mx-auto bg-zinc-900 p-12 md:p-24 rounded-[60px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <h2 className="text-[200px] font-bold leading-none select-none">HELLO.</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-6xl font-bold mb-8">Let's build something <span className="text-amber-500">exceptional.</span></h2>
                <p className="text-zinc-400 text-lg mb-12">Currently available for high-tier projects and consultancy. Let's start the conversation.</p>
                
                <div className="space-y-6">
                  <a href="mailto:hello@saifullahirfan.com" className="flex items-center gap-4 text-2xl font-bold hover:text-amber-500 transition-colors">
                    <Mail className="text-amber-500" /> hello@saifullah.me
                  </a>
                  <div className="flex gap-6">
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Instagram size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Linkedin size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 focus:outline-none focus:border-amber-500 transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 focus:outline-none focus:border-amber-500 transition-colors" />
                <textarea placeholder="Your Message" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 h-40 focus:outline-none focus:border-amber-500 transition-colors resize-none" />
                <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-amber-500 transition-all flex items-center justify-center gap-3">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.5em]">&copy; 2024 Saifullah Irfan. Crafted for Excellence.</p>
      </footer>
    </div>
  );
};

export default App;
