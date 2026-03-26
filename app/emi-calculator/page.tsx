"use client"
import { useState, useMemo } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { Phone, ChevronRight, ArrowRight } from "lucide-react"

// ── Tab configs ──────────────────────────────────────────────────────────────
const LOAN_TYPES = [
  {
    id: "personal",
    label: "Personal Loan",
    minAmount: 10000,  maxAmount: 500000,  defaultAmount: 100000,
    minRate: 10,       maxRate: 24,         defaultRate: 12,
    minTenure: 1,      maxTenure: 5,        defaultTenure: 3,
    applyHref: "/personal-loan",
  },
  {
    id: "home",
    label: "Home Loan",
    minAmount: 500000, maxAmount: 10000000, defaultAmount: 2000000,
    minRate: 8,        maxRate: 14,         defaultRate: 8.5,
    minTenure: 5,      maxTenure: 20,       defaultTenure: 15,
    applyHref: "/home-loan",
  },
  {
    id: "car",
    label: "Car Loan",
    minAmount: 100000, maxAmount: 3000000,  defaultAmount: 500000,
    minRate: 9,        maxRate: 16,         defaultRate: 9.5,
    minTenure: 1,      maxTenure: 7,        defaultTenure: 5,
    applyHref: "/car-loan",
  },
]

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(n))
}

function fmtShort(n: number) {
  if (n >= 10000000) return `${(n / 10000000).toFixed(1)} Cr`
  if (n >= 100000) return `${(n / 100000).toFixed(0)} L`
  if (n >= 1000) return `${(n / 1000).toFixed(0)} K`
  return `${n}`
}

