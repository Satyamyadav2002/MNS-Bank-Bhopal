"use client"
import { useState } from "react"
import { Phone, Globe, Shield } from "lucide-react"

export function UtilityBar() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  
  return (
    <div className="bg-gradient-to-r from-[#6B0012] via-[#8B0015] to-[#6B0012] text-white h-9 text-xs relative z-50 overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative z-10">
        <div className="flex items-center flex-1 overflow-hidden mr-4">
          <div className="animate-marquee whitespace-nowrap h-full flex items-center font-medium tracking-wide">
            <span className="text-white/90 mx-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] shadow-[0_0_6px_rgba(240,201,106,0.6)]" />
              Special FD Rate: <strong className="text-[#F0C96A]">7.00%</strong> for 1 Year
            </span>
            <span className="text-[#C9922A]/60 text-[8px]">◆</span>
            <span className="text-white/90 mx-6">Now Hiring — <strong className="text-[#F0C96A]">Check Careers</strong></span>
            <span className="text-[#C9922A]/60 text-[8px]">◆</span>
            <span className="text-white/90 mx-6 flex items-center gap-2">
              <Shield className="w-3 h-3 text-[#F0C96A]" />
              Deposits insured up to <strong className="text-[#F0C96A]">₹5 Lakh</strong> by DICGC
            </span>
            <span className="text-[#C9922A]/60 text-[8px]">◆</span>
            <span className="text-white/90 mx-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0C96A] shadow-[0_0_6px_rgba(240,201,106,0.6)]" />
              Special FD Rate: <strong className="text-[#F0C96A]">7.00%</strong> for 1 Year
            </span>
            <span className="text-[#C9922A]/60 text-[8px]">◆</span>
            <span className="text-white/90 mx-6">Now Hiring — <strong className="text-[#F0C96A]">Check Careers</strong></span>
            <span className="text-[#C9922A]/60 text-[8px]">◆</span>
            <span className="text-white/90 mx-6 flex items-center gap-2">
              <Shield className="w-3 h-3 text-[#F0C96A]" />
              Deposits insured up to <strong className="text-[#F0C96A]">₹5 Lakh</strong> by DICGC
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.08] border border-[#F0C96A]/30 rounded-full text-[10px] font-bold tracking-wider text-[#F0C96A] uppercase backdrop-blur-sm">
            <Shield className="w-3 h-3" />
            DICGC ₹5L
          </div>
          <div className="w-px h-4 bg-white/15 hidden lg:block" />
          <a href="tel:07554098000" className="flex items-center gap-1.5 hover:text-[#F0C96A] transition-colors font-medium text-white/80">
            <Phone className="w-3 h-3" />
            <span className="hidden sm:inline">0755-4098000</span>
          </a>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <button 
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 hover:text-[#F0C96A] transition-colors font-bold text-white/80 bg-white/[0.06] px-2.5 py-1 rounded-full border border-white/10"
          >
            <Globe className="w-3 h-3" />
            <span className="text-[10px]">{lang === "en" ? "EN" : "हिं"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
