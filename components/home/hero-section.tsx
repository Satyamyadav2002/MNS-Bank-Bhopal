"use client"
import { useState } from "react"
import { ArrowRight, ChevronRight, Shield, Lock, ShieldCheck, Star, Users, Landmark, PiggyBank, Home, CreditCard, GraduationCap, Smartphone, Calculator, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const goalTabs = [
  {
    id: "save",
    label: "Save & Grow",
    links: [
      { title: "1-Year Special FD — 7.00% p.a.", href: "/time-deposit", hot: true },
      { title: "Open a Savings Account", href: "/savings-account" },
      { title: "Start a Recurring Deposit", href: "/recurring-deposit" },
    ]
  },
  {
    id: "borrow",
    label: "Take a Loan",
    links: [
      { title: "Gold Loan — Quick approval", href: "/gold-loan", hot: true },
      { title: "Home / House Loan", href: "/home-loan" },
      { title: "Personal Loan in 24 hrs", href: "/personal-loan" },
    ]
  },
  {
    id: "digital",
    label: "Digital Banking",
    links: [
      { title: "Login to Net Banking", href: "/net-banking", hot: true },
      { title: "Download Mobile App", href: "/mobile-banking" },
      { title: "Pay via UPI / QR", href: "/upi-qr" },
    ]
  },
  {
    id: "safe",
    label: "Bank Safe",
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

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("save")
  const currentTab = goalTabs.find(t => t.id === activeTab)!

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        {/* soft blush-red gradient like Axis Bank */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2]" />
        {/* subtle red orb top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#C0001B]/[0.06] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        {/* subtle red orb bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C0001B]/[0.04] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3" />
        {/* wave divider */}
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

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C0001B]/30" />
              <span className="text-[11px] tracking-[0.14em] uppercase text-[#C0001B] font-bold flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5" />
                Mahanagar Nagrik Sahakari Bank · Since 1954
              </span>
            </div>

            {/* Main Headline — Axis-style large + italic accent */}
            <div className="space-y-2">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] text-gray-900">
                Banking that{" "}
                <span className="italic" style={{ color: "#C0001B" }}>trusts</span>
              </h1>
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] text-gray-900">
                you, always.
              </h1>
              <p className="text-[17px] text-gray-500 font-medium mt-4 max-w-md leading-relaxed">
                आपका भरोसा, हमारी ज़िम्मेदारी — Bhopal's most trusted cooperative bank, RBI-regulated since 1954.
              </p>
            </div>

            {/* Goal Tabs — Axis Bank style */}
            <div className="space-y-4">
              {/* Tab row */}
              <div className="flex flex-wrap gap-0 border-b border-gray-200">
                {goalTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-sm font-semibold transition-all relative ${
                      activeTab === tab.id
                        ? "text-[#C0001B] border-b-2 border-[#C0001B] -mb-px"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab links */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1 min-h-[56px]">
                {currentTab.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`inline-flex items-center gap-2 text-[13.5px] font-semibold rounded-full px-5 py-2.5 transition-all border ${
                      link.hot
                        ? "bg-[#C0001B] text-white border-[#C0001B] hover:bg-[#A0001A] shadow-[0_4px_12px_rgba(192,0,27,0.25)]"
                        : "bg-white border-gray-200 text-gray-700 hover:border-[#C0001B] hover:text-[#C0001B]"
                    }`}
                  >
                    {link.title}
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-600 bg-white/70 border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <badge.icon className="w-3.5 h-3.5 text-[#C0001B]" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Rate + stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 items-start">

            {/* FD Rate Hero Card */}
            <div className="col-span-2 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C0001B]/[0.04] rounded-full blur-[40px] translate-x-1/4 -translate-y-1/4" />
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B]">Special FD Rate</span>
                  <div className="text-[64px] font-bold leading-none text-gray-900 mt-1">7<span className="text-4xl">.00%</span></div>
                  <div className="text-sm text-gray-500 mt-1">per annum · 1-Year Deposit</div>
                </div>
                <div className="bg-[#C0001B]/8 p-3 rounded-xl">
                  <PiggyBank className="w-8 h-8 text-[#C0001B]" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-600">Senior Citizen: <strong className="text-[#C0001B]">7.50%</strong></span>
                <Link href="/interest-rates" className="text-sm font-bold text-[#C0001B] flex items-center gap-1 hover:gap-2 transition-all">
                  View all rates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* DICGC card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-6">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-[26px] font-bold text-gray-900">₹5,00,000</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">DICGC Insured</div>
              <div className="text-xs text-gray-400 mt-2">Your deposits are 100% protected by Govt. of India</div>
            </div>

            {/* Members card */}
            <div className="bg-[#C0001B] rounded-2xl shadow-[0_8px_40px_rgba(192,0,27,0.25)] p-6 text-white">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-[26px] font-bold">50,000+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 text-white/80">Happy Members</div>
              <div className="text-xs text-white/60 mt-2">Proudly serving Bhopal since 1954</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
