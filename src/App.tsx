/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, Users, Target, Calendar, Award, Star, 
  BarChart3, MapPin, Video, UserCheck, Briefcase,
  ChevronRight, ExternalLink, Image as ImageIcon,
  X, Menu, Clock, Flame, Zap
} from 'lucide-react';
import { TPL_DATA } from './data';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rules', href: '#rules' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Teams', href: '#teams' },
    { name: 'Wall of Fame', href: '#wall-of-fame' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-phoenix-dark/80 backdrop-blur-xl border-b border-orange-500/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="https://i.postimg.cc/85PZKq7Y/TPL-Season-4-No-Background.png"
            alt="TPL Season 4"
            className="w-12 h-12 object-contain drop-shadow-lg"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-black tracking-tighter text-white italic uppercase group-hover:text-phoenix-gold transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              THORE PREMIER LEAGUE
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400/70 italic">
              Season 4 · Phoenix Rises
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-black uppercase tracking-widest text-xs text-white/70 hover:text-phoenix-gold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" style={{ background: 'linear-gradient(90deg, #ff4500, #ff8c00)' }}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 glass-card rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[60] md:hidden bg-phoenix-dark/95 backdrop-blur-2xl p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 glass-card rounded-full text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-phoenix-gold transition-colors italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── HERO — full-screen video background ─────────────────────────────────────
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}tpl.webm`} type="video/webm" />
          <source src={`${import.meta.env.BASE_URL}tpl-video.mp4`} type="video/mp4" />
        </video>
        {/* Bottom-heavy dark overlay so text at bottom stays readable */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(5,2,0,0.97) 0%, rgba(5,2,0,0.6) 35%, rgba(5,2,0,0.2) 65%, rgba(5,2,0,0.05) 100%)'
        }} />
        {/* Side vignette */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(5,2,0,0.55) 0%, transparent 35%, transparent 65%, rgba(5,2,0,0.4) 100%)'
        }} />
      </div>

      {/* Ember particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? '3px' : '2px',
              height: i % 3 === 0 ? '3px' : '2px',
              left: `${5 + i * 7}%`,
              bottom: `${10 + (i % 5) * 12}%`,
              background: i % 3 === 0 ? '#ff4500' : i % 3 === 1 ? '#ff8c00' : '#ffd700',
              boxShadow: `0 0 8px ${i % 3 === 0 ? '#ff4500' : i % 3 === 1 ? '#ff8c00' : '#ffd700'}`,
            }}
            animate={{ y: [0, -120, -240], opacity: [0, 1, 0], scale: [0.5, 1.5, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* CONTENT — anchored to bottom-left */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-orange-500/30 px-6 py-2.5 rounded-full text-phoenix-gold text-sm font-black italic tracking-widest mb-8"
            style={{ boxShadow: '0 0 30px rgba(255,140,0,0.15)' }}
          >
            <Flame className="w-5 h-5 fill-orange-400 text-orange-400 animate-pulse" />
            <span>SEASON 4: THE PHOENIX RISES</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-7xl md:text-[9rem] font-black text-white leading-[0.82] mb-8 italic"
          >
            THORE <br />
            <span className="phoenix-text-gradient">PREMIER</span> <br />
            <span className="relative inline-block">
              LEAGUE
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-3 left-0 h-3 skew-x-[-20deg] -z-10"
                style={{ background: 'linear-gradient(90deg, #ff4500, #ff8c00)' }}
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-white/70 max-w-lg mb-12 leading-relaxed font-medium"
          >
            From the ashes, greatness is reborn. Season 4 — The Phoenix rises. Will you burn bright or be consumed?
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href="#leaderboard"
              className="text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 italic uppercase"
              style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)', boxShadow: '0 0 40px rgba(255,80,0,0.4)' }}
            >
              ENTER ARENA <ChevronRight className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="#rules"
              className="bg-black/30 hover:bg-black/50 backdrop-blur-xl border border-orange-500/30 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 italic uppercase"
            >
              THE RULES
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-20 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, #050200)' }} />
    </section>
  );
};

// ─── SHARED HEADING ───────────────────────────────────────────────────────────
const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="text-center mb-24 relative">
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: '100px' }}
      viewport={{ once: true }}
      className="h-1.5 mx-auto mb-8 skew-x-[-20deg]"
      style={{ background: 'linear-gradient(90deg, #ff4500, #ff8c00)' }}
    />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-sm font-black uppercase tracking-[0.5em] mb-4 italic ${light ? 'text-phoenix-gold' : 'text-orange-400'}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-black italic tracking-tighter text-white"
    >
      {title}
    </motion.h2>
  </div>
);

// ─── ABOUT ────────────────────────────────────────────────────────────────────
const About = () => {
  const features = [
    { title: 'Individual Glory', desc: 'Compete as a lone wolf to top the charts and earn massive monetary incentives.', icon: Star },
    { title: 'Team Rivalry', desc: 'Join forces with your squad to dominate team rankings and claim collective pride.', icon: Users },
    { title: 'Real Metrics', desc: 'Performance is tracked through actual business impact, from bookings to site visits.', icon: BarChart3 },
    { title: 'Public Recognition', desc: 'Winners are celebrated across the organization with trophies and hall of fame status.', icon: Trophy },
  ];

  return (
    <section id="about" className="py-32 bg-phoenix-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-10"
           style={{ background: 'radial-gradient(circle, #ff4500, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-black uppercase tracking-[0.4em] mb-6 italic text-orange-400">The Culture of Rising</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] italic">
              NOT JUST A GAME. <br /><span className="text-white/20">A REBIRTH.</span>
            </h2>
            <div className="space-y-8 text-xl text-white/60 leading-relaxed font-medium">
              <p>TPL (Thore Premier League) is the ultimate proving ground. Inspired by the phoenix — the mythical bird that burns and rises anew — Season 4 is about transformation and dominance.</p>
              <p>True champions aren't born. They're forged in fire. With real-time tracking, massive rewards, and a culture of relentless excellence, the Phoenix era begins now.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="p-8 glass-card rounded-3xl border-orange-500/20">
                <h4 className="font-black text-3xl mb-2 italic" style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>IGNITE</h4>
                <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Fueling the fire</p>
              </div>
              <div className="p-8 glass-card rounded-3xl border-yellow-500/20">
                <h4 className="font-black text-3xl text-phoenix-gold mb-2 italic">ASCEND</h4>
                <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Rise from ashes</p>
              </div>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass-card glass-card-hover group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all"
                     style={{ background: 'radial-gradient(circle, rgba(255,80,0,0.15), transparent)' }}></div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform"
                     style={{ boxShadow: '0 0 20px rgba(255,80,0,0.1)' }}>
                  <f.icon className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 italic uppercase">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── SCORING / RULES ──────────────────────────────────────────────────────────
const Rules = () => {
  const scoringRows = [
    { criteria: 'Revenue Based Points', points: '5 pts per ₹50k revenue', highlight: false, tier: 'revenue' },
    { criteria: 'Booking (Focused Project)', points: '150 pts', highlight: true, tier: 'gold' },
    { criteria: 'Booking (Non-Focused Project)', points: '100 pts', highlight: true, tier: 'gold' },
    { criteria: 'Site Visit (Off Day)', points: '15 pts', highlight: false, tier: 'silver' },
    { criteria: 'Video Conference (Off Day)', points: '10 pts', highlight: false, tier: 'silver' },
    { criteria: 'Face to Face (Off Day)', points: '10 pts', highlight: false, tier: 'silver' },
    { criteria: 'Token / EOI', points: '10 pts', highlight: false, tier: 'silver' },
    { criteria: 'No Latemark (Monthly)', points: '10 pts', highlight: false, tier: 'silver' },
    { criteria: 'Site Visit', points: '10 pts', highlight: false, tier: 'bronze' },
    { criteria: 'Video Conference', points: '5 pts', highlight: false, tier: 'bronze' },
    { criteria: 'Face to Face', points: '5 pts', highlight: false, tier: 'bronze' },
    { criteria: 'No Backlog', points: '2 pts / day', highlight: false, tier: 'daily' },
    { criteria: 'DSR 2 Times / Day', points: '1 pt / day', highlight: false, tier: 'daily' },
  ];

  const tierColor: Record<string, string> = {
    revenue: '#ffd700',
    gold: '#ff4500',
    silver: '#ff8c00',
    bronze: '#ff6b35',
    daily: '#ffffff60',
  };

  return (
    <section id="rules" className="py-32 bg-phoenix-deeper relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,80,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,0,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #020100, transparent, #020100)' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Scoring System" subtitle="The Rules" light />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] overflow-hidden border-orange-500/10"
          style={{ boxShadow: '0 0 80px rgba(255,80,0,0.07)' }}
        >
          {/* Table header */}
          <div className="px-8 py-6 flex items-center justify-between border-b border-white/5"
               style={{ background: 'linear-gradient(135deg, rgba(255,80,0,0.15), rgba(255,140,0,0.08))' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)' }}>
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 italic">Season 4 · Phoenix</p>
                <p className="text-lg font-black text-white italic uppercase">Point Allocation Table</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest italic"
                 style={{ background: 'rgba(255,80,0,0.08)' }}>
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Active Season
            </div>
          </div>

          {/* Column labels */}
          <div className="grid grid-cols-2 px-8 py-3 border-b border-white/5">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">Criteria</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic text-right">Points</p>
          </div>

          {/* Rows */}
          {scoringRows.map((row, i) => (
            <motion.div
              key={row.criteria}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-2 px-8 py-5 border-b border-white/[0.04] group transition-all duration-300 ${
                row.highlight ? 'hover:bg-orange-500/10' : 'hover:bg-white/[0.03]'
              }`}
              style={row.highlight ? { background: 'rgba(255,80,0,0.07)' } : {}}
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0"
                     style={{ background: tierColor[row.tier], opacity: row.highlight ? 1 : 0.5 }} />
                <span className={`font-bold text-sm tracking-wide ${row.highlight ? 'text-white' : 'text-white/65'} group-hover:text-white transition-colors`}>
                  {row.criteria}
                </span>
              </div>
              <div className="flex items-center justify-end">
                <span
                  className="font-black text-sm italic px-3 py-1 rounded-lg"
                  style={row.highlight
                    ? { background: 'linear-gradient(135deg, #ff4500, #ff8c00)', color: '#fff', boxShadow: '0 0 15px rgba(255,80,0,0.3)' }
                    : { color: tierColor[row.tier] }
                  }
                >
                  {row.points}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Footer note */}
          <div className="px-8 py-6 flex items-start gap-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <Flame className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <p className="text-xs text-white/30 font-medium leading-relaxed italic">
              Points are tallied on the 10th, 20th, and 30th of each month. Off-day activities carry bonus points to reward exceptional hustle. Revenue points are calculated on verified closed revenue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── METRICS ──────────────────────────────────────────────────────────────────
