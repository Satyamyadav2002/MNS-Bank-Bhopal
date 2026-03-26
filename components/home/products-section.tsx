"use client"
import { useState } from "react"
import { ArrowRight, PiggyBank, Landmark, Home, Users, Car, GraduationCap, CreditCard, Monitor, Smartphone, Repeat, Coins, Building2, Sparkles } from "lucide-react"
import Link from "next/link"

const tabs = [
  {
    id: "accounts",
    label: "Accounts",
    icon: PiggyBank,
    products: [
      { name: "Savings Account", desc: "Earn up to 6% interest with zero minimum balance requirement.", rate: "6.00% p.a.", href: "/savings-account", icon: PiggyBank },
      { name: "Current Account", desc: "High-volume transaction account for businesses and traders.", rate: null, href: "/current-account", icon: Building2 },
      { name: "Safe Deposit Locker", desc: "Secure your valuables and important documents safely.", rate: null, href: "/locker", icon: Landmark },
    ]
  },
  {
    id: "deposits",
    label: "Deposits",
    icon: Coins,
    products: [
      { name: "Time Deposit (FD)", desc: "Fixed deposit with guaranteed high returns and flexible payout.", rate: "7.00% p.a.", href: "/time-deposit", icon: Landmark, hot: true },
      { name: "Recurring Deposit", desc: "Build wealth systematically with small monthly deposits.", rate: "6.50% p.a.", href: "/recurring-deposit", icon: Repeat },
      { name: "Double Deposit", desc: "Our flagship scheme designed to double your money in record time.", rate: "Special Rate", href: "/double-deposit", icon: Coins },
    ]
  },
  {
    id: "loans",
    label: "Loans",
    icon: Home,
    products: [
      { name: "Gold Loan", desc: "Quick approval with minimal documentation against gold jewellery.", rate: "From 9.00%", href: "/gold-loan", icon: Coins, hot: true },
      { name: "Home Loan", desc: "Make your dream home a reality with affordable long-tenure EMIs.", rate: "From 8.50%", href: "/home-loan", icon: Home },
      { name: "Personal Loan", desc: "Instant personal finance for any of your life needs.", rate: "From 12.00%", href: "/personal-loan", icon: Users },
      { name: "Car Loan", desc: "Drive your dream car with up to 100% on-road funding.", rate: "From 9.50%", href: "/car-loan", icon: Car },
      { name: "Education Loan", desc: "Invest in your future with a loan for higher education.", rate: "From 10.00%", href: "/education-loan", icon: GraduationCap },
      { name: "Working Capital", desc: "Keep your business operations running smoothly.", rate: "From 13.00%", href: "/working-capital-loan", icon: Building2 },
    ]
  },
  {
    id: "digital",
    label: "Digital Services",
    icon: Smartphone,
    products: [
      { name: "Net Banking", desc: "Access and manage your account securely from anywhere online.", rate: null, href: "/net-banking", icon: Monitor },
      { name: "Mobile Banking", desc: "Full banking in your pocket with the MNS Bank secure app.", rate: null, href: "/mobile-banking", icon: Smartphone },
      { name: "UPI / QR Payments", desc: "Instant, real-time money transfers 24×7 via UPI.", rate: null, href: "/upi-qr", icon: CreditCard },
    ]
  },
]

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("accounts")
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <section className="bg-white relative z-10">

      {/* Sticky product sub-nav with icons */}
      <div className="sticky top-[108px] z-40 bg-gradient-to-r from-[#C0001B] to-[#9B0016] shadow-[0_4px_20px_rgba(192,0,27,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex-shrink-0 ${
                  activeTab === tab.id
                    ? "text-white border-white"
                    : "text-white/60 border-transparent hover:text-white/90 hover:border-white/30"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#C0001B]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B]">Our Offerings</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{current.label}</h2>
          </div>
          <Link href={`/${current.id}`} className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#C0001B] bg-[#C0001B]/5 px-5 py-2.5 rounded-xl hover:bg-[#C0001B]/10 transition-colors">
            Explore all {current.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-[0_16px_48px_rgba(192,0,27,0.08)] transition-all relative overflow-hidden"
            >
              {/* Hot badge */}
              {"hot" in product && product.hot && (
                <div className="absolute top-4 right-4 bg-[#C0001B] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> Popular
                </div>
              )}

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C0001B] to-[#E5293E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon with fill transition */}
              <div className="w-14 h-14 rounded-2xl bg-[#C0001B]/8 flex items-center justify-center mb-5 group-hover:bg-[#C0001B] transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-[#C0001B]/20">
                <product.icon className="w-6 h-6 text-[#C0001B] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-[17px] font-bold text-gray-900 mb-2 group-hover:text-[#C0001B] transition-colors">{product.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{product.desc}</p>

              <div className="flex items-center justify-between mt-auto">
                {product.rate && (
                  <span className="text-sm font-bold text-[#C0001B] bg-[#C0001B]/8 px-3 py-1.5 rounded-lg">{product.rate}</span>
                )}
                <span className={`text-sm font-bold text-[#C0001B] flex items-center gap-1 group-hover:gap-2 transition-all ${product.rate ? "ml-auto" : ""}`}>
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
