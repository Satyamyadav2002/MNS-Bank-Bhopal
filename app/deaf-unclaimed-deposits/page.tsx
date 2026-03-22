"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Search, AlertCircle, FileSearch, HelpCircle } from "lucide-react"
import { useState } from "react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function DeafPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [data] = useState([]) // Empty array meaning no DEAF data yet.
  
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bank-red/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-6">
              <FileSearch className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">DEAF / Unclaimed Deposits</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Depositor Education and Awareness Fund Scheme. Search for inactive or dormant accounts.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          
          <div className="bg-[#FEF9C3] border-l-4 border-bank-gold-dark rounded-r-xl p-4 mb-8 flex items-start gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 text-bank-gold-dark shrink-0 mt-0.5" />
            <p className="text-sm text-[#713F12] leading-relaxed">
              <strong>RBI Mandate:</strong> As per RBI guidelines, credit balances in any deposit account maintained with banks which have not been operated upon for ten years or more, or any amount remaining unclaimed for ten years or more, are transferred to the Depositor Education and Awareness Fund (DEAF).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E5E0D8]">
              <div>
                <h2 className="font-serif text-2xl font-bold text-bank-charcoal">Search DEAF Accounts</h2>
                <p className="text-sm text-bank-muted font-medium mt-1">Last Updated: 01 March 2026</p>
              </div>
              
              <div className="relative w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="Search by Account Name or Customer ID..." 
                  className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-12 pl-12 pr-4 font-bold text-bank-charcoal focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-bank-muted">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-bank-cream/80 text-bank-charcoal text-sm font-bold uppercase tracking-wider">
                    <th className="p-4 rounded-tl-xl">Cust ID</th>
                    <th className="p-4">Account Name</th>
                    <th className="p-4">Address</th>
                    <th className="p-4">District</th>
                    <th className="p-4 rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-12 text-center text-bank-muted bg-white border-b border-[#E5E0D8]">
                        <div className="flex flex-col items-center justify-center text-center">
                          <CheckCircle className="w-12 h-12 text-emerald-500/50 mb-4" />
                          <p className="font-medium text-lg text-bank-charcoal mb-2">No DEAF Accounts Found</p>
                          <p className="text-sm">No accounts have been transferred to the DEAF fund as of 01 March 2026.</p>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-bank-cream rounded-2xl p-8 border border-[#E5E0D8]">
            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mb-4 flex items-center gap-2"><HelpCircle className="text-bank-gold-dark" /> How to Claim</h3>
            <p className="text-bank-muted mb-6 leading-relaxed">
              If you find your name or the name of a deceased relative in the DEAF list, you can claim the deposit by visiting your nearest Mahanagar Bank branch.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#E5E0D8]">
                <h4 className="font-bold text-bank-charcoal mb-2">For Self (Account Holder)</h4>
                <ul className="list-disc pl-5 text-sm text-bank-muted space-y-1">
                  <li>Valid KYC details (Aadhaar, PAN)</li>
                  <li>Original Term Deposit Receipt / Passbook</li>
                  <li>Recent photograph</li>
                  <li>Account reactivation request letter</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#E5E0D8]">
                <h4 className="font-bold text-bank-charcoal mb-2">For Legal Heirs / Nominees</h4>
                <ul className="list-disc pl-5 text-sm text-bank-muted space-y-1">
                  <li>Death Certificate of the account holder</li>
                  <li>Valid KYC details of the claimant</li>
                  <li>Succession Certificate / Indemnity Bond (as applicable)</li>
                  <li>Claim application form</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}

function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
