"use client"
import { useState, useEffect } from "react"
import { ArrowRight, PiggyBank, Repeat, Coins, Monitor, Calculator, MapPin, CreditCard, Smartphone, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const quickApplyItems = [
  { label: "Savings Account", href: "/savings-account", icon: PiggyBank },
  { label: "Recurring Deposit", href: "/recurring-deposit", icon: Repeat },
  { label: "Gold Loan", href: "/gold-loan", icon: Coins },
  { label: "Net Banking", href: "/net-banking", icon: Monitor },
  { label: "EMI Calculator", href: "/emi-calculator", icon: Calculator },
  { label: "Locate Branch", href: "/locate-us", icon: MapPin },
]

const promoSlides = [
  {
    tag: "DICGC Insured",
    headline: "Your deposits are safe",
    subline: "Protected up to ₹5,00,000 by Govt. of India",
    cta: "Learn More",
    ctaHref: "/about-us",
    bg: "from-[#C0001B] to-[#8B0015]",
  },
  {
    tag: "Zero Balance Account",
    headline: "Open a Savings Account",
    subline: "No minimum balance. Earn up to 6% interest p.a.",
    cta: "Open Now",
    ctaHref: "/savings-account",
    bg: "from-[#8B0015] to-[#C0001B]",
  },
  {
    tag: "Special FD Offer",
    headline: "Earn 7.00% per annum",
    subline: "1-Year Fixed Deposit — Senior Citizens get 7.50%",
    cta: "Invest Today",
    ctaHref: "/time-deposit",
    bg: "from-[#B00018] to-[#7A0012]",
  },
]

export function QuickApply() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % promoSlides.length), 4000)
    return () => clearInterval(t)
  }, [])

  const slide = promoSlides[current]

  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left — Apply Now grid */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-bold text-gray-800 mb-5">Apply Now</h2>
            <div className="grid grid-cols-3 gap-3">
              {quickApplyItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#C0001B]/30 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center group-hover:bg-[#C0001B]/15 transition-colors">
                    <item.icon className="w-5 h-5 text-[#C0001B]" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-600 group-hover:text-[#C0001B] leading-tight transition-colors">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Promo carousel */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${slide.bg} text-white p-8 flex flex-col justify-between min-h-[220px] transition-all duration-500`}>
            {/* Decorative circle */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -right-4 bottom-0 w-32 h-32 bg-white/5 rounded-full" />

            <div className="relative z-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4">{slide.tag}</span>
              <h3 className="text-[28px] font-bold leading-tight">{slide.headline}</h3>
              <p className="text-white/80 text-sm mt-2">{slide.subline}</p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center gap-2 bg-white text-[#C0001B] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                <button onClick={() => setCurrent(c => (c - 1 + promoSlides.length) % promoSlides.length)} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {promoSlides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`} />
                  ))}
                </div>
                <button onClick={() => setCurrent(c => (c + 1) % promoSlides.length)} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
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
