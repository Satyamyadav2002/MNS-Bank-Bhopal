import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { ShieldCheck, CalendarClock, TrendingUp } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function InterestRatesPage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Interest Rates</h1>
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
               Explore our latest competitive interest rates for Fixed Deposits, Savings Accounts, and Loans.
             </p>
           </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
          
          {/* Term Deposits */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CalendarClock className="w-8 h-8 text-bank-gold-dark" />
              <h2 className="font-serif text-3xl font-bold text-bank-charcoal">Term / Fixed Deposits</h2>
            </div>
            <div className="bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-bank-cream border-b border-[#E5E0D8] text-bank-muted uppercase tracking-wider text-[11px] font-bold">
                      <th className="p-4">Tenure</th>
                      <th className="p-4">General / Public</th>
                      <th className="p-4">Senior Citizen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">7 Days to 45 Days</td>
                      <td className="p-4 font-bold text-bank-charcoal">3.50%</td>
                      <td className="p-4 font-bold text-bank-red">4.00%</td>
                    </tr>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">46 Days to 179 Days</td>
                      <td className="p-4 font-bold text-bank-charcoal">4.50%</td>
                      <td className="p-4 font-bold text-bank-red">5.00%</td>
                    </tr>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">180 Days to 364 Days</td>
                      <td className="p-4 font-bold text-bank-charcoal">5.50%</td>
                      <td className="p-4 font-bold text-bank-red">6.00%</td>
                    </tr>
                    <tr className="bg-[#FEF9C3]/20 hover:bg-[#FEF9C3]/40 border-b border-bank-gold-mid/30">
                      <td className="p-4 font-medium text-bank-charcoal">1 Year Special Deposit</td>
                      <td className="p-4 font-bold text-bank-charcoal">7.00%</td>
                      <td className="p-4 font-bold text-bank-red">7.50%</td>
                    </tr>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">Above 1 Year to 3 Years</td>
                      <td className="p-4 font-bold text-bank-charcoal">6.50%</td>
                      <td className="p-4 font-bold text-bank-red">7.00%</td>
                    </tr>
                    <tr className="hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">Above 3 Years to 10 Years</td>
                      <td className="p-4 font-bold text-bank-charcoal">6.25%</td>
                      <td className="p-4 font-bold text-bank-red">6.75%</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <p className="text-xs text-bank-muted mt-3 italic">* Rates are subject to change without prior notice. Extra 0.50% applicable for Senior Citizens.</p>
          </div>

          {/* Savings Accounts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h2 className="font-serif text-3xl font-bold text-bank-charcoal">Savings Accounts</h2>
            </div>
            <div className="bg-white border border-[#E5E0D8] rounded-2xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-bank-charcoal text-lg">Regular Savings Account</h4>
                <p className="text-bank-muted">Calculated on daily closing balance.</p>
              </div>
              <div className="font-serif text-4xl font-bold text-emerald-600">4.00% p.a.</div>
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-bank-red" />
              <h2 className="font-serif text-3xl font-bold text-bank-charcoal">Loan Products</h2>
            </div>
            <div className="bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-bank-cream border-b border-[#E5E0D8] text-bank-muted uppercase tracking-wider text-[11px] font-bold">
                      <th className="p-4">Loan Type</th>
                      <th className="p-4">ROI (Floating p.a.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">Home Loan</td>
                      <td className="p-4 font-bold text-bank-charcoal">Starting at 8.50%</td>
                    </tr>
                    <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">Vehicle Loan</td>
                      <td className="p-4 font-bold text-bank-charcoal">Starting at 9.25%</td>
                    </tr>
                    <tr className="hover:bg-bank-cream/30">
                      <td className="p-4 font-medium text-bank-charcoal">Personal Loan</td>
                      <td className="p-4 font-bold text-bank-charcoal">Starting at 11.50%</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>

        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