// Simple donut ring SVG
function DonutChart({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest
  const pPct = total > 0 ? (principal / total) * 100 : 100
  const iPct = 100 - pPct
  const r = 70, cx = 90, cy = 90, stroke = 18
  const c = 2 * Math.PI * r
  const pDash = (pPct / 100) * c
  const iDash = (iPct / 100) * c

  return (
    <svg width={180} height={180} viewBox="0 0 180 180" className="mx-auto">
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth={stroke} />
      {/* Interest (teal) — base */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#14b8a6"
        strokeWidth={stroke} strokeDasharray={`${c}`}
        strokeDashoffset={0} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      {/* Principal (red) — on top */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#C0001B"
        strokeWidth={stroke} strokeDasharray={`${pDash} ${c - pDash}`}
        strokeDashoffset={0} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 0.5s ease" }} />
    </svg>
  )
}

export default function EmiCalculatorPage() {
  const [activeTab, setActiveTab] = useState(0)
  const cfg = LOAN_TYPES[activeTab]

  const [amount, setAmount] = useState(cfg.defaultAmount)
  const [rate, setRate] = useState(cfg.defaultRate)
  const [tenure, setTenure] = useState(cfg.defaultTenure)

  // Sync defaults when tab changes
  function switchTab(idx: number) {
    const c = LOAN_TYPES[idx]
    setActiveTab(idx)
    setAmount(c.defaultAmount)
    setRate(c.defaultRate)
    setTenure(c.defaultTenure)
  }

  // EMI calculation (reducing balance)
  const { emi, totalPayable, totalInterest } = useMemo(() => {
    const P = amount
    const R = rate / 12 / 100
    const N = tenure * 12
    if (R === 0) return { emi: P / N, totalPayable: P, totalInterest: 0 }
    const e = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
    const t = e * N
    return { emi: e, totalPayable: t, totalInterest: t - P }
  }, [amount, rate, tenure])

  // Amortization schedule (yearly summary)
  const schedule = useMemo(() => {
    const P = amount, R = rate / 12 / 100, N = tenure * 12
    let balance = P
    const rows: { year: number; principal: number; interest: number; balance: number }[] = []
    for (let y = 1; y <= tenure; y++) {
      let yPrin = 0, yInt = 0
      for (let m = 0; m < 12 && (y - 1) * 12 + m < N; m++) {
        const intPart = balance * R
        const prinPart = emi - intPart
        yInt += intPart; yPrin += prinPart; balance -= prinPart
      }
      rows.push({ year: y, principal: yPrin, interest: yInt, balance: Math.max(0, balance) })
    }
    return rows
  }, [amount, rate, tenure, emi])

  const sliderClass = "w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#C0001B] bg-gradient-to-r from-[#C0001B] to-[#C0001B]"

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans bg-gray-50">
        <SegmentSwitcher />
        <Header />

        {/* Page banner */}
        <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100 py-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B]">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-600">EMI Calculator</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">EMI Calculator</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Discover how to turn your dreams into reality. Our EMI calculator helps you quickly determine your monthly payments and plan your finances smartly.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Loan type tabs */}
          <div className="flex gap-2 mb-8 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm w-fit mx-auto">
            {LOAN_TYPES.map((lt, i) => (
              <button
                key={lt.id}
                onClick={() => switchTab(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === i ? "bg-[#C0001B] text-white shadow-md" : "text-gray-500 hover:text-gray-800"}`}
              >
                {lt.label} EMI Calculator
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* ── Left: Inputs ── */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-gray-800">Loan Amount</label>
                  <div className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 py-1.5">
                    <span className="text-gray-400 font-medium">₹</span>
                    <span className="font-bold text-gray-900 min-w-[80px] text-right">{fmt(amount)}</span>
                  </div>
                </div>
                <input type="range" min={cfg.minAmount} max={cfg.maxAmount} step={cfg.minAmount < 100000 ? 5000 : 50000}
                  value={amount} onChange={e => setAmount(+e.target.value)} className={sliderClass} />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>₹{fmtShort(cfg.minAmount)}</span>
                  <span>₹{fmtShort(cfg.maxAmount)}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-gray-800">Interest Rate <span className="text-gray-400 font-normal text-xs">(p.a.)</span></label>
                  <div className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 py-1.5">
                    <span className="font-bold text-gray-900">{rate.toFixed(2)}</span>
                    <span className="text-gray-400 font-medium">%</span>
                  </div>
                </div>
                <input type="range" min={cfg.minRate} max={cfg.maxRate} step={0.05}
                  value={rate} onChange={e => setRate(+e.target.value)} className={sliderClass} />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>{cfg.minRate}%</span>
                  <span>{cfg.maxRate}%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-gray-800">Tenure <span className="text-gray-400 font-normal text-xs">(Years)</span></label>
                  <div className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 py-1.5">
                    <span className="font-bold text-gray-900">{tenure}</span>
                    <span className="text-gray-400 font-medium">Y</span>
                  </div>
                </div>
                <input type="range" min={cfg.minTenure} max={cfg.maxTenure} step={1}
                  value={tenure} onChange={e => setTenure(+e.target.value)} className={sliderClass} />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>{cfg.minTenure}Y</span>
                  <span>{cfg.maxTenure}Y</span>
                </div>
              </div>

              {/* Result bar */}
              <div className="bg-gradient-to-r from-[#C0001B] to-[#8B0015] rounded-2xl px-6 py-5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5">Your EMI*</div>
                  <div className="text-3xl font-bold text-white">₹{fmt(emi)}</div>
                  <div className="text-white/50 text-[10px] mt-0.5">*Equated Monthly Installment</div>
                </div>
                <Link href={cfg.applyHref}
                  className="inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-md">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ── Right: Donut + summary ── */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col items-center justify-center gap-6">
              <div className="relative">
                <DonutChart principal={amount} interest={totalInterest} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Total Payable</div>
                  <div className="text-xl font-bold text-gray-900">₹{fmt(totalPayable)}</div>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between px-3 py-3 bg-[#FFF5F6] rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#C0001B]" />
                    <span className="text-sm text-gray-600 font-medium">Principal Amount</span>
                  </div>
                  <span className="font-bold text-gray-900">₹{fmt(amount)}</span>
                </div>
                <div className="flex items-center justify-between px-3 py-3 bg-teal-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                    <span className="text-sm text-gray-600 font-medium">Interest Amount</span>
                  </div>
                  <span className="font-bold text-gray-900">₹{fmt(totalInterest)}</span>
                </div>
                <div className="flex items-center justify-between px-3 py-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-600 font-medium">Monthly EMI</span>
                  <span className="font-bold text-[#C0001B]">₹{fmt(emi)}</span>
                </div>
              </div>

              {/* Call back */}
              <a href="tel:07552345678"
                className="w-full flex items-center justify-center gap-2 border border-[#C0001B] text-[#C0001B] font-bold py-3 rounded-xl hover:bg-[#FFF5F6] transition-colors text-sm">
                <Phone className="w-4 h-4" /> Get a Call Back
              </a>
            </div>
          </div>

          {/* ── Amortization Table ── */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Yearly Amortization Schedule</h2>
              <p className="text-xs text-gray-400 mt-0.5">How your loan balance reduces each year</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#C0001B] text-white">
                    <th className="text-left px-5 py-3 font-semibold">Year</th>
                    <th className="text-right px-5 py-3 font-semibold">Principal Paid</th>
                    <th className="text-right px-5 py-3 font-semibold">Interest Paid</th>
                    <th className="text-right px-5 py-3 font-semibold">Year Total</th>
                    <th className="text-right px-5 py-3 font-semibold">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={row.year} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-semibold text-gray-700">Year {row.year}</td>
                      <td className="px-5 py-3 text-right text-gray-900 font-medium">₹{fmt(row.principal)}</td>
                      <td className="px-5 py-3 text-right text-teal-700 font-medium">₹{fmt(row.interest)}</td>
                      <td className="px-5 py-3 text-right text-gray-900 font-medium">₹{fmt(row.principal + row.interest)}</td>
                      <td className="px-5 py-3 text-right font-bold text-[#C0001B]">₹{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100 border-t border-gray-200">
                    <td className="px-5 py-3 font-bold text-gray-800">Total</td>
                    <td className="px-5 py-3 text-right font-bold text-gray-900">₹{fmt(amount)}</td>
                    <td className="px-5 py-3 text-right font-bold text-teal-700">₹{fmt(totalInterest)}</td>
                    <td className="px-5 py-3 text-right font-bold text-gray-900">₹{fmt(totalPayable)}</td>
                    <td className="px-5 py-3 text-right font-bold text-[#C0001B]">₹0</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Related loans */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Apply for a loan</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {LOAN_TYPES.map(lt => (
                <Link key={lt.id} href={lt.applyHref}
                  className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[#C0001B] transition-colors">{lt.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#C0001B] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
