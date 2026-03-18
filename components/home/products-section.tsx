"use client"
import { useState } from "react"
import { ArrowRight, Wallet, PiggyBank, Smartphone, Building2, CreditCard, Lock, Star, Monitor } from "lucide-react"

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("Accounts")
  
  const tabs = ["Accounts", "Loans", "Deposits", "Services"]
  
  const products = {
    Accounts: [
      { name: "Savings Account", desc: "Earn competitive interest on your daily savings with auto-sweep facility.", rate: "6.00% p.a.", icon: PiggyBank, theme: "red", ribbon: "Most Popular", ribbonColor: "red" },
      { name: "Current Account", desc: "Specially designed for businesses and traders with high transaction volume.", rate: null, icon: Wallet, theme: "red" },
      { name: "Digital Account", desc: "Open an account online instantly from home with Video KYC.", rate: null, icon: Smartphone, theme: "red" },
    ],
    Loans: [
      { name: "Home Loan", desc: "Make your dream home a reality with long tenure and easy EMIs.", rate: "From 8.50%", icon: Building2, theme: "green" },
      { name: "Gold Loan", desc: "Quick approval, minimal documentation for your urgent needs.", rate: "From 9.00%", icon: Star, theme: "green" },
      { name: "Car Loan", desc: "Drive home your dream car with up to 100% on-road funding.", rate: "From 9.50%", icon: CreditCard, theme: "green" },
    ],
    Deposits: [
      { name: "1-Year Special FD", desc: "Guaranteed high returns with flexible payout options.", rate: "7.00% p.a.", icon: Lock, theme: "gold", ribbon: "Best Rate", ribbonColor: "gold" },
      { name: "Recurring Deposit", desc: "Build wealth systematically with small monthly deposits.", rate: "Up to 6.50%", icon: PiggyBank, theme: "gold" },
      { name: "Double Deposit", desc: "Our flagship scheme to double your money in record time.", rate: "Special Rate", icon: Star, theme: "gold" },
    ],
    Services: [
      { name: "Net Banking", desc: "Manage your finances from anywhere, anytime.", rate: null, icon: Monitor, theme: "charcoal" },
      { name: "Mobile App", desc: "Bank in your pocket with the Mahanagar secure app.", rate: null, icon: Smartphone, theme: "charcoal" },
      { name: "UPI Payments", desc: "Instant, real-time money transfers 24x7.", rate: null, icon: CreditCard, theme: "charcoal" },
    ],
  }

  const getIconThemeClasses = (theme: string) => {
    switch(theme) {
      case "red": return "bg-gradient-to-br from-[#C0001B]/12 to-[#C0001B]/5 text-[#C0001B]";
      case "gold": return "bg-gradient-to-br from-[#C9922A]/15 to-[#C9922A]/5 text-[#A87820]";
      case "green": return "bg-gradient-to-br from-emerald-500/12 to-emerald-500/5 text-emerald-600";
      case "charcoal": return "bg-gradient-to-br from-[#2B2D42]/10 to-[#2B2D42]/5 text-[#2B2D42]";
      default: return "bg-[#FAF6EF] text-[#2B2D42]";
    }
  }

  return (
    <section className="py-28 bg-white relative overflow-hidden text-center sm:text-left z-10">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C9922A]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C0001B]/[0.02] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
            <span className="eyebrow-label border-0 pl-0">OUR OFFERINGS</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
          </div>
          <h2 className="font-serif text-4xl lg:text-[48px] font-bold text-[#2B2D42] text-center leading-tight">
            Products You&apos;ll Love
          </h2>
        </div>
        
        {/* Premium Tab Selector with sliding indicator */}
        <div className="flex justify-center flex-wrap gap-2 mb-16 relative">
          <div className="flex bg-[#FAF6EF]/80 rounded-full p-1.5 border border-[#E5E0D8]/50 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-400 text-sm tracking-wide relative z-10 ${
                  activeTab === tab 
                    ? "bg-[#2B2D42] text-white shadow-[0_4px_16px_rgba(43,45,66,0.25)]" 
                    : "text-[#6B7280] hover:text-[#2B2D42]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products[activeTab as keyof typeof products].map((product, i) => (
            <div key={`${activeTab}-${i}`} className="group relative bg-white/90 backdrop-blur-sm rounded-[22px] border border-[#E5E0D8] p-8 premium-card overflow-hidden flex flex-col h-full text-left z-10 hover:border-[#C9922A]/40">
              
              {/* Premium Bottom Gradient Bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C0001B] via-[#C9922A] to-[#F0C96A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ribbons */}
              {product.ribbon && (
                <div className="absolute -top-1 -right-1 overflow-hidden w-28 h-28 z-20">
                  <div className={`absolute top-6 -right-8 w-40 text-center text-[10px] font-bold uppercase tracking-wider py-1.5 shadow-md transform rotate-45 ${
                    product.ribbonColor === "red" ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015] text-white" : "bg-gradient-to-r from-[#C9922A] to-[#A87820] text-white"
                  }`}>
                    {product.ribbon}
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg ${getIconThemeClasses(product.theme)}`}>
                <product.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-[22px] font-bold text-[#2B2D42] mb-3">{product.name}</h3>
              <p className="text-[#6B7280] leading-relaxed mb-8 flex-1 text-[15px]">{product.desc}</p>
              
              <div className="mt-auto relative">
                {product.rate && (
                  <div className="mb-6 inline-flex bg-gradient-to-r from-[#C9922A] to-[#F0C96A] text-[#1E2030] px-5 py-2 rounded-full text-sm font-bold shadow-[0_4px_16px_rgba(201,146,42,0.25)] transform transition-all duration-400 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(201,146,42,0.35)]">
                    {product.rate}
                  </div>
                )}
                
                <button className="flex items-center text-[#C0001B] font-bold group-hover:text-[#8B0015] transition-colors duration-300">
                  Apply Now 
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
