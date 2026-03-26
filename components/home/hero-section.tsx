"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, ChevronRight, Shield, Lock, ShieldCheck, Star, Users, Landmark, PiggyBank, Home, CreditCard, GraduationCap, Smartphone, Calculator, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"

const goalTabs = [
  {
    id: "save",
    label: "Save & Grow",
    icon: PiggyBank,
    links: [
      { title: "1-Year Special FD — 7.00% p.a.", href: "/time-deposit", hot: true },
      { title: "Open a Savings Account", href: "/savings-account" },
      { title: "Start a Recurring Deposit", href: "/recurring-deposit" },
    ]
  },
  {
    id: "borrow",
    label: "Take a Loan",
    icon: Home,
    links: [
      { title: "Gold Loan — Quick approval", href: "/gold-loan", hot: true },
      { title: "Home / House Loan", href: "/home-loan" },
      { title: "Personal Loan in 24 hrs", href: "/personal-loan" },
    ]
  },
  {
    id: "digital",
    label: "Digital Banking",
    icon: Smartphone,
    links: [
      { title: "Login to Net Banking", href: "/net-banking", hot: true },
      { title: "Download Mobile App", href: "/mobile-banking" },
      { title: "Pay via UPI / QR", href: "/upi-qr" },
    ]
  },
  {
    id: "safe",
    label: "Bank Safe",
    icon: Shield,
    links: [
      { title: "DICGC Insured — ₹5 Lakh cover", href: "/about-us", hot: false },
      { title: "Grievance & Complaint", href: "/grievance-redressal" },
      { title: "Cyber Fraud Awareness", href: "/cyber-awareness" },
    ]
  },
]

const trustBadges = [
  { icon: Lock, label: "RBI Regulated" },
  { icon: ShieldCheck, label: "DICGC ₹5 Lakh" },
  { icon: Star, label: "70+ Years Legacy" },
  { icon: Users, label: "50K+ Members" },
]

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); ob.disconnect() }
    }, { threshold: 0.5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let t0: number | null = null
    const step = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / 2000, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("save")
  const currentTab = goalTabs.find(t => t.id === activeTab)!

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">

      {/* ── Background — elegant layered gradient ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2]" />
        {/* Animated floating orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C0001B]/[0.05] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#C0001B]/[0.04] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#C0001B]/[0.03] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(#C0001B 1px, transparent 1px), linear-gradient(90deg, #C0001B 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.73,194.26,108.9Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Headline + tabs */}
          <div className="space-y-8">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#C0001B]/15 rounded-full px-4 py-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C0001B]" />
              <span className="text-[11px] tracking-[0.12em] uppercase text-[#C0001B] font-bold">
                Since 1954 · Bhopal, Madhya Pradesh
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] text-gray-900">
                Banking that{" "}
                <span className="italic relative text-[#C0001B]">
                  trusts
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c30-6 60-8 96-6s70 4 100 2" stroke="#C0001B" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </span>
              </h1>
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] text-gray-900">
                you, always.
              </h1>
              <p className="text-[17px] text-gray-500 font-medium mt-5 max-w-md leading-relaxed">
                आपका भरोसा, हमारी ज़िम्मेदारी — Bhopal's most trusted cooperative bank, RBI-regulated since 1954.
              </p>
            </div>

            {/* Goal Tabs — enhanced with icons */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-0 bg-gray-50 rounded-2xl p-1.5 border border-gray-100">
                {goalTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                      activeTab === tab.id
                        ? "bg-[#C0001B] text-white shadow-lg shadow-[#C0001B]/20"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab links */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 min-h-[56px]">
                {currentTab.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`inline-flex items-center gap-2 text-[13.5px] font-semibold rounded-xl px-5 py-2.5 transition-all border ${
                      link.hot
                        ? "bg-[#C0001B] text-white border-[#C0001B] hover:bg-[#A0001A] shadow-[0_4px_12px_rgba(192,0,27,0.25)]"
                        : "bg-white border-gray-200 text-gray-700 hover:border-[#C0001B] hover:text-[#C0001B] hover:shadow-md"
                    }`}
                  >
                    {link.title}
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-500 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2 shadow-sm hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                  <badge.icon className="w-3.5 h-3.5 text-[#C0001B]" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Rate + stats cards with enhanced design */}
          <div className="hidden lg:grid grid-cols-2 gap-4 items-start">

            {/* FD Rate Hero Card — enhanced */}
            <div className="col-span-2 bg-white rounded-3xl border border-gray-100 shadow-[0_16px_48px_rgba(0,0,0,0.08)] p-8 relative overflow-hidden group hover:shadow-[0_20px_56px_rgba(192,0,27,0.08)] transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C0001B] via-[#E5293E] to-[#C0001B]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C0001B]/[0.04] rounded-full blur-[40px] translate-x-1/4 -translate-y-1/4" />
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> Special FD Rate
                  </span>
                  <div className="text-[64px] font-bold leading-none text-gray-900 mt-1">7<span className="text-4xl">.00%</span></div>
                  <div className="text-sm text-gray-500 mt-1">per annum · 1-Year Deposit</div>
                </div>
                <div className="bg-[#C0001B] p-3.5 rounded-2xl shadow-lg shadow-[#C0001B]/25 group-hover:scale-110 transition-transform">
                  <PiggyBank className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 relative z-10">
                <span className="text-sm font-semibold text-gray-600">Senior Citizen: <strong className="text-[#C0001B]">7.50%</strong></span>
                <Link href="/interest-rates" className="text-sm font-bold text-[#C0001B] flex items-center gap-1 hover:gap-2 transition-all">
                  View all rates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* DICGC card — enhanced */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-6 group hover:border-emerald-200 hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] transition-all">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:scale-110 transition-all">
                <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-[26px] font-bold text-gray-900">₹5,00,000</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">DICGC Insured</div>
              <div className="text-xs text-gray-400 mt-2">Your deposits are 100% protected by Govt. of India</div>
            </div>

            {/* Members card — with animated counter */}
            <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl shadow-[0_8px_32px_rgba(192,0,27,0.3)] p-6 text-white relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-[26px] font-bold relative z-10">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 text-white/80 relative z-10">Happy Members</div>
              <div className="text-xs text-white/60 mt-2 relative z-10">Proudly serving Bhopal since 1954</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
