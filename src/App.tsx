/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Map, PenTool, Info, ChevronRight, ExternalLink, Globe, BookOpen, Navigation, Send, RefreshCw, ArrowRight, User } from 'lucide-react';

const MAP_URL = "https://www.google.com/maps/d/u/0/viewer?hl=ja&mid=1rt8koDXyXdBTsHqdzwLsGO20lYpxPp4&ll=35.63948798788209%2C139.79131735871144&z=11";
const FORM_URL = "https://sketch-submission-form.vercel.app/";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] font-sans selection:bg-[#e5e1da]">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfbf9]/80 backdrop-blur-md border-b border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1a1a] flex items-center justify-center rounded-sm">
              <span className="text-white font-pop font-black text-xl">A</span>
            </div>
            <span className="font-pop text-lg md:text-xl tracking-tight font-bold">Architecture Sketch Map</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center py-32 overflow-hidden border-b border-[#1a1a1a]/10">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
              alt="Architectural background" 
              className="w-full h-full object-cover opacity-10 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfbf9]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.2em] mb-6">
                Project Portal
              </span>
              <h1 className="text-2xl md:text-7xl font-pop font-black leading-tight mb-8 tracking-tight">
                建築スケッチマップ
              </h1>
              <p className="text-sm md:text-2xl font-pop font-medium text-[#1a1a1a]/70 leading-relaxed mb-12 max-w-2xl">
                建築スケッチを地図上にプロット。<br />
                スケッチの交流や建築巡りのヒントを蓄積するマップです。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Map Card */}
                <motion.a 
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10 }}
                  className="group relative bg-[#fcfbf9] border border-[#1a1a1a]/10 p-8 rounded-2xl overflow-hidden block"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Map className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#1a1a1a] text-white rounded-lg flex items-center justify-center mb-6">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-pop font-bold mb-3">スケッチマップを見る</h3>
                    <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-6 max-w-xs">
                      Googleマイマップ上に集約された、各地の建築スケッチを閲覧できます。
                    </p>
                    <div className="inline-flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest border-b-2 border-[#1a1a1a] pb-1 group-hover:gap-4 transition-all">
                      Google Mapsを開く <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </motion.a>

                {/* Form Card */}
                <motion.a 
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10 }}
                  className="group relative bg-[#1a1a1a] text-white p-8 rounded-2xl overflow-hidden block"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <PenTool className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-white text-[#1a1a1a] rounded-lg flex items-center justify-center mb-6">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-pop font-bold mb-3">スケッチを投稿する</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                      あなたの描いた建築スケッチをマップに追加しましょう。
                    </p>
                    <div className="inline-flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest border-b-2 border-white pb-1 group-hover:gap-4 transition-all">
                      投稿フォームへ <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Decorative Grid */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full border-l border-[#1a1a1a]/5 hidden lg:block">
            <div className="grid grid-cols-4 h-full">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-r border-[#1a1a1a]/5 h-full last:border-r-0" />
              ))}
            </div>
          </div>
        </section>

        {/* Cycle Section */}
        <section className="py-32 bg-white border-b border-[#1a1a1a]/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold mb-4 opacity-40">How it Works</h2>
              <h3 className="text-3xl md:text-4xl font-pop font-black text-[#1a1a1a]">スケッチのサイクル</h3>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Desktop Circular View */}
              <div className="hidden md:block relative aspect-[16/10] lg:aspect-[21/9] mb-32">
                {/* Path Decoration */}
                <div 
                  className="absolute border-2 border-dashed border-[#1a1a1a]/20 rounded-full" 
                  style={{
                    width: '70%',
                    height: '70%',
                    left: '38%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />

                {/* Walking Person */}
                <motion.div
                  className="absolute"
                  style={{
                    width: '70%',
                    height: '70%',
                    left: '38%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className="absolute" 
                    style={{ 
                      top: '0%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)' 
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -3, 0],
                        rotate: [-5, 5, -5]
                      }}
                      transition={{ 
                        duration: 0.6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <User className="w-6 h-6 text-[#1a1a1a]" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Steps */}
                {[
                  { icon: Map, title: "マップを見る", desc: "建築を探す", angle: -90 },
                  { icon: Navigation, title: "建築を見に行く", desc: "足を運ぶ", angle: -18 },
                  { icon: PenTool, title: "スケッチをする", desc: "線を描く", angle: 54 },
                  { icon: Send, title: "フォームに送信", desc: "作品を送る", angle: 126 },
                  { icon: RefreshCw, title: "マップに反映", desc: "プロット完了", angle: 198 }
                ].map((step, i) => {
                  const shouldMoveUp = ["マップを見る", "マップに反映", "建築を見に行く"].includes(step.title);
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute flex flex-col items-center text-center group"
                      style={{
                        left: `${38 + 35 * Math.cos((step.angle * Math.PI) / 180)}%`,
                        top: `${(shouldMoveUp ? 30 : 50) + 35 * Math.sin((step.angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#fcfbf9] border-2 border-[#1a1a1a] rounded-full flex flex-col items-center justify-center mb-4 group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-500 shadow-lg relative z-10">
                      <step.icon className="w-8 h-8 lg:w-12 lg:h-12 mb-2" />
                      <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-tighter opacity-40">Step {i + 1}</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-3 lg:p-5 rounded-2xl border border-[#1a1a1a]/5 shadow-md w-44 lg:w-60">
                      <h4 className="text-sm lg:text-lg font-pop font-bold mb-1">{step.title}</h4>
                      <p className="text-[10px] lg:text-xs text-[#1a1a1a]/50 font-medium">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

              {/* Mobile Stack View */}
              <div className="md:hidden space-y-12">
                {[
                  { icon: Map, title: "マップを見る", desc: "建築を探す" },
                  { icon: Navigation, title: "建築を見に行く", desc: "足を運ぶ" },
                  { icon: PenTool, title: "スケッチをする", desc: "線を描く" },
                  { icon: Send, title: "フォームに送信", desc: "作品を送る" },
                  { icon: RefreshCw, title: "マップに反映", desc: "プロット完了" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#fcfbf9] border-2 border-[#1a1a1a] rounded-full flex flex-col items-center justify-center mb-4 shadow-md">
                      <step.icon className="w-7 h-7 mb-1" />
                      <span className="text-[8px] font-black uppercase tracking-tighter opacity-40">Step {i + 1}</span>
                    </div>
                    <h4 className="text-lg font-pop font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/60">{step.desc}</p>
                    {i < 4 && <div className="w-[2px] h-8 bg-[#1a1a1a]/10 mt-6" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#1a1a1a] text-white px-10 py-5 rounded-2xl font-pop font-bold text-sm flex items-center gap-4 shadow-xl"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 animate-spin-slow" />
                </div>
                <span>このサイクルが、新しい建築巡りのヒントになります。</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-[#fcfbf9]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#1a1a1a]" />
                  Project Concept
                </h2>
                <h3 className="text-xl md:text-5xl font-pop font-bold leading-tight mb-8">
                  「見るだけじゃもったいない。<br />
                  <span>描くだけじゃもったいない。」</span>
                </h3>
                <div className="space-y-6 text-xs md:text-lg text-[#1a1a1a]/70 leading-relaxed font-pop font-medium">
                  <p>
                    建築を見て、自分の手で描き、学生同士で影響しあう──そのプロセスが、次の建築巡りにつながったら。そんな思いからこの企画は生まれました。
                  </p>
                  <p>
                    他大学の建築学生との交流を通して、工学院大学建築学部ではスケッチなど「描く」課題が少ないことに気づきました。だからと言って、自主的にスケッチを習慣化している学生もあまり多くないのではないか、と感じたのです。
                  </p>
                  <p>
                    また、建築巡りを楽しむ中で、ただ訪れるだけでなく、より学びや発見がある体験にしたいという思いが芽生えました。そこで、学生が描くスケッチを世代や時間を超えて共有・蓄積し、次の建築への道しるべとなるマップを作ることにしました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-white/10 pb-16 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-[#1a1a1a] font-pop font-black text-sm">A</span>
                </div>
                <span className="font-pop text-lg tracking-tight font-bold">建築スケッチマップ</span>
              </div>
              <p className="text-white/40 text-sm max-w-xs">
                Architectural Sketch Map Project. <br />
                Capturing the essence of space through lines.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Links</span>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white/60 transition-colors">Google Maps</a>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white/60 transition-colors">Submission Form</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Navigation</span>
                <a href="#about" className="text-sm hover:text-white/60 transition-colors">About</a>
                <a href="#access" className="text-sm hover:text-white/60 transition-colors">Access</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold opacity-30">
            <p>© 2026 Architectural Sketch Map Project.</p>
            <p>Built with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
