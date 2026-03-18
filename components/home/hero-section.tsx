"use client"
import { ArrowRight, CheckCircle2, Shield, Star, Play, Lock, ShieldCheck, Zap, TrendingUp, Landmark, PiggyBank, Banknote, IndianRupee, ArrowUpRight, CreditCard, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const premiumCards = [
  {
    id: "aurum",
    name: "AURUM",
    type: "CREDIT CARD",
    number: "••••  ••••  ••••  7291",
    holder: "A. RAJPUT",
    bg: "bg-gradient-to-br from-[#71101E] via-[#4A0812] to-[#2A0409]",
    textPrimary: "text-[#EFD1A7]",
    textSecondary: "text-[#EFD1A7]/60",
    shadow: "shadow-[12px_24px_54px_rgba(74,8,18,0.4)]",
    rotate: "rotate-[-4deg]",
    chip: "from-[#F0C96A] to-[#A87820]"
  },
  {
    id: "elite",
    name: "ELITE",
    type: "DEBIT CARD",
    number: "••••  ••••  ••••  4418",
    holder: "A. RAJPUT",
    bg: "bg-gradient-to-br from-[#FAF7F2] via-[#F2EDE4] to-[#E5E0D8]",
    textPrimary: "text-[#6B7280]",
    textSecondary: "text-[#6B7280]/60",
    shadow: "shadow-[12px_24px_54px_rgba(0,0,0,0.08)]",
    rotate: "rotate-[3deg]",
    chip: "from-[#D4CFC8] to-[#B5B0AA]"
  },
  {
    id: "wealth",
    name: "WEALTH",
    type: "PRIVATE BANKING",
    number: "••••  ••••  ••••  8834",
    holder: "A. RAJPUT",
    bg: "bg-gradient-to-br from-[#C9922A] via-[#A87820] to-[#60420E]",
    textPrimary: "text-white",
    textSecondary: "text-white/60",
    shadow: "shadow-[12px_24px_54px_rgba(168,120,32,0.35)]",
    rotate: "rotate-[-2deg]",
    chip: "from-[#F5ECE8] to-[#D4CFC8]"
  },
  {
    id: "signature",
    name: "SIGNATURE",
    type: "FOREX CARD",
    number: "••••  ••••  ••••  1092",
    holder: "A. RAJPUT",
    bg: "bg-gradient-to-br from-[#1E2030] via-[#151722] to-[#0A0B10]",
    textPrimary: "text-white/90",
    textSecondary: "text-white/40",
    shadow: "shadow-[12px_24px_54px_rgba(0,0,0,0.4)]",
    rotate: "rotate-[5deg]",
    chip: "from-[#A87820] to-[#715011]"
  },
  {
    id: "platinum",
    name: "PLATINUM",
    type: "BUSINESS CARD",
    number: "••••  ••••  ••••  5521",
    holder: "MNS ENTERPRISE",
    bg: "bg-gradient-to-br from-[#4A5D6B] via-[#2C3842] to-[#12181C]",
    textPrimary: "text-[#E2E8F0]",
    textSecondary: "text-[#94A3B8]",
    shadow: "shadow-[12px_24px_54px_rgba(44,56,66,0.35)]",
    rotate: "rotate-[-3deg]",
    chip: "from-[#CBD5E1] to-[#94A3B8]"
  }
]

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [started, end, duration])

  return <>{count}{suffix}</>
}

