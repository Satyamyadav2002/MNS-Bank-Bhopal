"use client"
import { useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"

export function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("Bank News")
  
  const tabs = ["Bank News", "Deposit Rates", "RBI Updates"]
  
  const news = {
    "Bank News": [
      { date: "05 Mar 2026", title: "Annual General Meeting Notice", excerpt: "76th AGM is scheduled for March 28, 2026 at 11:00 AM at Head Office.", tag: "Notice" },
      { date: "01 Mar 2026", title: "New Karond Branch Opening Soon", excerpt: "Expanding our footprint. We will soon be opening our new branch in Karond area.", tag: "Expansion" },
      { date: "25 Feb 2026", title: "Holiday Notice - Holi", excerpt: "All branches will remain closed on the occasion of Holi festival.", tag: "Holiday" },
    ],
    "Deposit Rates": [
      { date: "01 Mar 2026", title: "Special 1-Year FD Rate Extended", excerpt: "Our special 7.00% p.a. interest rate for 1 Year FD has been extended till March 31, 2026.", tag: "FD" },
      { date: "15 Feb 2026", title: "Senior Citizen Extra Benefits", excerpt: "Senior citizens now get an additional 0.50% interest across all FD tenures.", tag: "Senior" },
      { date: "01 Feb 2026", title: "Savings Account Base Rate", excerpt: "Interest rate on savings account is currently maintained at a highly competitive 6.00% p.a.", tag: "Savings" },
    ],
    "RBI Updates": [
      { date: "28 Feb 2026", title: "RBI Monetary Policy Update", excerpt: "Repo rate remains unchanged at 6.50% in the latest monetary policy review.", tag: "Policy" },
      { date: "15 Feb 2026", title: "Video KYC Guidelines Update", excerpt: "RBI issues new simplified guidelines for Video KYC onboarding for UCBs.", tag: "KYC" },
      { date: "01 Feb 2026", title: "Cybersecurity Framework", excerpt: "New baseline cybersecurity framework released for all Urban Cooperative Banks.", tag: "Security" },
    ],
  }
  
  return (
    <section className="py-28 section-warm-gradient relative">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
            <span className="eyebrow-label border-0 pl-0">STAY INFORMED</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
          </div>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-[#2B2D42]">
            Latest News & Updates
          </h2>
        </div>
        
        {/* Premium Tabs with sliding gold underline */}
        <div className="flex justify-center mb-14 max-w-xl mx-auto">
          <div className="flex border-b border-[#E5E0D8] w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-bold relative transition-colors duration-300 ${
                  activeTab === tab 
                    ? "text-[#C0001B]" 
                    : "text-[#6B7280] hover:text-[#2B2D42]"
                }`}
              >
                {tab}
                <div className={`absolute bottom-[-1px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C0001B] to-[#C9922A] rounded-full transition-all duration-400 ${activeTab === tab ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {news[activeTab as keyof typeof news].map((item, i) => (
            <div key={`${activeTab}-${i}`} className="group bg-white/80 backdrop-blur-sm border border-[#E5E0D8]/80 rounded-[20px] p-7 premium-card hover:border-[#C9922A]/30 relative overflow-hidden">
               {/* Bottom gradient line */}
               <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C0001B] to-[#C9922A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="flex items-center gap-3 mb-5">
                 <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C0001B] bg-[#C0001B]/[0.06] px-3 py-1.5 rounded-full">
                   <Calendar className="w-3 h-3" />
                   {item.date}
                 </div>
                 <span className="text-[10px] font-bold text-[#C9922A] bg-[#C9922A]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">{item.tag}</span>
               </div>
               <h3 className="font-bold text-lg text-[#2B2D42] mb-3 group-hover:text-[#C0001B] transition-colors duration-300 line-clamp-2">{item.title}</h3>
               <p className="text-[#6B7280] text-[14px] mb-6 line-clamp-3 leading-relaxed">{item.excerpt}</p>
               <button className="text-[#2B2D42] font-bold text-sm flex items-center gap-2 group-hover:text-[#C0001B] transition-colors duration-300">
                 Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
               </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
