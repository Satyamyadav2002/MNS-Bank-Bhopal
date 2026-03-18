"use client"
import { useState, useEffect } from "react"
import { Calculator, ArrowRight, Clock, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

function CountUpNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    const duration = 800;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeProgress;
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return <span>{prefix}{Math.round(displayValue).toLocaleString('en-IN')}{suffix}</span>;
}

export function InterestRatesWidget() {
  const [amount, setAmount] = useState(100000)
  const [tenure, setTenure] = useState("1Y")
  const [type, setType] = useState("general")

  const calculateReturn = () => {
    const rate = type === "senior" ? 7.5 : 7.0
    const years = tenure === "6M" ? 0.5 : tenure === "1Y" ? 1 : tenure === "2Y" ? 2 : 3
    const maturity = amount * Math.pow(1 + rate / 100, years)
    return Math.round(maturity)
  }

  const maturityAmount = calculateReturn()
  const interestEarned = maturityAmount - amount
  const interestPercent = Math.min((interestEarned / maturityAmount) * 100, 100)
  
  const rates = [
    { label: "7–45 days", gen: "4.00%", snr: "4.50%" },
    { label: "46–179 days", gen: "5.00%", snr: "5.50%" },
    { label: "180–364 days", gen: "5.50%", snr: "6.00%" },
    { label: "1 Year Special Deposit", gen: "7.00%", snr: "7.50%", highlight: true },
    { label: "222 Days Special", gen: "5.50%", snr: "6.00%" },
    { label: "360 Days Special", gen: "6.00%", snr: "6.50%" },
  ]

  return (
    <section className="py-28 section-warm-gradient relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT: Rates Table */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start mb-10">
              <span className="eyebrow-label mb-3 border-[#C9922A]">LATEST RATES</span>
              <h3 className="font-serif text-3xl lg:text-[40px] font-bold text-[#2B2D42] mb-4 leading-tight">Interest Rates</h3>
              <div className="inline-flex items-center gap-2 bg-white border border-[#E5E0D8] rounded-full px-4 py-1.5 font-sans text-xs font-bold text-[#6B7280] shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#C9922A]" />
                Updated: 01 March 2026
              </div>
            </div>
            
            {/* Header Row */}
            <div className="flex items-center px-6 pb-4 text-[10px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">
              <div className="flex-1">Tenure</div>
              <div className="w-[100px] text-right pr-2">General</div>
              <div className="w-[120px] text-right">
                <span className="bg-teal-50 text-teal-700 border border-teal-200/60 px-2.5 py-0.5 rounded-full inline-block">Senior</span>
              </div>
            </div>
            
            {/* Rates List */}
            <div className="space-y-2.5">
              {rates.map((r, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "group flex items-center px-6 py-5 rounded-[18px] transition-all duration-400 relative overflow-hidden border",
                    r.highlight 
                      ? "bg-gradient-to-r from-[#A87820] via-[#C9922A] to-[#F0C96A] bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite] border-[#F0C96A]/50 shadow-[0_8px_32px_rgba(201,146,42,0.25)]" 
                      : i % 2 === 0 
                        ? "bg-white/80 backdrop-blur-sm border-transparent hover:border-[#C9922A]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]" 
                        : "bg-[#F5ECE8]/50 border-transparent hover:border-[#C9922A]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                  )}
                >
                  {/* Hover Left Border */}
                  {!r.highlight && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C0001B] to-[#C9922A] rounded-r-full -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
                  )}
                  
                  <div className="flex-1 flex items-center gap-3">
                    <span className={cn(
                      "font-bold text-[15px] z-10",
                      r.highlight ? "text-white" : "text-[#2B2D42]"
                    )}>
                      {r.label}
                    </span>
                    {r.highlight && (
                      <span className="bg-white/95 text-[#A87820] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold shadow-sm whitespace-nowrap z-10">
                        ⭐ Best Rate
                      </span>
                    )}
                  </div>
                  
                  <div className={cn(
                    "w-[100px] text-right font-mono text-lg pr-2 z-10",
                    r.highlight ? "text-white font-bold text-[20px]" : "text-[#2B2D42] font-bold"
                  )}>
                    {r.gen}
                  </div>
                  
                  <div className={cn(
                    "w-[120px] text-right font-mono text-lg z-10",
                    r.highlight ? "text-white font-bold text-[20px]" : "text-teal-700 font-bold"
                  )}>
                    {r.snr}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FD Calculator Widget */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-b from-[#C0001B]/[0.04] to-transparent rounded-[40px] blur-[30px] z-0" />
            
            <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.06)] border border-[#E5E0D8]/80 relative z-10">
              <div className="flex items-center gap-4 mb-10 border-b border-[#E5E0D8] pb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C0001B]/10 to-[#C0001B]/5 flex items-center justify-center">
                  <Calculator className="w-7 h-7 text-[#C0001B]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2B2D42]">FD Calculator</h3>
                  <p className="text-[#6B7280] text-sm font-medium">Plan your growth</p>
                </div>
              </div>
              
              <div className="space-y-8 relative z-20">
                {/* Amount Slider */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280]">Investment</span>
                    <span className="text-[22px] font-bold text-[#2B2D42] font-mono tracking-tight">
                      ₹{amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  
                  <div className="relative pt-2 pb-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-[#C0001B] to-[#C9922A] pointer-events-none z-0" 
                         style={{ width: `${((amount - 10000) / 4990000) * 100}%` }} />
                    <input 
                      type="range" 
                      min="10000" 
                      max="5000000" 
                      step="10000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full relative z-10 appearance-none bg-[#E5E0D8] h-2 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#C0001B] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(192,0,27,0.4)] [&::-webkit-slider-thumb]:cursor-pointer bg-transparent"
                    />
                  </div>
                </div>

                {/* Tenure Selection */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-4">Tenure</div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {["6M", "1Y", "2Y", "3Y"].map(t => (
                      <button 
                        key={t}
                        onClick={() => setTenure(t)}
                        className={`py-3 rounded-xl font-bold transition-all duration-300 text-[15px] ${
                          tenure === t 
                            ? 'bg-[#2B2D42] text-white shadow-[0_4px_16px_rgba(43,45,66,0.25)]' 
                            : 'bg-[#FAF6EF] text-[#2B2D42] hover:bg-[#F0EDE8]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Type */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B7280] mb-4">Customer Type</div>
                  <div className="flex bg-[#FAF6EF] p-1.5 rounded-2xl relative border border-[#E5E0D8]/50">
                    <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${type === 'senior' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`} />
                    <button onClick={() => setType("general")} className={`flex-1 py-3 text-[14px] font-bold relative z-10 transition-colors duration-300 ${type === 'general' ? 'text-[#2B2D42]' : 'text-[#6B7280]'}`}>General</button>
                    <button onClick={() => setType("senior")} className={`flex-1 py-3 text-[14px] font-bold relative z-10 transition-colors duration-300 ${type === 'senior' ? 'text-[#2B2D42]' : 'text-[#6B7280]'}`}>Senior Citizen</button>
                  </div>
                </div>

                {/* Premium Result Box */}
                <div className="mt-8 bg-gradient-to-br from-[#2B2D42] to-[#1E2030] rounded-[22px] p-8 shadow-[0_24px_48px_rgba(30,32,48,0.3)] relative overflow-hidden">
                  <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#C9922A]/10 rounded-full blur-[40px]" />
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9922A]/20 to-transparent" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.12em] mb-2">Maturity Amount</p>
                      <div className="font-serif text-[38px] font-bold gold-shimmer leading-none mb-3">
                        <CountUpNumber value={maturityAmount} prefix="₹" />
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full text-[13px] font-bold border border-emerald-500/15">
                        <TrendingUp className="w-3.5 h-3.5" />
                        You earn <CountUpNumber value={interestEarned} prefix="₹" /> extra
                      </div>
                    </div>
                    
                    {/* CSS Donut Chart */}
                    <div className="relative w-20 h-20 shrink-0">
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(201,146,42,0.15)]" style={{ background: `conic-gradient(#C9922A 0% ${interestPercent}%, rgba(255,255,255,0.06) ${interestPercent}% 100%)` }} />
                      <div className="absolute inset-[6px] bg-gradient-to-br from-[#2B2D42] to-[#1E2030] rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[#C9922A]">{Math.round(interestPercent)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