export function HeroSection() {
  return (
    <section className="min-h-[94vh] relative overflow-hidden flex items-center pt-[80px]">

      {/* ═══════════ PREMIUM BACKGROUND SYSTEM ═══════════ */}
      <div className="absolute inset-0 z-0">
        {/* Base mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2] via-[#FDF8F0] to-[#F5ECE8]" />
        
        {/* Living gradient orbs — slow breathing animation */}
        <div className="absolute top-[-5%] right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-[#C0001B]/[0.035] via-[#C0001B]/[0.02] to-transparent rounded-full blur-[100px] animate-mesh" />
        <div className="absolute bottom-[-10%] left-[0%] w-[550px] h-[550px] bg-gradient-to-tr from-[#C9922A]/[0.05] via-[#F0C96A]/[0.03] to-transparent rounded-full blur-[100px] animate-mesh" style={{ animationDelay: '-8s' }} />
        <div className="absolute top-[30%] right-[30%] w-[350px] h-[350px] bg-gradient-to-br from-[#F0C96A]/[0.03] to-transparent rounded-full blur-[80px] animate-mesh" style={{ animationDelay: '-15s' }} />
        
        {/* Premium noise texture */}
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-40 pointer-events-none" />
        
        {/* Subtle geometric grid — banking premium feel */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(201,146,42,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Floating gold particles */}
        <div className="absolute top-[18%] left-[6%] w-2 h-2 rounded-full bg-[#C9922A]/20 animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[55%] left-[3%] w-1.5 h-1.5 rounded-full bg-[#C9922A]/15 animate-float-slow" />
        <div className="absolute top-[25%] right-[35%] w-1 h-1 rounded-full bg-[#C0001B]/12 animate-float-delay" />
        <div className="absolute top-[70%] right-[8%] w-1.5 h-1.5 rounded-full bg-[#C9922A]/18 animate-float" style={{ animationDuration: '7s' }} />
        <div className="absolute top-[12%] right-[20%] w-1 h-1 rounded-full bg-[#F0C96A]/25 animate-float-slow" style={{ animationDelay: '-3s' }} />
        
        {/* Elegant wave divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.73,194.26,108.9Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* ═══════════ CONTENT ═══════════ */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ════════ LEFT COLUMN — Text Content ════════ */}
          <div className="lg:col-span-6 space-y-7 relative">
            
            {/* Eyebrow with decorative lines */}
            <div className="flex items-center gap-3 hero-line-1">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9922A]" />
              <span className="text-[11px] tracking-[0.14em] uppercase text-[#C9922A] font-bold font-sans flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5" />
                MAHANAGAR BANK · SINCE 1954
              </span>
            </div>

            {/* Main Headline — Maximum Impact */}
            <div className="space-y-1 overflow-visible">
              <h1 className="font-serif italic text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[70px] text-[#2B2D42] leading-[1.05] tracking-[-0.02em] hero-line-1 overflow-visible">
                आपका भरोसा,
              </h1>
              <h1 className="font-serif italic text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[70px] leading-[1.05] tracking-[-0.02em] hero-line-2 overflow-visible py-2">
                <span className="bg-gradient-to-r from-[#8B6510] via-[#C9922A] to-[#F0C96A] bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block pr-4 py-1">
                  हमारी ज़िम्मेदारी
                </span>
              </h1>
              <div className="flex items-center gap-3 mt-2 hero-line-3">
                <div className="h-px w-6 bg-gradient-to-r from-[#C0001B] to-[#C9922A]" />
                <h2 className="font-sans text-[17px] lg:text-[20px] text-[#6B7280] font-medium tracking-tight italic">
                  Your Trust. Our Responsibility.
                </h2>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-[16px] lg:text-[17px] text-[#2B2D42]/60 font-medium max-w-md leading-[1.7] hero-sub">
              Bhopal&apos;s most trusted cooperative bank, proudly serving{" "}
              <strong className="text-[#2B2D42]">50,000+</strong> families with RBI-regulated, 
              DICGC-insured banking since{" "}
              <strong className="text-[#2B2D42]">1954</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1 hero-cta">
              <Button size="lg" className="bg-gradient-to-r from-[#C0001B] to-[#9B0016] text-white hover:text-white rounded-full text-[16px] font-bold px-9 h-[56px] shadow-[0_8px_32px_rgba(192,0,27,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(192,0,27,0.4)] border-0 relative overflow-hidden group">
                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Open Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button size="lg" variant="ghost" className="text-[#2B2D42] hover:bg-[#2B2D42]/[0.04] rounded-full text-[16px] font-bold px-7 h-[56px] transition-all duration-300 group border border-transparent hover:border-[#E5E0D8]">
                <div className="w-11 h-11 rounded-full bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mr-2.5 group-hover:bg-[#C0001B] group-hover:border-[#C0001B] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(192,0,27,0.25)] transition-all duration-400">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Our Story
              </Button>
            </div>

            {/* Trust Badges — Premium glass pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3 hero-badges">
              {[
                { icon: Lock, label: "RBI Regulated", gradient: "from-[#C0001B]/8 to-[#C0001B]/3" },
                { icon: ShieldCheck, label: "DICGC ₹5 Lakh", gradient: "from-emerald-500/8 to-emerald-500/3" },
                { icon: Star, label: "70+ Years Legacy", gradient: "from-[#C9922A]/10 to-[#C9922A]/4" },
                { icon: CheckCircle2, label: "50K+ Members", gradient: "from-blue-500/8 to-blue-500/3" },
              ].map((badge, i) => (
                <div key={i} className={`bg-gradient-to-r ${badge.gradient} backdrop-blur-md border border-white/60 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(201,146,42,0.12)] font-sans text-[11px] font-bold text-[#2B2D42] transition-all duration-400 cursor-default hover:-translate-y-0.5 hover:scale-[1.02]`}>
                  <badge.icon className="w-3.5 h-3.5 text-[#C9922A]" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* ════════ RIGHT COLUMN — Mixed Scrolling Banner Grid ════════ */}
          <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center hero-right h-[640px] overflow-hidden">
            
            {/* Background glow composition */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-br from-[#C0001B]/[0.05] via-[#C9922A]/[0.05] to-transparent rounded-full blur-[100px]" />

            {/* Fade overlays for smooth entry/exit */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none" />
            
            {/* Card Scrolling Track */}
            <div className="flex flex-col gap-10 animate-marquee-vertical w-full max-w-[340px] py-10">
              
              {/* Loop the cards twice for seamless infinite scroll */}
              {[1, 2].map((loopIndex) => (
                <div key={loopIndex} className="flex flex-col gap-10">
                  
                  {/* Item 1: AURUM Credit Card */}
                  <div className="w-full aspect-[1.58/1] rounded-[24px] bg-gradient-to-br from-[#71101E] via-[#4A0812] to-[#2A0409] shadow-[0_24px_54px_rgba(74,8,18,0.3)] p-6 flex flex-col justify-between overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-105 group relative">
                     <div className="absolute -top-16 -right-12 w-48 h-48 bg-white/5 rounded-full blur-[24px]"></div>
                     <div className="flex items-start justify-between relative z-10">
                       <h3 className="font-serif tracking-widest text-[18px] font-bold text-[#EFD1A7]">AURUM</h3>
                       <div className="w-12 h-8 rounded-md bg-gradient-to-br from-[#F0C96A] to-[#A87820] opacity-90 border border-black/10 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full border border-black/20"></div>
                       </div>
                     </div>
                     <div className="font-mono text-[17px] tracking-widest font-medium mt-auto mb-6 relative z-10 text-[#EFD1A7] opacity-90">
                       ••••  ••••  ••••  7291
                     </div>
                     <div className="flex items-end justify-between relative z-10">
                       <div>
                         <span className="text-[8px] tracking-[0.2em] font-bold uppercase block mb-1 text-[#EFD1A7]/60">CREDIT CARD</span>
                         <span className="text-[12px] tracking-[0.1em] font-bold uppercase text-[#EFD1A7]">A. RAJPUT</span>
                       </div>
                       <div className="flex">
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md"></div>
                         <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md -ml-4 mix-blend-overlay"></div>
                       </div>
                     </div>
                  </div>

                  {/* Item 2: Best FD Rate Card */}
                  <div className="w-full rounded-[24px] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.06)] border border-[#C9922A]/20 bg-white/[0.9] backdrop-blur-[32px] transition-transform duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F0C96A]/[0.08] to-transparent rounded-full blur-[20px] pointer-events-none" />
                    <div className="flex items-center gap-3 mb-5 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9922A] to-[#F0C96A] flex items-center justify-center shadow-[0_4px_16px_rgba(201,146,42,0.3)]">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-[#2B2D42] text-[16px] block leading-tight">Best FD Rate</span>
                        <span className="text-[12px] text-[#6B7280] font-medium">Special Deposit Scheme</span>
                      </div>
                    </div>
                    <div className="font-serif text-[48px] font-bold leading-none mb-2 relative z-10 bg-gradient-to-r from-[#8B6510] via-[#C9922A] to-[#F0C96A] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      7.00%
                    </div>
                    <div className="text-[13px] font-bold text-[#6B7280] relative z-10 uppercase tracking-widest mb-1.5">
                      per annum · 1 Year
                    </div>
                    <div className="mt-5 h-[1.5px] w-full bg-gradient-to-r from-[#C9922A]/10 via-[#F0C96A]/30 to-[#C9922A]/10 rounded-full" />
                    <div className="mt-4 flex items-center justify-between relative z-10">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-[#C9922A]">Senior: 7.50%</span>
                      <div className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 flex items-center gap-1.5">
                        <ArrowUpRight className="w-3 h-3" /> Highest
                      </div>
                    </div>
                  </div>

                  {/* Item 3: ELITE Debit Card */}
                  <div className="w-full aspect-[1.58/1] rounded-[24px] bg-gradient-to-br from-[#FAF7F2] via-[#F2EDE4] to-[#E5E0D8] shadow-[0_24px_54px_rgba(0,0,0,0.08)] p-6 flex flex-col justify-between overflow-hidden border border-white/50 transition-transform duration-500 hover:scale-105 relative">
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent to-white/40 pointer-events-none"></div>
                     <div className="flex items-start justify-between relative z-10">
                       <h3 className="font-serif tracking-widest text-[18px] font-bold text-[#6B7280]">ELITE</h3>
                       <div className="w-12 h-8 rounded-md bg-gradient-to-br from-[#D4CFC8] to-[#B5B0AA] opacity-90 border border-black/5 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full border border-black/10"></div>
                       </div>
                     </div>
                     <div className="font-mono text-[17px] tracking-widest font-medium mt-auto mb-6 relative z-10 text-[#6B7280] opacity-90">
                       ••••  ••••  ••••  4418
                     </div>
                     <div className="flex items-end justify-between relative z-10">
                       <div>
                         <span className="text-[8px] tracking-[0.2em] font-bold uppercase block mb-1 text-[#6B7280]/60">DEBIT CARD</span>
                         <span className="text-[12px] tracking-[0.1em] font-bold uppercase text-[#6B7280]">A. RAJPUT</span>
                       </div>
                       <div className="flex">
                         <div className="w-8 h-8 rounded-full bg-[#1E2030]/5 backdrop-blur-md"></div>
                         <div className="w-8 h-8 rounded-full bg-[#1E2030]/10 backdrop-blur-md -ml-4 mix-blend-overlay"></div>
                       </div>
                     </div>
                  </div>

                  {/* Item 4: DICGC Security Card */}
                  <div className="w-full rounded-[24px] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.05)] border border-emerald-200/40 bg-white/[0.9] backdrop-blur-[32px] transition-transform duration-500 hover:scale-105">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                          <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400/50" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#2B2D42] text-[17px] block leading-tight mb-0.5">DICGC Insured</span>
                        <span className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Govt. of India</span>
                      </div>
                    </div>
                    <div className="text-[36px] font-bold text-[#2B2D42] mb-1 font-serif">
                      ₹5,00,000
                    </div>
                    <div className="text-[13px] text-[#6B7280] font-medium flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      Your deposits are 100% safe
                    </div>
                  </div>

                  {/* Item 5: FD Growth Visualization */}
                  <div className="w-full rounded-[24px] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.06)] border border-[#C9922A]/15 bg-white/[0.9] backdrop-blur-[32px] transition-transform duration-500 hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-[#2B2D42] text-[16px]">FD Growth</h4>
                      <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-bold border border-emerald-100">+7.00%</span>
                    </div>
                    <div className="flex items-end gap-2 mb-4" style={{ height: '90px' }}>
                      {[25, 30, 36, 42, 47, 54, 63, 76, 90].map((h, idx) => (
                        <div key={idx} className="flex-1">
                          <div 
                            className={`w-full rounded-t-[4px] ${idx === 8 ? 'bg-gradient-to-t from-[#C9922A] to-[#F0C96A] shadow-[0_0_12px_rgba(201,146,42,0.3)]' : idx >= 5 ? 'bg-[#C9922A]/30' : 'bg-[#D4CFC8]'}`}
                            style={{ height: `${h}px` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] font-bold text-[#6B7280] uppercase tracking-wider border-t border-[#E5E0D8]/60 pt-3">
                      <span>Jan</span>
                      <span className="text-[#C9922A]">Dec →</span>
                    </div>
                  </div>

                  {/* Item 6: Members Count */}
                  <div className="w-full bg-white/90 backdrop-blur-[32px] rounded-[24px] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.06)] border border-[#C9922A]/15 transition-transform duration-500 hover:scale-105 flex items-center gap-5">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-[#C0001B]/10 to-[#C0001B]/5 flex items-center justify-center border border-[#C0001B]/10">
                      <Landmark className="w-7 h-7 text-[#C0001B]" />
                    </div>
                    <div>
                      <div className="font-mono text-[28px] font-bold text-[#2B2D42] leading-none mb-1">
                        50K+
                      </div>
                      <span className="text-[11px] text-[#6B7280] font-bold uppercase tracking-widest block">Happy Members</span>
                    </div>
                  </div>

                </div>
              ))}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