const Metrics = () => {
  return (
    <section id="metrics" className="py-32 bg-phoenix-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,80,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,0,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050200, transparent, #050200)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="League Stats" subtitle="The Scoreboard" light />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TPL_DATA.metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className="p-10 rounded-[2rem] glass-card border-white/5 text-center group relative overflow-hidden">
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: 'radial-gradient(circle at center, rgba(255,80,0,0.05), transparent)' }}></div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-all"
                   style={{ background: 'rgba(255,80,0,0.1)' }}>
                <m.icon className="w-8 h-8" />
              </div>
              <p className="text-4xl font-black text-white mb-2 italic tracking-tighter">{m.value}</p>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── LEADERBOARD ──────────────────────────────────────────────────────────────
const Leaderboard = () => {
  const [nextDate, setNextDate] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const activeDays = [10, 20, 30];
    setIsActive(activeDays.includes(day));
    const next = day < 10 ? 10 : day < 20 ? 20 : day < 30 ? 30 : 10;
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month = now.getMonth();
    if (day >= 30) month = (month + 1) % 12;
    setNextDate(`${next}th ${monthNames[month]}`);
  }, []);

  return (
    <section id="leaderboard" className="py-32 bg-phoenix-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Live Rankings" subtitle="The Arena" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-16 text-center relative overflow-hidden border-orange-500/10">
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #ff4500, #ff8c00, transparent)' }}></div>
          <Trophy className="absolute -bottom-20 -right-20 w-96 h-96 text-orange-500/5 -rotate-12 pointer-events-none" />
          {isActive ? (
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10"
                   style={{ background: 'rgba(255,80,0,0.1)', boxShadow: '0 0 50px rgba(255,80,0,0.2)' }}>
                <Flame className="w-12 h-12 fill-orange-400 text-orange-400 animate-pulse" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 italic uppercase">ARENA IS ACTIVE!</h3>
              <p className="text-white/50 mb-12 max-w-md mx-auto text-lg font-medium">The numbers are moving. The rankings are shifting. Witness the battle in real-time.</p>
              <button className="text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center gap-4 mx-auto transition-all transform hover:scale-105 italic uppercase"
                      style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)', boxShadow: '0 0 40px rgba(255,80,0,0.3)' }}>
                ACCESS LIVE FEED <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-white/20 mx-auto mb-10">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 italic uppercase">ARENA IS COOLING DOWN</h3>
              <p className="text-white/40 mb-10 max-w-md mx-auto text-lg font-medium">The warriors are resting. The data is being verified. The next battle begins soon.</p>
              <div className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-2xl border border-orange-500/20">
                <Calendar className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-black uppercase tracking-widest italic">NEXT UPDATE: {nextDate}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ─── TEAM MODAL ───────────────────────────────────────────────────────────────
const TeamModal = ({ team, onClose }: { team: any; onClose: () => void }) => {
  if (!team) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl"
      style={{ background: 'rgba(5,2,0,0.92)' }} onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="glass-card rounded-[3rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden border-orange-500/10"
        onClick={e => e.stopPropagation()}>
        <div className="relative h-56">
          <img src={team.image} alt={team.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050200 0%, rgba(5,2,0,0.4) 60%, transparent 100%)' }}></div>
          <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 glass-card hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20">
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-8 left-8">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="text-white px-4 py-1 rounded-lg font-black italic skew-x-[-15deg] mb-3 inline-block text-sm"
              style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)' }}>
              TEAM PROFILE
            </motion.div>
            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{team.name}</h3>
            <p className="text-orange-300 font-bold">Led by {team.leader}</p>
          </div>
        </div>
        <div className="p-8 grid md:grid-cols-2 gap-8" style={{ background: 'rgba(5,2,0,0.5)' }}>
          <div>
            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-6 italic">Performance Matrix</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 glass-card rounded-2xl border-white/5">
                <p className="text-3xl font-black text-white italic">{team.seasons}</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Seasons</p>
              </div>
              <div className="p-5 glass-card rounded-2xl border-orange-500/20">
                <p className="text-3xl font-black italic" style={{ color: '#ff8c00' }}>{team.wins}</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Titles</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-4 italic">Season History</h4>
              <div className="flex flex-wrap gap-3">
                {team.rankings.map((rank: string, i: number) => (
                  <div key={i} className="px-4 py-2 glass-card rounded-xl border-white/10 text-white font-black italic text-sm">
                    S{i+1}: <span style={{ color: '#ff8c00' }}>{rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-4 italic">Elite Players</h4>
              <div className="grid gap-3">
                {team.notablePlayers.map((player: string) => (
                  <div key={player} className="flex items-center gap-3 p-3 glass-card rounded-2xl border-white/5 hover:border-orange-500/30 transition-colors group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm group-hover:text-white transition-all"
                         style={{ background: 'rgba(255,80,0,0.1)', color: '#ff8c00' }}>
                      {player.charAt(0)}
                    </div>
                    <span className="font-black text-white italic uppercase tracking-tight text-sm">{player}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-[2rem] text-white relative overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)' }}>
              <Flame className="absolute -bottom-4 -right-4 w-20 h-20 text-white/10 rotate-12" />
              <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Team Creed</p>
              <p className="text-base font-black italic leading-tight">"WE DON'T COMPETE WITH OTHERS. WE COMPETE WITH OUR POTENTIAL."</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── TEAMS ────────────────────────────────────────────────────────────────────
const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  return (
    <section id="teams" className="py-32 bg-phoenix-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Factions" subtitle="Select Your Squad" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {TPL_DATA.teams.map((team, i) => (
            <motion.div key={team.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -15, scale: 1.02 }} onClick={() => setSelectedTeam(team)} className="group cursor-pointer relative">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/5 group-hover:border-orange-500/50 transition-all duration-500">
                <img src={team.image} alt={team.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 opacity-90" style={{ background: 'linear-gradient(to top, #050200, transparent 60%)' }}></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-black text-xl italic uppercase leading-[0.9] mb-2">{team.name.replace('Team ', '')}</p>
                  <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #ff4500, #ff8c00)' }}></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-3">Analyze Stats</p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <ChevronRight className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedTeam && <TeamModal team={selectedTeam} onClose={() => setSelectedTeam(null)} />}
      </AnimatePresence>
    </section>
  );
};

// ─── WALL OF FAME ─────────────────────────────────────────────────────────────
const WallOfFame = () => (
  <section id="wall-of-fame" className="py-32 bg-phoenix-deeper relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading title="Hall of Legends" subtitle="The Immortals" light />
      <div className="grid md:grid-cols-3 gap-10">
        {TPL_DATA.wallOfFame.map((season, i) => (
          <motion.div key={season.season} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
            className={`p-12 rounded-[3rem] border relative group overflow-hidden ${season.status === 'Coming Soon' ? 'bg-white/5 border-white/10 opacity-40' : 'glass-card border-orange-500/10'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all"
                 style={{ background: 'radial-gradient(circle, rgba(255,80,0,0.1), transparent)' }}></div>
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-black italic tracking-tighter">{season.season}</h3>
              <Trophy className={`w-12 h-12 ${season.status === 'Coming Soon' ? 'text-white/10' : 'text-orange-400'}`}
                      style={season.status !== 'Coming Soon' ? { filter: 'drop-shadow(0 0 10px rgba(255,140,0,0.5))' } : {}} />
            </div>
            {season.status === 'Coming Soon' ? (
              <div className="py-24 text-center">
                <p className="text-2xl font-black text-white/20 italic uppercase tracking-widest">Awaiting Champions</p>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] mb-6 italic">Individual MVPs</p>
                  <div className="space-y-5">
                    {season.winners.map((winner, idx) => (
                      <div key={winner} className="flex items-center gap-5 group/winner">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sm font-black italic border border-white/10 group-hover/winner:text-white transition-all"
                             onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #ff4500, #ff8c00)')}
                             onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}>
                          0{idx + 1}
                        </div>
                        <span className="text-xl font-black italic uppercase tracking-tight group-hover/winner:text-orange-400 transition-colors">{winner}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-10 border-t border-white/5">
                  <p className="text-[10px] font-black text-phoenix-gold uppercase tracking-[0.3em] mb-3 italic">Team Dynasty</p>
                  <p className="text-2xl font-black italic uppercase tracking-tighter text-white">{season.teamWinner}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── SEASON LOGOS ─────────────────────────────────────────────────────────────
const SeasonLogos = () => {
  const seasons = [
    { number: 1, title: 'Season 1', subtitle: 'The Beginning', status: 'completed', year: 'Jul–Sep 2025', champion: 'Team Nayan Thorat', logo: 'https://i.postimg.cc/wjmcw90H/TPL-LOGO-NO-BACKGROUND.png' },
    { number: 2, title: 'Season 2', subtitle: 'The Rivalry', status: 'completed', year: 'Oct–Dec 2025', champion: 'Team Himanshu Kumar', logo: 'https://i.postimg.cc/sDt5Qtsz/TPL-Season2-No-Background.png' },
    { number: 3, title: 'Season 3', subtitle: 'The Reckoning', status: 'completed', year: 'Jan–Mar 2026', champion: 'TBD', logo: 'https://i.postimg.cc/6QKRzn8D/TPL-Season-3-Logo-No-Background.png' },
    { number: 4, title: 'Season 4', subtitle: 'The Phoenix', status: 'active', year: 'Apr–Jun 2026', champion: 'IN PROGRESS', logo: 'https://i.postimg.cc/85PZKq7Y/TPL-Season-4-No-Background.png' },
  ];
  return (
    <section className="py-32 bg-phoenix-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full blur-[120px] opacity-10"
           style={{ background: 'linear-gradient(90deg, transparent, #ff4500, #ff8c00, #ffd700, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="The TPL Era" subtitle="Seasons Legacy" light />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {seasons.map((season, i) => (
            <motion.div key={season.number} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, type: 'spring' }} whileHover={{ y: -10, scale: 1.03 }}
              className={`relative group rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${season.status === 'active' ? 'border-orange-500/40' : 'border-white/10 hover:border-orange-500/20'}`}
              style={season.status === 'active' ? { boxShadow: '0 0 60px rgba(255,80,0,0.15)' } : {}}>
              <div className={`absolute inset-0 ${season.status === 'active' ? '' : 'glass-card'}`}
                   style={season.status === 'active' ? { background: 'linear-gradient(135deg, rgba(255,80,0,0.15), rgba(255,140,0,0.08))' } : {}} />
              {season.status === 'active' && (
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #ff4500, #ff8c00, #ffd700)' }} />
              )}
              <div className="relative z-10 p-8 flex flex-col items-center text-center min-h-[320px] justify-between">
                <div>
                  <img src={season.logo} alt={season.title}
                    className={`w-24 h-24 object-contain mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg ${season.status === 'active' ? 'animate-pulse' : ''}`}
                    referrerPolicy="no-referrer" />
                  <div className="relative z-10">
                    <p className={`text-xs font-black uppercase tracking-[0.4em] mb-1 italic ${season.status === 'active' ? 'text-orange-400' : 'text-white/30'}`}>
                      S{season.number} · {season.year}
                    </p>
                    <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">{season.title}</h3>
                    <p className={`text-sm font-bold mt-1 ${season.status === 'active' ? 'text-phoenix-gold' : 'text-white/40'}`}>{season.subtitle}</p>
                  </div>
                </div>
                <div className={`w-12 h-px my-4 transition-all duration-500 group-hover:w-full ${season.status === 'active' ? 'w-full' : ''}`}
                     style={{ background: season.status === 'active' ? 'linear-gradient(90deg, #ff4500, #ff8c00)' : 'rgba(255,255,255,0.1)' }} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">{season.status === 'active' ? 'Currently' : 'Champion'}</p>
                  <p className={`text-sm font-black italic uppercase tracking-tight ${season.status === 'active' ? 'text-orange-400 animate-pulse' : season.champion === 'TBD' ? 'text-white/30' : 'text-white'}`}>{season.champion}</p>
                </div>
                {season.status === 'active' && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}
                    className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1"
                    style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)' }}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping inline-block"></span>
                    LIVE
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center mt-16 gap-0 relative">
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px"
               style={{ background: 'linear-gradient(90deg, rgba(255,80,0,0.3), rgba(255,140,0,0.6), rgba(255,200,0,0.4), rgba(255,80,0,0.8))' }} />
          {seasons.map((season, i) => (
            <div key={i} className="flex-1 flex justify-center relative z-10">
              <div className={`w-4 h-4 rounded-full border-2 ${season.status === 'active' ? 'border-orange-400' : 'border-white/30'}`}
                   style={season.status === 'active' ? { background: '#ff8c00', boxShadow: '0 0 20px rgba(255,140,0,0.6)' } : { background: 'rgba(255,255,255,0.1)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── GALLERY ──────────────────────────────────────────────────────────────────
const Gallery = () => (
  <section className="py-32 bg-phoenix-deeper">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Arena Visuals" subtitle="The Hype" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TPL_DATA.gallery.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-[2rem] group cursor-crosshair border-2 border-white/5 ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm"
                 style={{ background: 'rgba(255,80,0,0.2)' }}>
              <ImageIcon className="text-white w-12 h-12 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
              <p className="text-white font-black italic uppercase tracking-widest">View Moment</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-phoenix-deeper py-20 border-t border-orange-500/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center skew-x-[-10deg]"
               style={{ background: 'linear-gradient(135deg, #ff4500, #ff8c00)' }}>
            <Flame className="w-7 h-7 fill-white text-white" />
          </div>
          <span className="text-3xl font-black tracking-tighter text-white italic uppercase">TPL</span>
          <span className="text-xs text-orange-400/60 font-black uppercase tracking-widest mt-1 italic">Phoenix S4</span>
        </div>
        <div className="flex gap-10 text-xs font-black text-white/30 uppercase tracking-[0.2em] italic">
          <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] italic">
          © {new Date().getFullYear()} THORE PREMIER LEAGUE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
);

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rules />
      <Metrics />
      <Leaderboard />
      <Teams />
      <WallOfFame />
      <Gallery />
      <SeasonLogos />
      <Footer />
    </div>
  );
}
