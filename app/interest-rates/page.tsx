"use client"
import { useState, useMemo } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ChevronRight, Clock, TrendingUp, ArrowUpRight } from "lucide-react"

// ── Rate Data ────────────────────────────────────────────────────────────────
const fdRates = [
  { tenure: "7 – 45 days",          general: 4.00, senior: 4.50 },
  { tenure: "46 – 179 days",        general: 5.00, senior: 5.50 },
  { tenure: "180 – 364 days",       general: 5.50, senior: 6.00 },
  { tenure: "1 Year Special",       general: 7.00, senior: 7.50, best: true },
  { tenure: "Above 1 Year – 2 Yr",  general: 6.50, senior: 7.00 },
  { tenure: "2 Years – 5 Years",    general: 6.25, senior: 6.75 },
  { tenure: "Above 5 Years",        general: 6.00, senior: 6.50 },
]

const rdRates = [
  { tenure: "6 Months",   general: 5.00, senior: 5.50 },
  { tenure: "1 Year",     general: 6.50, senior: 7.00, best: true },
  { tenure: "2 Years",    general: 6.25, senior: 6.75 },
  { tenure: "3 Years",    general: 6.00, senior: 6.50 },
  { tenure: "5 Years",    general: 5.75, senior: 6.25 },
]

const loanRates = [
  { product: "Home Loan",               from: 8.50,  to: 10.50 },
  { product: "Gold Loan",               from: 9.00,  to: 12.00 },
  { product: "Car Loan",                from: 9.50,  to: 13.00 },
  { product: "Education Loan",          from: 10.00, to: 14.00 },
  { product: "Personal Loan",           from: 12.00, to: 16.00 },
  { product: "Loan Against Property",   from: 10.50, to: 14.00 },
  { product: "Festival Loan",           from: 11.00, to: 15.00, best: true },
]

// ── FD Calculator ────────────────────────────────────────────────────────────
const TENURE_OPTIONS = [
  { label: "6M", months: 6   },
  { label: "1Y", months: 12  },
  { label: "2Y", months: 24  },
  { label: "3Y", months: 36  },
]

function calcFD(principal: number, ratePercent: number, months: number) {
  const r = ratePercent / 100
  // Simple interest (cooperative bank style for FD)
  const interest = principal * r * (months / 12)
  return { maturity: principal + interest, interest }
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(n))
}

