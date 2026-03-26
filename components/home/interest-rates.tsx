"use client"
import { useState, useEffect, useMemo } from "react"
import { TrendingUp, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState(value)
  useEffect(() => {
    let start = display
    const end = value
    if (start === end) return
    const duration = 600
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setDisplay(start + (end - start) * ease)
      if (p < 1) requestAnimationFrame(tick)
      else setDisplay(end)
    }
    requestAnimationFrame(tick)
  }, [value])
  return <span>₹{Math.round(display).toLocaleString("en-IN")}</span>
}

const FD_RATES: Record<string, Record<string, number>> = {
  "6M":  { general: 5.50, senior: 6.00 },
  "1Y":  { general: 7.00, senior: 7.50 },
  "2Y":  { general: 6.50, senior: 7.00 },
  "3Y":  { general: 6.25, senior: 6.75 },
}

const rates = [
  { label: "7 – 45 days",          gen: "4.00%", snr: "4.50%" },
  { label: "46 – 179 days",        gen: "5.00%", snr: "5.50%" },
  { label: "180 – 364 days",       gen: "5.50%", snr: "6.00%" },
  { label: "1 Year Special",       gen: "7.00%", snr: "7.50%", best: true },
  { label: "Above 1 Year – 2 Yr",  gen: "6.50%", snr: "7.00%" },
  { label: "2 Years – 5 Years",    gen: "6.25%", snr: "6.75%" },
]

export function InterestRatesWidget() {
  const [amount, setAmount] = useState(100000)
  const [tenure, setTenure] = useState("1Y")
  const [customerType, setCustomerType] = useState<"general" | "senior">("general")

  const rate = FD_RATES[tenure][customerType]
  const years = tenure === "6M" ? 0.5 : tenure === "1Y" ? 1 : tenure === "2Y" ? 2 : 3
  const interest = amount * rate / 100 * years
  const maturity = amount + interest
  const gainPct = Math.min((interest / maturity) * 100, 100)

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: Rates Table ── */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 block mb-3">Latest Rates</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Interest Rates</h2>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-500">
                <Clock className="w-3.5 h-3.5 text-[#C0001B]" />
                Updated: 01 March 2026
              </div>
            </div>

            {/* Header row */}
            <div className="flex items-center px-5 pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <div className="flex-1">Tenure</div>
              <div className="w-[90px] text-right">General</div>
              <div className="w-[110px] text-right">
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-0.5 rounded-full inline-block">Senior</span>
              </div>
            </div>

            <div className="space-y-2">
              {rates.map((r, i) => (
                <div key={i} className={`flex items-center px-5 py-4 rounded-2xl transition-all ${
                  r.best
                    ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015] shadow-[0_8px_24px_rgba(192,0,27,0.2)]"
                    : "bg-gray-50 hover:bg-gray-100/70 border border-transparent hover:border-[#C0001B]/10"
                }`}>
                  <div className="flex-1 flex items-center gap-2.5">
                    <span className={`font-semibold text-[15px] ${r.best ? "text-white" : "text-gray-800"}`}>{r.label}</span>
                    {r.best && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-yellow-400 text-[#C0001B] px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        ⭐ Best Rate
                      </span>
                    )}
                  </div>
                  <div className={`w-[90px] text-right font-bold text-[15px] ${r.best ? "text-white" : "text-gray-900"}`}>{r.gen}</div>
                  <div className={`w-[110px] text-right font-bold text-[15px] ${r.best ? "text-yellow-300" : "text-emerald-600"}`}>{r.snr}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-gray-400">*Subject to change. Senior Citizen benefit of +0.50% applicable.</p>
              <Link href="/interest-rates" className="text-sm font-bold text-[#C0001B] flex items-center gap-1 hover:gap-2 transition-all">
                View all rates <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── Right: FD Calculator ── */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="px-7 py-5 border-b border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#C0001B]/8 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#C0001B]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-base">FD Calculator</div>
                  <div className="text-xs text-gray-400">Plan your growth</div>
                </div>
              </div>

              <div className="px-7 py-6 space-y-6">
                {/* Investment */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Investment</span>
                    <span className="text-xl font-bold text-gray-900">₹{amount.toLocaleString("en-IN")}</span>
                  </div>
                  <input type="range" min={10000} max={5000000} step={10000}
                    value={amount} onChange={e => setAmount(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#C0001B]" />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
                    <span>₹10K</span><span>₹50L</span>
                  </div>
                </div>

                {/* Tenure pills */}
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5 block">Tenure</span>
                  <div className="grid grid-cols-4 gap-2">
                    {["6M", "1Y", "2Y", "3Y"].map(t => (
                      <button key={t} onClick={() => setTenure(t)}
                        className={`py-2.5 rounded-xl font-bold text-sm transition-all ${
                          tenure === t
                            ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer type */}
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5 block">Customer Type</span>
                  <div className="grid grid-cols-2 gap-1.5 bg-gray-100 p-1.5 rounded-2xl">
                    {(["general", "senior"] as const).map(t => (
                      <button key={t} onClick={() => setCustomerType(t)}
                        className={`py-2.5 rounded-xl text-sm font-bold transition-all ${
                          customerType === t
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}>
                        {t === "general" ? "General" : "Senior Citizen"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rate badge */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFF5F6] border border-[#C0001B]/10 rounded-xl">
                  <span className="text-xs text-gray-500">Rate applied</span>
                  <span className="text-sm font-bold text-[#C0001B]">{rate.toFixed(2)}% p.a.</span>
                </div>

                {/* Result card */}
                <div className="bg-gray-900 rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Maturity Amount</p>
                    <div className="text-2xl font-bold text-white">
                      <CountUp value={maturity} />
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        You earn ₹{Math.round(interest).toLocaleString("en-IN")} extra
                      </span>
                    </div>
                  </div>
                  {/* Donut */}
                  <svg width={64} height={64} viewBox="0 0 64 64" className="shrink-0">
                    <circle cx={32} cy={32} r={26} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={8} />
                    <circle cx={32} cy={32} r={26} fill="none" stroke="#C0001B" strokeWidth={8}
                      strokeDasharray={`${(gainPct / 100) * 2 * Math.PI * 26} ${2 * Math.PI * 26}`}
                      strokeLinecap="round" transform="rotate(-90 32 32)"
                      style={{ transition: "stroke-dasharray 0.5s ease" }} />
                    <text x="50%" y="54%" textAnchor="middle" style={{ fontSize: 11, fill: "white", fontWeight: 700 }}>
                      {Math.round(gainPct)}%
                    </text>
                  </svg>
                </div>

                <Link href="/time-deposit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.25)]">
                  Open Fixed Deposit <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
