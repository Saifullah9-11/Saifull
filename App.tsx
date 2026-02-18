
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SERVICES, TESTIMONIALS } from './constants';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import Generators from './components/Generators';
import { 
  ChevronDown, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download,
  Target,
  Share2,
  Search,
  ShieldCheck,
  Briefcase,
  CheckCircle2,
  Rocket,
  Users
} from 'lucide-react';

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Lead Generation': return <Target className="text-amber-500" />;
    case 'Social Media Marketing': return <Share2 className="text-amber-500" />;
    case 'SEO & Link Building': return <Search className="text-amber-500" />;
    case 'Quality Assurance (QA)': return <ShieldCheck className="text-amber-500" />;
    case 'Email Writing & Research': return <Mail className="text-amber-500" />;
    case 'Project Management': return <Briefcase className="text-amber-500" />;
    default: return <Target className="text-amber-500" />;
  }
};

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
            <h1 className="text-3xl font-bold tracking-[0.2em] uppercase italic text-amber-500">Saifullah Irfan</h1>
            <p className="text-zinc-500 text-xs tracking-widest animate-pulse uppercase">Building Systems for Growth</p>
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
          <a href="#services" className="text-xs uppercase tracking-widest font-bold hover:text-amber-500 transition-colors">Services</a>
          <a href="#about" className="text-xs uppercase tracking-widest font-bold hover:text-amber-500 transition-colors">About</a>
          <a href="#contact" className="bg-amber-500 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-amber-500/20">Let's Talk</a>
        </motion.div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-800/40 blur-[120px] rounded-full" />
          </div>
          
          <div className="relative z-10 text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <span className="h-[1px] w-8 bg-amber-500"></span>
              <span className="text-amber-500 text-xs tracking-[0.4em] uppercase font-bold">
                Lead Generation &bull; Social Growth &bull; SEO
              </span>
              <span className="h-[1px] w-8 bg-amber-500"></span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              I Build Lead Systems <br />
              <span className="italic serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white">That Actually Convert.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Full-stack digital marketing and business development focused on generating qualified leads, strengthening brand presence, and driving measurable business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="#contact" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20">
                Let’s Build Your Growth Plan <ArrowRight size={20} />
              </a>
              <a href="#services" className="px-10 py-5 border border-zinc-800 hover:border-amber-500 transition-colors font-bold uppercase tracking-widest rounded-full flex items-center justify-center">
                View My Services
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

        {/* POSITIONING BAR */}
        <section className="py-8 bg-amber-500 text-black font-bold uppercase tracking-widest overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex whitespace-nowrap gap-12 text-xl italic"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                Lead Generation &bull; Social Growth &bull; SEO Execution &bull; Project Management
              </span>
            ))}
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800">
                <img src="https://picsum.photos/seed/marketing/800/1000" alt="Saifullah Irfan" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
                <p className="text-3xl font-bold text-amber-500 mb-1">ROI Focused</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Growth Priority</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block">About Me</span>
              <h2 className="text-4xl md:text-6xl font-bold">Systems that drive <span className="italic text-amber-500">measurable results.</span></h2>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  I’m a full-stack digital marketing and business development professional focused on building structured growth systems that drive measurable results.
                </p>
                <p>
                  I operate with one priority: measurable growth. Lead generation, visibility, and revenue systems work together as one engine. Decisions are based on data, not assumptions. Every outreach campaign and SEO effort is aligned with clear business objectives.
                </p>
                <p>
                  I build cold and warm lead pipelines across multiple platforms, manage social media growth to increase engagement, and strengthen search visibility through SEO. I also manage projects end-to-end, organizing workflows to keep execution efficient and results-driven.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500" /> Performance Data</h4>
                  <p className="text-sm text-zinc-500">Every decision backed by metrics.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={18} className="text-amber-500" /> Pipeline Control</h4>
                  <p className="text-sm text-zinc-500">Predictable flow of prospects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-32 px-6 bg-zinc-900/20">
          <div className="max-w-6xl mx-auto mb-20 text-center">
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-4">Core Expertise</span>
            <h2 className="text-5xl md:text-7xl font-bold">Growth Services.</h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all group flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ServiceIcon name={s.title} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>
                <div className="h-[1px] w-full bg-zinc-800 group-hover:bg-amber-500/30 transition-colors"></div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW I WORK SECTION */}
        <section className="py-32 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-4">The Methodology</span>
              <h2 className="text-5xl md:text-7xl font-bold italic serif">How I Work.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Understand the Business', desc: 'I define your target audience, goals, and current bottlenecks.' },
                { step: '02', title: 'Build the System', desc: 'Lead generation structure, outreach plan, SEO adjustments, and social roadmap.' },
                { step: '03', title: 'Execute & Monitor', desc: 'Daily execution with tracking, testing, and continuous optimization.' },
                { step: '04', title: 'Refine & Scale', desc: 'Improve what works. Remove what doesn’t. Scale predictable results.' }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <span className="text-8xl font-bold text-zinc-900 absolute -top-10 -left-4 z-0 group-hover:text-amber-500/10 transition-colors">{item.step}</span>
                  <div className="relative z-10 pt-8">
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-amber-500 transition-colors">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO I WORK WITH SECTION */}
        <section className="py-32 px-6 bg-amber-500 text-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-black/60 text-sm tracking-[0.3em] uppercase font-bold block mb-6">Target Partners</span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Who I help grow.</h2>
                <p className="text-black/80 text-xl leading-relaxed mb-10 font-medium">
                  I specialize in working with businesses that are ready for a structured, aggressive approach to market expansion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 font-bold">
                    <Rocket size={18} /> Scale-up Focused
                  </div>
                  <div className="bg-black/10 text-black border border-black/20 px-6 py-3 rounded-xl flex items-center gap-3 font-bold">
                    <Users size={18} /> Partner Oriented
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  { title: 'B2B Service Providers', desc: 'Agencies and consultants looking for qualified appointments.' },
                  { title: 'Startups', desc: 'Early-stage ventures building their first growth traction.' },
                  { title: 'Agencies', desc: 'Agencies that need high-end execution and project support.' },
                  { title: 'Structured Growth', desc: 'Any business that wants to move from random to predictable.' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm font-medium text-black/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <section id="portfolio" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto mb-20">
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-4">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold">Execution Gallery.</h2>
          </div>
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* AI GENERATORS (Retained for Content Marketing Value) */}
        <Generators />

        {/* TESTIMONIALS */}
        <section className="py-32 bg-zinc-900/30 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
             <div className="flex flex-col items-center text-center mb-20">
               <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-bold block mb-6">Testimonials</span>
               <h2 className="text-4xl md:text-6xl font-bold italic serif">What clients say.</h2>
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
              <h2 className="text-[200px] font-bold leading-none select-none">LEADS.</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-5xl font-bold mb-8">Growth doesn’t <br /><span className="text-amber-500 italic">happen randomly.</span></h2>
                <p className="text-zinc-400 text-lg mb-12">
                  It’s built with structure, consistency, and execution. If you’re ready to generate qualified leads and build sustainable marketing systems, let’s talk.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:hello@saifullah.me" className="flex items-center gap-4 text-2xl font-bold hover:text-amber-500 transition-colors">
                    <Mail className="text-amber-500" /> hello@saifullah.me
                  </a>
                  <div className="flex gap-6 pt-4">
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Instagram size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Linkedin size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Full Name" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 focus:outline-none focus:border-amber-500 transition-colors" />
                      <input type="email" placeholder="Email Address" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <textarea placeholder="Tell me about your business goals..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 h-40 focus:outline-none focus:border-amber-500 transition-colors resize-none" />
                    <button className="w-full py-5 bg-amber-500 text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/10">
                      Start Growing <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.5em]">&copy; 2024 Saifullah Irfan. Execution Focused Growth.</p>
      </footer>
    </div>
  );
};

export default App;
