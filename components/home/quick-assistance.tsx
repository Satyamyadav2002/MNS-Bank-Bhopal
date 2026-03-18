"use client"
import Link from "next/link"
import { Landmark, Wallet, PiggyBank, Calculator, PhoneCall, ArrowRight, Home } from "lucide-react"

export function QuickAssistance() {
  const items = [
    { icon: Landmark, label: "Open Account", desc: "Start banking today", href: "/accounts/savings-account", color: "text-[#C0001B]", bg: "from-[#C0001B]/10 to-[#C0001B]/5", borderHover: "hover:border-[#C0001B]/30" },
    { icon: Wallet, label: "Need a Loan", desc: "Quick approvals", href: "/loans", color: "text-[#C9922A]", bg: "from-[#C9922A]/12 to-[#C9922A]/5", borderHover: "hover:border-[#C9922A]/30" },
    { icon: PiggyBank, label: "Save & Invest", desc: "Grow your wealth", href: "/deposits", color: "text-emerald-600", bg: "from-emerald-500/10 to-emerald-500/5", borderHover: "hover:border-emerald-500/30" },
    { icon: Home, label: "Home Loan", desc: "Dream home awaits", href: "/loans/home-loans", color: "text-[#2B2D42]", bg: "from-[#2B2D42]/10 to-[#2B2D42]/5", borderHover: "hover:border-[#2B2D42]/30" },
    { icon: Calculator, label: "EMI Calculator", desc: "Plan your EMI", href: "/emi-calculator", color: "text-blue-600", bg: "from-blue-500/10 to-blue-500/5", borderHover: "hover:border-blue-500/30" },
    { icon: PhoneCall, label: "Talk to Us", desc: "We're here 24/7", href: "/contact-us", color: "text-[#C0001B]", bg: "from-[#C0001B]/10 to-[#C0001B]/5", borderHover: "hover:border-[#C0001B]/30" },
  ]

  return (
    <section className="py-24 section-warm-gradient relative">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
            <span className="eyebrow-label border-0 pl-0">HOW CAN WE HELP</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
          </div>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-[#2B2D42]">
            How Can We Help You?
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {items.map((item, i) => (
            <Link href={item.href} key={i} className={`group bg-white/80 backdrop-blur-sm rounded-[20px] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] premium-card cursor-pointer border border-[#E5E0D8]/80 ${item.borderHover} relative overflow-hidden`}>
              {/* Bottom gold gradient line on hover */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#C0001B] to-[#C9922A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="font-bold text-[#2B2D42] group-hover:text-[#C0001B] transition-colors duration-300 text-[14px] mb-1">{item.label}</h3>
              <p className="text-[11px] text-[#6B7280] font-medium mb-3">{item.desc}</p>
              <ArrowRight className="w-4 h-4 text-[#C9922A] mx-auto opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
