"use client"
import { useState, useEffect } from "react"
import { ArrowRight, PiggyBank, Repeat, Coins, Monitor, Calculator, MapPin, ChevronLeft, ChevronRight, CreditCard, Smartphone, Shield } from "lucide-react"
import Link from "next/link"

const quickApplyItems = [
  { label: "Savings Account", href: "/savings-account", icon: PiggyBank, color: "bg-[#C0001B]" },
  { label: "Recurring Deposit", href: "/recurring-deposit", icon: Repeat, color: "bg-emerald-500" },
  { label: "Gold Loan", href: "/gold-loan", icon: Coins, color: "bg-amber-500" },
  { label: "Net Banking", href: "/net-banking", icon: Monitor, color: "bg-blue-500" },
  { label: "EMI Calculator", href: "/emi-calculator", icon: Calculator, color: "bg-violet-500" },
  { label: "Locate Branch", href: "/locate-us", icon: MapPin, color: "bg-rose-500" },
]

const promoSlides = [
  {
    tag: "DICGC Insured",
    headline: "Your deposits are safe",
    subline: "Protected up to ₹5,00,000 by Govt. of India",
    cta: "Learn More",
    ctaHref: "/about-us",
    icon: Shield,
  },
  {
    tag: "Zero Balance Account",
    headline: "Open a Savings Account",
    subline: "No minimum balance. Earn up to 6% interest p.a.",
    cta: "Open Now",
    ctaHref: "/savings-account",
    icon: PiggyBank,
  },
  {
    tag: "Special FD Offer",
    headline: "Earn 7.00% per annum",
    subline: "1-Year Fixed Deposit — Senior Citizens get 7.50%",
    cta: "Invest Today",
    ctaHref: "/time-deposit",
    icon: Coins,
  },
]

export function QuickApply() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % promoSlides.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const slide = promoSlides[current]
  const SlideIcon = slide.icon

  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — Apply Now grid */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-gray-800">Quick Actions</h2>
              <Link href="/savings-account" className="text-xs font-bold text-[#C0001B] hover:underline">View All →</Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {quickApplyItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#C0001B]/20 hover:shadow-lg transition-all group text-center"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[12px] font-bold text-gray-600 group-hover:text-gray-900 leading-tight transition-colors">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Promo carousel */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#C0001B] to-[#8B0015] text-white p-8 flex flex-col justify-between min-h-[240px]">
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-white/5 rounded-full" />
            <div className="absolute -left-8 bottom-0 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute right-8 bottom-8 w-20 h-20 bg-white/5 rounded-full" />

            <div className={`relative z-10 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg">{slide.tag}</span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <SlideIcon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              <h3 className="text-[28px] font-bold leading-tight">{slide.headline}</h3>
              <p className="text-white/70 text-sm mt-2">{slide.subline}</p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2 bg-white text-[#C0001B] text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2">
                <button onClick={() => setCurrent(c => (c - 1 + promoSlides.length) % promoSlides.length)} className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {promoSlides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/30 w-1.5 hover:bg-white/50"}`} />
                  ))}
                </div>
                <button onClick={() => setCurrent(c => (c + 1) % promoSlides.length)} className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
