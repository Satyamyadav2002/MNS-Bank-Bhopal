"use client"
import { useState } from "react"
import { Percent, X, TrendingUp, PiggyBank, Home, Briefcase } from "lucide-react"

const rates = [
  { icon: PiggyBank,  label: "Savings A/c", rate: "6.00%", desc: "p.a." },
  { icon: TrendingUp,  label: "FD (1 Year)", rate: "7.00%", desc: "p.a." },
  { icon: Home,        label: "Home Loan",   rate: "8.50%", desc: "onwards" },
  { icon: Briefcase,   label: "Gold Loan",   rate: "9.00%", desc: "onwards" },
]

export function FloatingRateWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-24 md:bottom-20 right-6 z-40">
      {/* Popup */}
      {open && (
        <div className="absolute bottom-14 right-0 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#C0001B] px-5 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm">Quick Rates</span>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
          <div className="divide-y divide-gray-50">
            {rates.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <r.icon className="w-4 h-4 text-[#C0001B]" />
                  <span className="text-sm font-medium text-gray-700">{r.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#C0001B]">{r.rate}</span>
                  <span className="text-[10px] text-gray-400 ml-1">{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-2.5 bg-gray-50 text-center">
            <a href="/interest-rates" className="text-xs font-bold text-[#C0001B] hover:underline">View All Rates →</a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-12 h-12 rounded-full bg-[#C0001B] text-white shadow-[0_4px_20px_rgba(192,0,27,0.4)] flex items-center justify-center hover:bg-[#8B0015] hover:-translate-y-1 transition-all"
        aria-label="Quick Rates"
      >
        <Percent className="w-5 h-5" />
      </button>
    </div>
  )
}