// Mini donut
function MiniDonut({ pct }: { pct: number }) {
  const r = 26, c = 2 * Math.PI * r
  const dash = (pct / 100) * c
  return (
    <svg width={64} height={64} viewBox="0 0 64 64">
      <circle cx={32} cy={32} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={8} />
      <circle cx={32} cy={32} r={r} fill="none" stroke="#C0001B" strokeWidth={8}
        strokeDasharray={`${dash} ${c - dash}`} strokeLinecap="round"
        transform="rotate(-90 32 32)" style={{ transition: "stroke-dasharray 0.5s" }} />
      <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
        className="text-[10px]" style={{ fontSize: 10, fill: "white", fontWeight: 700 }}>
        {Math.round(pct)}%
      </text>
    </svg>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
type RateTab = "fd" | "rd" | "loans"

export default function InterestRatesPage() {
  const [rateTab, setRateTab] = useState<RateTab>("fd")
  // FD Calculator state
  const [investment, setInvestment] = useState(100000)
  const [tenureIdx, setTenureIdx] = useState(1)  // default 1Y
  const [customerType, setCustomerType] = useState<"general" | "senior">("general")

  const selectedTenure = TENURE_OPTIONS[tenureIdx]
  const selectedRate = rateTab === "fd"
    ? (customerType === "general" ? 7.00 : 7.50)  // best FD rate
    : 0

  // Pick the applicable rate from fdRates for actual calculation
  const fdRate = useMemo(() => {
    const m = selectedTenure.months
    if (m <= 45/30)  return customerType === "general" ? 4.00 : 4.50
    if (m < 6)       return customerType === "general" ? 5.00 : 5.50
    if (m < 12)      return customerType === "general" ? 5.50 : 6.00
    if (m === 12)    return customerType === "general" ? 7.00 : 7.50
    if (m <= 24)     return customerType === "general" ? 6.50 : 7.00
    return customerType === "general" ? 6.25 : 6.75
  }, [selectedTenure, customerType])

  const { maturity, interest } = useMemo(
    () => calcFD(investment, fdRate, selectedTenure.months),
    [investment, fdRate, selectedTenure]
  )

  const gainPct = investment > 0 ? (interest / investment) * 100 : 0

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans bg-[#FAFAF8]">
        <SegmentSwitcher />
        <Header />

        {/* Banner */}
        <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B]">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-600">Interest Rates</span>
            </nav>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3">Latest Rates</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Interest Rates</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Updated: 01 March 2026 &nbsp;·&nbsp; Subject to change without prior notice</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Rate category tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {([
              { id: "fd", label: "Fixed Deposit" },
              { id: "rd", label: "Recurring Deposit" },
              { id: "loans", label: "Loan Rates" },
            ] as { id: RateTab; label: string }[]).map(t => (
              <button key={t.id} onClick={() => setRateTab(t.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${rateTab === t.id ? "bg-[#C0001B] text-white shadow-md" : "bg-white border border-gray-200 text-gray-600 hover:border-[#C0001B]/30"}`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* ── Left: Rate Table ── */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* FD rates */}
              {rateTab === "fd" && (
                <>
                  <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tenure</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">General</span>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest text-right flex items-center justify-end gap-1">
                      Senior <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold">+0.50%</span>
                    </span>
                  </div>
                  {fdRates.map((row, i) => (
                    <div key={i}
                      className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 transition-all ${row.best ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015] text-white" : "hover:bg-gray-50/60"}`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${row.best ? "text-white" : "text-gray-700"}`}>{row.tenure}</span>
                        {row.best && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-yellow-400 text-[#C0001B] px-2 py-0.5 rounded-full">⭐ Best Rate</span>
                        )}
                      </div>
                      <span className={`text-sm font-bold text-right ${row.best ? "text-white" : "text-gray-900"}`}>{row.general.toFixed(2)}%</span>
                      <span className={`text-sm font-bold text-right ${row.best ? "text-yellow-300" : "text-emerald-600"}`}>{row.senior.toFixed(2)}%</span>
                    </div>
                  ))}
                </>
              )}

              {/* RD rates */}
              {rateTab === "rd" && (
                <>
                  <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tenure</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">General</span>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest text-right">Senior</span>
                  </div>
                  {rdRates.map((row, i) => (
                    <div key={i}
                      className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 transition-all ${row.best ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015] text-white" : "hover:bg-gray-50/60"}`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${row.best ? "text-white" : "text-gray-700"}`}>{row.tenure}</span>
                        {row.best && <span className="text-[9px] font-bold bg-yellow-400 text-[#C0001B] px-2 py-0.5 rounded-full">⭐ Best Rate</span>}
                      </div>
                      <span className={`text-sm font-bold text-right ${row.best ? "text-white" : "text-gray-900"}`}>{row.general.toFixed(2)}%</span>
                      <span className={`text-sm font-bold text-right ${row.best ? "text-yellow-300" : "text-emerald-600"}`}>{row.senior.toFixed(2)}%</span>
                    </div>
                  ))}
                </>
              )}

              {/* Loan rates */}
              {rateTab === "loans" && (
                <>
                  <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest col-span-2">Product</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Rate p.a.</span>
                  </div>
                  {loanRates.map((row, i) => (
                    <div key={i}
                      className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 transition-all ${row.best ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015]" : "hover:bg-gray-50/60"}`}>
                      <div className="col-span-2 flex items-center gap-2">
                        <span className={`text-sm font-semibold ${row.best ? "text-white" : "text-gray-700"}`}>{row.product}</span>
                        {row.best && <span className="text-[9px] font-bold bg-yellow-400 text-[#C0001B] px-2 py-0.5 rounded-full">⭐ Special</span>}
                      </div>
                      <span className={`text-sm font-bold text-right ${row.best ? "text-white" : "text-[#C0001B]"}`}>
                        {row.from.toFixed(2)}% – {row.to.toFixed(2)}%
                      </span>
                    </div>
                  ))}
                </>
              )}

              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <p className="text-[11px] text-gray-400">*Rates effective 1 March 2026. Subject to change. Senior citizen benefit on deposits only.</p>
              </div>
            </div>

            {/* ── Right: FD Calculator ── */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#C0001B]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">FD Calculator</div>
                  <div className="text-xs text-gray-400">Plan your growth</div>
                </div>
              </div>

              <div className="px-6 py-5 space-y-6">
                {/* Investment slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Investment</span>
                    <span className="text-base font-bold text-gray-900">₹{fmt(investment)}</span>
                  </div>
                  <input type="range" min={10000} max={10000000} step={10000}
                    value={investment}
                    onChange={e => setInvestment(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#C0001B]" />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>₹10K</span><span>₹1 Cr</span>
                  </div>
                </div>

                {/* Tenure pills */}
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Tenure</span>
                  <div className="flex gap-2 flex-wrap">
                    {TENURE_OPTIONS.map((opt, i) => (
                      <button key={opt.label} onClick={() => setTenureIdx(i)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tenureIdx === i ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer type */}
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Customer Type</span>
                  <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl">
                    {(["general", "senior"] as const).map(t => (
                      <button key={t} onClick={() => setCustomerType(t)}
                        className={`py-2.5 rounded-lg text-sm font-bold transition-all ${customerType === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>
                        {t === "general" ? "General" : "Senior Citizen"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rate applied info */}
                <div className="px-3 py-2 bg-[#FFF5F6] border border-[#C0001B]/10 rounded-xl flex justify-between items-center">
                  <span className="text-xs text-gray-500">Rate applied</span>
                  <span className="text-sm font-bold text-[#C0001B]">{fdRate.toFixed(2)}% p.a.</span>
                </div>

                {/* Maturity result card */}
                <div className="bg-gray-900 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Maturity Amount</div>
                    <div className="text-2xl font-bold text-white">₹{fmt(maturity)}</div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        You earn ₹{fmt(interest)} extra
                      </span>
                    </div>
                  </div>
                  <MiniDonut pct={gainPct} />
                </div>

                <Link href="/time-deposit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
                  Open Fixed Deposit <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-white border border-gray-100 rounded-xl">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-600">Disclaimer:</strong> Interest rates are subject to change without prior notice. The FD Calculator provides indicative figures only and is not a guarantee of returns. Senior Citizen benefit of +0.50% is applicable only on deposit products for individuals aged 60 years and above. Loan rates are indicative and may vary based on credit profile and other parameters.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
