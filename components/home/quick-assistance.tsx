"use client"
import Link from "next/link"
import { Landmark, Wallet, PiggyBank, Calculator, PhoneCall, ArrowRight, Home } from "lucide-react"

export function QuickAssistance() {
  const items = [
    { icon: Landmark, label: "Open Account", desc: "Start banking today", href: "/savings-account" },
    { icon: Wallet, label: "Need a Loan", desc: "Quick approvals", href: "/gold-loan" },
    { icon: PiggyBank, label: "Save & Invest", desc: "Grow your wealth", href: "/time-deposit" },
    { icon: Home, label: "Home Loan", desc: "Dream home awaits", href: "/home-loan" },
    { icon: Calculator, label: "EMI Calculator", desc: "Plan your EMI", href: "/emi-calculator" },
    { icon: PhoneCall, label: "Talk to Us", desc: "We're here for you", href: "/contact-us" },
  ]

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">HOW CAN WE HELP</span>
          <h2 className="text-3xl font-bold text-gray-900">How Can We Help You?</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, i) => (
            <Link href={item.href} key={i} className="group bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-[#C0001B]/20 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C0001B]/8 flex items-center justify-center mb-3 group-hover:bg-[#C0001B] transition-colors">
                <item.icon className="w-6 h-6 text-[#C0001B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-[#C0001B] transition-colors text-sm mb-0.5">{item.label}</h3>
              <p className="text-[11px] text-gray-400 font-medium">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
