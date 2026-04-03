/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, Users, Target, Calendar, TrendingUp, Award, Star, 
  Zap, BarChart3, MapPin, Video, UserCheck, Briefcase,
  ChevronRight, ExternalLink, Info, Image as ImageIcon,
  Rocket, X, Menu, Clock
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
    { name: 'Metrics', href: '#metrics' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Teams', href: '#teams' },
    { name: 'Wall of Fame', href: '#wall-of-fame' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-tpl-primary/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-12 h-12 bg-tpl-accent rounded-xl flex items-center justify-center text-tpl-primary font-black text-2xl shadow-[0_0_20px_rgba(204,255,0,0.4)]"
          >
            T
          </motion.div>
          <span className="text-3xl font-display font-black tracking-tighter text-white italic group-hover:text-tpl-accent transition-colors">TPL</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-black uppercase tracking-widest text-xs text-white/70 hover:text-tpl-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tpl-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-tpl-secondary hover:bg-red-600 text-white px-8 py-2.5 rounded-full font-black italic uppercase tracking-tighter transition-all transform hover:scale-105 hover:rotate-1 shadow-[0_0_20px_rgba(255,0,60,0.3)]">
            Join The Hunt
          </button>
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
            className="fixed inset-0 z-[60] md:hidden bg-tpl-primary/95 backdrop-blur-2xl p-8"
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
                  className="text-4xl font-black text-white hover:text-tpl-accent transition-colors italic"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-tpl-accent text-tpl-primary px-6 py-5 rounded-2xl font-black text-xl mt-8 italic uppercase">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden sports-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-tpl-accent/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-tpl-secondary/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2.5 rounded-full text-tpl-accent text-sm font-black italic tracking-widest mb-8 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
          >
            <Zap className="w-5 h-5 fill-tpl-accent animate-pulse" />
            <span>SEASON 3: THE RECKONING</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-8 italic">
            THORE <br />
            <span className="text-tpl-accent text-glow">PREMIER</span> <br />
            <span className="relative">
              LEAGUE
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-4 left-0 h-4 bg-tpl-secondary skew-x-[-20deg] -z-10"
              />
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg mb-12 leading-relaxed font-medium">
            Step into the arena. Where data meets adrenaline, and sales warriors become legends. Are you ready to dominate?
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a 
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href="#leaderboard" 
              className="bg-tpl-accent text-tpl-primary px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(204,255,0,0.3)] flex items-center gap-3 italic uppercase"
            >
              ENTER ARENA <ChevronRight className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="#about" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 italic uppercase"
            >
              THE RULES
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,210,255,0.2)] border-8 border-white/5 animate-float">
        
          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/public/tpl-video.mp4" type="video/mp4" 
          </video>
        
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-tpl-primary via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute top-8 left-8 bg-tpl-secondary text-white px-4 py-2 rounded-lg font-black italic skew-x-[-15deg]">
              ELITE DIVISION
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-card p-6 rounded-3xl flex items-center justify-between border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-tpl-blue rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl italic uppercase">Current MVP</p>
                    <p className="text-tpl-blue font-bold text-sm">Nayan Thorat</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-black text-2xl italic">142%</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase">Target Met</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-12 -left-12 glass-card p-6 rounded-3xl z-20 border-tpl-accent/30 shadow-[0_0_30px_rgba(204,255,0,0.1)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tpl-accent/20 rounded-xl flex items-center justify-center text-tpl-accent">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Live Momentum</p>
                <p className="text-2xl font-black text-white italic">+89%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center mb-24 relative">
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: '100px' }}
      viewport={{ once: true }}
      className="h-1.5 bg-tpl-accent mx-auto mb-8 skew-x-[-20deg]"
    />
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-sm font-black uppercase tracking-[0.5em] mb-4 italic ${light ? 'text-tpl-accent' : 'text-tpl-secondary'}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-5xl md:text-7xl font-black italic tracking-tighter ${light ? 'text-white' : 'text-white'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const About = () => {
  const features = [
    { title: 'Individual Glory', desc: 'Compete as a lone wolf to top the charts and earn massive monetary incentives.', icon: Star },
    { title: 'Team Rivalry', desc: 'Join forces with your squad to dominate team rankings and claim collective pride.', icon: Users },
    { title: 'Real Metrics', desc: 'Performance is tracked through actual business impact, from bookings to site visits.', icon: BarChart3 },
    { title: 'Public Recognition', desc: 'Winners are celebrated across the organization with trophies and hall of fame status.', icon: Trophy },
  ];

  return (
    <section id="about" className="py-32 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-tpl-secondary font-black uppercase tracking-[0.4em] mb-6 italic">The Culture of Winning</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] italic">
              NOT JUST A GAME. <br />
              <span className="text-white/20">A REVOLUTION.</span>
            </h2>
            <div className="space-y-8 text-xl text-white/60 leading-relaxed font-medium">
              <p>
                TPL (Thore Premier League) is the ultimate proving ground. Inspired by the intensity of professional sports, we've built a league where performance is the only currency that matters.
              </p>
              <p>
                This is where the elite separate themselves from the pack. With real-time tracking, massive rewards, and a culture of relentless excellence, TPL is the heartbeat of our sales force.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="p-8 glass-card rounded-3xl border-tpl-accent/20">
                <h4 className="font-black text-3xl text-tpl-accent mb-2 italic">MOTIVATE</h4>
                <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Fueling the fire</p>
              </div>
              <div className="p-8 glass-card rounded-3xl border-tpl-secondary/20">
                <h4 className="font-black text-3xl text-tpl-secondary mb-2 italic">DOMINATE</h4>
                <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Setting the pace</p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass-card glass-card-hover group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-tpl-accent/5 rounded-full blur-2xl group-hover:bg-tpl-accent/20 transition-all"></div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-tpl-accent mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.1)]">
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

const Metrics = () => {
  return (
    <section id="metrics" className="py-32 bg-tpl-primary relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-tpl-primary via-transparent to-tpl-primary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="League Stats" subtitle="The Scoreboard" light />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TPL_DATA.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className="p-10 rounded-[2rem] glass-card border-white/5 text-center group relative"
            >
              <div className="absolute inset-0 bg-tpl-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
              <div className="w-14 h-14 bg-tpl-accent/10 rounded-2xl flex items-center justify-center text-tpl-accent mx-auto mb-6 group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all">
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

const Leaderboard = () => {
  const [nextDate, setNextDate] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const activeDays = [10, 20, 30];
    setIsActive(activeDays.includes(day));

    let next;
    if (day < 10) next = 10;
    else if (day < 20) next = 20;
    else if (day < 30) next = 30;
    else next = 10;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = now.getMonth();
    if (day >= 30) month = (month + 1) % 12;
    setNextDate(`${next}th ${monthNames[month]}`);
  }, []);

  return (
    <section id="leaderboard" className="py-32 bg-[#050810] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Live Rankings" subtitle="The Arena" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-16 text-center relative overflow-hidden border-white/5"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-tpl-accent to-transparent opacity-50"></div>
          <Trophy className="absolute -bottom-20 -right-20 w-96 h-96 text-white/5 -rotate-12 pointer-events-none" />
          
          {isActive ? (
            <div className="relative z-10">
              <div className="w-24 h-24 bg-tpl-accent/10 rounded-full flex items-center justify-center text-tpl-accent mx-auto mb-10 shadow-[0_0_50px_rgba(204,255,0,0.2)]">
                <Zap className="w-12 h-12 fill-tpl-accent animate-pulse" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 italic uppercase">ARENA IS ACTIVE!</h3>
              <p className="text-white/50 mb-12 max-w-md mx-auto text-lg font-medium">
                The numbers are moving. The rankings are shifting. Witness the battle in real-time.
              </p>
              <button className="bg-tpl-accent text-tpl-primary px-12 py-6 rounded-2xl font-black text-xl shadow-[0_0_40px_rgba(204,255,0,0.3)] flex items-center gap-4 mx-auto transition-all transform hover:scale-105 italic uppercase">
                ACCESS LIVE FEED <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-white/20 mx-auto mb-10">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 italic uppercase">ARENA IS COOLING DOWN</h3>
              <p className="text-white/40 mb-10 max-w-md mx-auto text-lg font-medium">
                The warriors are resting. The data is being verified. The next battle begins soon.
              </p>
              <div className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
                <Calendar className="w-6 h-6 text-tpl-accent" />
                <span className="text-tpl-accent font-black uppercase tracking-widest italic">NEXT UPDATE: {nextDate}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const TeamModal = ({ team, onClose }: { team: any, onClose: () => void }) => {
  if (!team) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-tpl-primary/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, rotateX: 20 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.9, y: 20, rotateX: 20 }}
        className="glass-card rounded-[3rem] w-full max-w-4xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-80">
          <img src={team.image} alt={team.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/40 to-transparent"></div>
          <button onClick={onClose} className="absolute top-8 right-8 w-12 h-12 glass-card hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20">
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-10 left-10">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-tpl-accent text-tpl-primary px-4 py-1 rounded-lg font-black italic skew-x-[-15deg] mb-4 inline-block"
            >
              TEAM PROFILE
            </motion.div>
            <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter">{team.name}</h3>
            <p className="text-tpl-blue font-bold text-lg">Led by {team.leader}</p>
          </div>
        </div>

        <div className="p-12 grid md:grid-cols-2 gap-12 bg-[#050810]/50">
          <div>
            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-8 italic">Performance Matrix</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card rounded-2xl border-white/5">
                <p className="text-3xl font-black text-white italic">{team.seasons}</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Seasons</p>
              </div>
              <div className="p-6 glass-card rounded-2xl border-tpl-secondary/20">
                <p className="text-3xl font-black text-tpl-secondary italic">{team.wins}</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Titles</p>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-6 italic">Season History</h4>
              <div className="flex flex-wrap gap-3">
                {team.rankings.map((rank: string, i: number) => (
                  <div key={i} className="px-5 py-2.5 glass-card rounded-xl border-white/10 text-white font-black italic">
                    S{i+1}: <span className="text-tpl-accent">{rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-6 italic">Elite Players</h4>
              <div className="grid gap-4">
                {team.notablePlayers.map((player: string) => (
                  <div key={player} className="flex items-center gap-4 p-4 glass-card rounded-2xl border-white/5 hover:border-tpl-blue/30 transition-colors group">
                    <div className="w-10 h-10 bg-tpl-blue/20 rounded-xl flex items-center justify-center text-tpl-blue font-black group-hover:bg-tpl-blue group-hover:text-white transition-all">
                      {player.charAt(0)}
                    </div>
                    <span className="font-black text-white italic uppercase tracking-tight">{player}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-tpl-accent rounded-[2rem] text-tpl-primary relative overflow-hidden">
              <Zap className="absolute -bottom-4 -right-4 w-24 h-24 text-tpl-primary/10 rotate-12" />
              <p className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-50">Team Creed</p>
              <p className="text-xl font-black italic leading-tight">"WE DON'T COMPETE WITH OTHERS. WE COMPETE WITH OUR POTENTIAL."</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  return (
    <section id="teams" className="py-32 bg-[#050810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Factions" subtitle="Select Your Squad" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {TPL_DATA.teams.map((team, i) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => setSelectedTeam(team)}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl border-2 border-white/5 group-hover:border-tpl-accent/50 transition-all duration-500">
                <img src={team.image} alt={team.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-black text-2xl italic uppercase leading-[0.9] mb-2">{team.name.replace('Team ', '')}</p>
                  <div className="h-1 w-0 bg-tpl-accent group-hover:w-full transition-all duration-500"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-4">Analyze Stats</p>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <ChevronRight className="w-7 h-7 text-tpl-accent" />
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

const WallOfFame = () => {
  return (
    <section id="wall-of-fame" className="py-32 bg-[#050810] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Hall of Legends" subtitle="The Immortals" light />
        
        <div className="grid md:grid-cols-3 gap-10">
          {TPL_DATA.wallOfFame.map((season, i) => (
            <motion.div
              key={season.season}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`p-12 rounded-[3rem] border relative group overflow-hidden ${season.status === 'Coming Soon' ? 'bg-white/5 border-white/10 opacity-40' : 'glass-card border-white/10 shadow-[0_0_50px_rgba(204,255,0,0.05)]'}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-tpl-accent/5 rounded-full blur-3xl group-hover:bg-tpl-accent/10 transition-all"></div>
              
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-4xl font-black italic tracking-tighter">{season.season}</h3>
                <Trophy className={`w-12 h-12 ${season.status === 'Coming Soon' ? 'text-white/10' : 'text-tpl-accent drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]'}`} />
              </div>

              {season.status === 'Coming Soon' ? (
                <div className="py-24 text-center">
                  <p className="text-2xl font-black text-white/20 italic uppercase tracking-widest">Awaiting Champions</p>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <p className="text-[10px] font-black text-tpl-accent uppercase tracking-[0.3em] mb-6 italic">Individual MVPs</p>
                    <div className="space-y-5">
                      {season.winners.map((winner, idx) => (
                        <div key={winner} className="flex items-center gap-5 group/winner">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sm font-black italic border border-white/10 group-hover/winner:bg-tpl-accent group-hover/winner:text-tpl-primary transition-all">
                            0{idx + 1}
                          </div>
                          <span className="text-xl font-black italic uppercase tracking-tight group-hover/winner:text-tpl-accent transition-colors">{winner}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-10 border-t border-white/5">
                    <p className="text-[10px] font-black text-tpl-blue uppercase tracking-[0.3em] mb-3 italic">Team Dynasty</p>
                    <p className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-tpl-blue transition-colors">{season.teamWinner}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-32 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Arena Visuals" subtitle="The Hype" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TPL_DATA.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-[2rem] group cursor-crosshair border-2 border-white/5 ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-tpl-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                <ImageIcon className="text-tpl-primary w-12 h-12 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
                <p className="text-tpl-primary font-black italic uppercase tracking-widest">View Moment</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FutureScope = () => {
  const points = [
    { title: 'Global Expansion', desc: 'Taking the league beyond borders with international chapters.', icon: Rocket },
    { title: 'Neural Analytics', desc: 'Real-time performance prediction using advanced AI models.', icon: BarChart3 },
    { title: 'Legendary Rewards', desc: 'Luxury assets, equity stakes, and lifetime recognition.', icon: Award },
  ];

  return (
    <section className="py-32 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden border-white/5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-tpl-accent/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-tpl-accent font-black uppercase tracking-[0.4em] mb-6 italic"
              >
                The Next Phase
              </motion.p>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.85] italic uppercase tracking-tighter">
                THE FUTURE IS <br /> 
                <span className="text-tpl-accent text-glow">UNSTOPPABLE.</span>
              </h2>
              <p className="text-white/50 text-xl mb-12 leading-relaxed font-medium">
                We're not just building a league; we're building a legacy. The next evolution of TPL will redefine human performance.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-tpl-primary px-10 py-5 rounded-2xl font-black text-xl italic uppercase tracking-tighter hover:bg-tpl-accent transition-colors"
              >
                VIEW THE ROADMAP
              </motion.button>
            </div>
            
            <div className="space-y-8">
              {points.map((p, i) => (
                <motion.div 
                  key={p.title} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 p-8 glass-card rounded-[2.5rem] border-white/5 hover:border-tpl-accent/20 transition-all group"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-tpl-accent shrink-0 group-hover:bg-tpl-accent group-hover:text-tpl-primary transition-all shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                    <p.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-2 italic uppercase tracking-tight">{p.title}</h4>
                    <p className="text-white/40 text-sm font-medium leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JoinTheHunt = () => {
  return (
    <section className="py-32 bg-[#050810] relative overflow-hidden">
      <div className="absolute inset-0 sports-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[4rem] p-16 md:p-32 text-center border-tpl-accent/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-10">
              ARE YOU <br />
              <span className="text-tpl-accent text-glow">READY?</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              The arena is open. The legends are waiting. Your journey to the top of the TPL leaderboard starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-tpl-accent text-tpl-primary px-16 py-8 rounded-2xl font-black text-2xl italic uppercase tracking-tighter shadow-[0_0_50px_rgba(204,255,0,0.4)]"
              >
                JOIN THE HUNT
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-white px-16 py-8 rounded-2xl font-black text-2xl italic uppercase tracking-tighter border-white/10 hover:bg-white/10 transition-all"
              >
                THE RULES
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050810] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-tpl-accent rounded-xl flex items-center justify-center text-tpl-primary font-black italic text-2xl skew-x-[-10deg]">T</div>
            <span className="text-3xl font-black tracking-tighter text-white italic uppercase">TPL</span>
          </div>
          
          <div className="flex gap-10 text-xs font-black text-white/30 uppercase tracking-[0.2em] italic">
            <a href="#" className="hover:text-tpl-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-tpl-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-tpl-accent transition-colors">Contact</a>
          </div>
          
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] italic">
            © {new Date().getFullYear()} THORE PREMIER LEAGUE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Leaderboard />
      <Teams />
      <WallOfFame />
      <Gallery />
      <FutureScope />
      <JoinTheHunt />
      <Footer />
    </div>
  );
}
