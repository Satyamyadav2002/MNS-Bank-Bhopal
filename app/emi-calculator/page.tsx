"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { useState, useMemo } from "react"
import { Calculator, PieChart, IndianRupee, Info } from "lucide-react"

export default function EMICalculatorPage() {
  const [amount, setAmount] = useState(1000000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(120) // in months

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const p = amount
    const r = rate / 12 / 100
    const n = tenure
    if (r === 0) return { emi: p / n, totalInterest: 0, totalPayment: p }
    const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPmt = emiCalc * n
    return {
      emi: isNaN(emiCalc) || !isFinite(emiCalc) ? 0 : emiCalc,
      totalPayment: isNaN(totalPmt) || !isFinite(totalPmt) ? 0 : totalPmt,
      totalInterest: isNaN(totalPmt) || !isFinite(totalPmt) ? 0 : totalPmt - p
    }
  }, [amount, rate, tenure])

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val)
  }

  // Calculate percentages for the pie chart
  const principalPercent = totalPayment > 0 ? (amount / totalPayment) * 100 : 100
  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0
  
  // Custom donut chart style
  const donutStyle = {
    background: `conic-gradient(from 0deg, #C0392B 0%, #C0392B ${principalPercent}%, #C9922A ${principalPercent}%, #C9922A 100%)`
  } as React.CSSProperties

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">EMI Calculator</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Plan your finances precisely. Calculate your monthly installments, total interest, and visualize your loan repayment.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl p-6 md:p-12 border border-[#E5E0D8] shadow-sm flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Form Side */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="flex items-center gap-3 mb-2 border-b border-[#E5E0D8] pb-4">
                <Calculator className="w-6 h-6 text-bank-red" />
                <h2 className="font-serif text-2xl font-bold text-bank-charcoal">Loan Details</h2>
              </div>
              
              {/* Amount */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-bank-charcoal text-lg">Loan Amount</label>
                  <div className="bg-bank-cream/50 px-4 py-2 rounded-lg font-bold text-bank-red min-w-[140px] text-right border border-[#E5E0D8]">
                    {formatCurrency(amount)}
                  </div>
                </div>
                <input 
                  type="range" min="100000" max="50000000" step="50000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E0D8] rounded-lg appearance-none cursor-pointer accent-bank-red"
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-bank-muted">
                  <span>₹1 Lakh</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-bank-charcoal text-lg">Interest Rate (% p.a.)</label>
                  <div className="bg-bank-cream/50 px-4 py-2 rounded-lg font-bold text-bank-red min-w-[140px] text-right border border-[#E5E0D8]">
                    {rate.toFixed(2)} %
                  </div>
                </div>
                <input 
                  type="range" min="6" max="24" step="0.1"
                  value={rate} onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E0D8] rounded-lg appearance-none cursor-pointer accent-bank-red"
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-bank-muted">
                  <span>6%</span>
                  <span>24%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-bank-charcoal text-lg">Loan Tenure</label>
                  <div className="bg-bank-cream/50 px-4 py-2 rounded-lg font-bold text-bank-red min-w-[140px] text-right border border-[#E5E0D8]">
                    {tenure} Months {(tenure / 12).toFixed(1)} Yrs
                  </div>
                </div>
                <input 
                  type="range" min="12" max="360" step="12"
                  value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E0D8] rounded-lg appearance-none cursor-pointer accent-bank-red"
                />
                <div className="flex justify-between mt-2 text-xs font-medium text-bank-muted">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

            </div>

            {/* Results Side */}
            <div className="w-full lg:w-1/2">
              <div className="bg-bank-charcoal rounded-3xl p-8 text-white relative h-full flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none"></div>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-bank-red/20 blur-[60px] rounded-full pointer-events-none"></div>
                
                <h3 className="font-serif text-xl font-bold mb-8 text-center text-white/90">Repayment Summary</h3>
                
                <div className="flex flex-col md:flex-row items-center gap-10 justify-center mb-10">
                  {/* CSS Donut Chart */}
                  <div className="relative w-48 h-48 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.3)] border-4 border-[#1E2030]" style={donutStyle}>
                    <div className="absolute inset-2 bg-bank-charcoal rounded-full flex flex-col items-center justify-center">
                      <span className="text-white/60 text-xs uppercase tracking-wider font-bold mb-1">Monthly EMI</span>
                      <span className="text-2xl font-bold text-bank-gold-light">
                        {Math.round(emi).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Legend & Breakdown */}
                 <div className="space-y-6 w-full">
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       <span className="w-3 h-3 rounded-full bg-bank-red"></span>
                       <span className="text-sm font-medium text-white/70">Principal Amount</span>
                     </div>
                     <div className="font-bold text-xl ml-5">{formatCurrency(amount)}</div>
                   </div>
                   
                   <div>
                     <div className="flex items-center gap-2 mb-1">
                       <span className="w-3 h-3 rounded-full bg-bank-gold-mid"></span>
                       <span className="text-sm font-medium text-white/70">Total Interest</span>
                     </div>
                     <div className="font-bold text-xl ml-5">{formatCurrency(totalInterest)}</div>
                   </div>
                   
                   <div className="pt-4 border-t border-white/10">
                     <div className="text-sm font-medium text-white/50 mb-1">Total Payable Amount</div>
                     <div className="font-bold text-3xl text-white">{formatCurrency(totalPayment)}</div>
                   </div>
                 </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <button className="w-full bg-bank-red hover:bg-bank-red-dark text-white font-bold h-14 rounded-xl flex items-center justify-center text-lg transition-all shadow-[0_4px_15px_rgba(192,57,43,0.3)] hover:-translate-y-1">
                    Apply for Loan Now
                  </button>
                </div>

              </div>
            </div>
            
          </div>
          
          <div className="mt-8 bg-bank-cream p-6 rounded-2xl border border-[#E5E0D8] flex items-start gap-4 text-bank-muted text-sm max-w-4xl mx-auto">
            <Info className="w-5 h-5 text-bank-gold-dark shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> This EMI calculator is provided only as a general self-help planning tool. Results depend on many factors, including the assumptions you provide. We do not guarantee their accuracy, or applicability to your circumstances. For precise KFS and customized repayment schedules, please visit any Mahanagar Bank branch.
            </p>
          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  )
}
