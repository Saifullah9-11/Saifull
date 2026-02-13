
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, Image as ImageIcon, Upload, Play, Loader2, Key } from 'lucide-react';
import { GeminiService } from '../services/gemini';
import { Resolution } from '../types';

const Generators: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'video' | 'image'>('image');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [resolution, setResolution] = useState<Resolution>(Resolution.R1K);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleKeySetup = async () => {
    try {
      if (!(await window.aistudio.hasSelectedApiKey())) {
        await window.aistudio.openSelectKey();
      }
    } catch (e) {
      console.error("Key selection failed", e);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      await handleKeySetup();
      
      if (activeTool === 'image') {
        const url = await GeminiService.generateImage(prompt, resolution);
        setResult(url);
      } else {
        const url = await GeminiService.generateVideo(prompt, uploadedImage || undefined);
        setResult(url);
      }
    } catch (err: any) {
      setError(err.message || "Generation failed. Please ensure you have a valid API key and try again.");
      if (err.message.includes("Requested entity was not found")) {
        await window.aistudio.openSelectKey();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-suite" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">AI Creative <span className="text-amber-500 italic">Suite</span></h2>
            <p className="text-zinc-400 max-w-xl text-lg">
              Explore the bleeding edge of creative technology. Use our integrated Gemini and Veo tools to ideate and visualize concepts in real-time.
            </p>
          </div>
          <div className="flex bg-zinc-900/50 p-1 rounded-full border border-zinc-800">
            <button
              onClick={() => setActiveTool('image')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all ${activeTool === 'image' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-400 hover:text-white'}`}
            >
              <ImageIcon size={18} /> Image Gen
            </button>
            <button
              onClick={() => setActiveTool('video')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all ${activeTool === 'video' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-400 hover:text-white'}`}
            >
              <Video size={18} /> Veo Video
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8 bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800/50">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Concept Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={activeTool === 'image' ? "A futuristic luxury storefront in matte black and gold..." : "A neon hologram of a character walking through a rainy cyberpunk street..."}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-amber-500/50 transition-colors h-32 resize-none"
              />
            </div>

            {activeTool === 'image' && (
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Output Quality</label>
                <div className="flex gap-4">
                  {[Resolution.R1K, Resolution.R2K, Resolution.R4K].map((res) => (
                    <button
                      key={res}
                      onClick={() => setResolution(res)}
                      className={`flex-1 py-3 rounded-xl border transition-all ${resolution === res ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'}`}
                    >
                      {res}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTool === 'video' && (
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Base Image (Optional)</label>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full h-40 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 group-hover:border-amber-500/30 transition-colors bg-zinc-950">
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="Reference" className="w-full h-full object-cover rounded-2xl" />
                    ) : (
                      <>
                        <Upload className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
                        <span className="text-zinc-500 text-sm">Upload reference photo for Veo</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={generate}
              disabled={loading || !prompt}
              className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-500 transition-all disabled:opacity-50 disabled:hover:bg-white"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Generating Masterpiece...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Initiate Generation
                </>
              )}
            </button>
            
            {error && <p className="text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">{error}</p>}
            
            <p className="text-zinc-600 text-[10px] uppercase tracking-tighter text-center">
              *Requires a valid Google AI Studio Paid API Key
            </p>
          </div>

          {/* Result Viewport */}
          <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, #f59e0b 0%, transparent 70%)' }} />
            
            {!result && !loading && (
              <div className="text-center px-8 z-10">
                <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-800">
                  {activeTool === 'image' ? <ImageIcon className="text-zinc-600" /> : <Video className="text-zinc-600" />}
                </div>
                <h4 className="text-xl font-medium mb-2">Awaiting Creation</h4>
                <p className="text-zinc-500">Your generated vision will appear here.</p>
              </div>
            )}

            {loading && (
              <div className="z-10 flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-b-2 border-amber-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="text-amber-500 animate-pulse" />
                  </div>
                </div>
                <div className="text-center animate-pulse">
                  <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Processing Data</p>
                  <p className="text-zinc-400">Synthesizing cinematic assets...</p>
                </div>
              </div>
            )}

            {result && !loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full"
              >
                {activeTool === 'image' ? (
                  <img src={result} alt="Generated" className="w-full h-full object-cover" />
                ) : (
                  <video src={result} controls autoPlay loop className="w-full h-full object-cover" />
                )}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <p className="text-sm font-medium">Generation Success</p>
                  <a href={result} download="saifullah-irfan-ai-asset" className="text-xs bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-amber-500 transition-colors">
                    Download Asset
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generators;
