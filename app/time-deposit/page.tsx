"use client"
import { useState } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight, TrendingUp, FileText, User, Phone, Mail, MapPin, Landmark, Repeat, Smartphone } from "lucide-react"

const tabs = ["Overview", "Features", "Eligibility", "Documents", "Apply"]

const rateTable = [
  { tenure: "7 – 14 days", general: "4.50%", senior: "5.00%" },
  { tenure: "15 – 30 days", general: "4.75%", senior: "5.25%" },
  { tenure: "31 – 90 days", general: "5.00%", senior: "5.50%" },
  { tenure: "91 – 180 days", general: "5.50%", senior: "6.00%" },
  { tenure: "181 days – 1 year", general: "6.25%", senior: "6.75%" },
  { tenure: "1 year (Special)", general: "7.00%", senior: "7.50%", highlight: true },
  { tenure: "Above 1 year", general: "6.75%", senior: "7.25%" },
]

const features = [
  "Flexible tenures from 7 days to 10 years",
  "Auto-renewal option available",
  "Loan facility up to 90% of FD amount",
  "Nomination facility available",
  "Premature withdrawal allowed (with 1% penalty)",
  "Interest paid monthly, quarterly, or on maturity",
  "Senior citizens get +0.50% extra on all tenures",
  "DICGC insured up to ₹5,00,000",
]

const related = [
  { title: "Recurring Deposit", rate: "6.50% p.a.", href: "/recurring-deposit", icon: Repeat },
  { title: "Savings Account", rate: "6.00% p.a.", href: "/savings-account", icon: Landmark },
  { title: "Mobile Banking", rate: null, href: "/mobile-banking", icon: Smartphone },
]

export default function TimeDepositPage() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", branch: "", amount: "" })
  const [submitted, setSubmitted] = useState(false)

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans bg-white">
        <SegmentSwitcher />
        <Header />

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B]">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <Link href="/deposits" className="hover:text-[#C0001B]">Deposits</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-600">Time Deposit (FD)</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2 block">Deposits · Fixed Returns</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Time Deposit (Fixed Deposit)</h1>
                <p className="text-gray-500 mt-2 text-base max-w-xl">Earn guaranteed returns up to <strong className="text-[#C0001B]">7.00% p.a.</strong> (7.50% for senior citizens). DICGC insured.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["7.00% p.a.", "DICGC Insured", "Auto-Renewal", "Loan Against FD"].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C0001B]" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <button onClick={() => setActiveTab("Apply")} className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
                  Open FD Now <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/interest-rates" className="text-center inline-flex items-center justify-center gap-2 border border-[#C0001B] text-[#C0001B] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#FFF5F6] transition-colors">
                  Full Rate Card
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide border-t border-gray-100">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${activeTab === tab ? "text-[#C0001B] border-[#C0001B]" : "text-gray-500 border-transparent hover:text-gray-800"}`}>
                  {tab === "Apply" ? "Apply / Enquire" : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === "Overview" && (
            <div className="space-y-10">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Interest Rates</h2>
                  <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <table className="w-full text-sm">
                      <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-4 py-3 font-semibold">Tenure</th><th className="text-left px-4 py-3 font-semibold">General</th><th className="text-left px-4 py-3 font-semibold">Senior Citizen</th></tr></thead>
                      <tbody>
                        {rateTable.map((row, i) => (
                          <tr key={i} className={row.highlight ? "bg-[#FFF5F6] font-semibold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 text-gray-700">{row.tenure} {row.highlight && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#C0001B] bg-[#C0001B]/10 px-2 py-0.5 rounded-full">Best</span>}</td>
                            <td className="px-4 py-3 text-gray-900 font-bold">{row.general}</td>
                            <td className="px-4 py-3 text-emerald-700 font-bold">{row.senior}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">*Rates effective March 2026. Subject to change without prior notice.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-6 text-white">
                    <div className="text-[48px] font-bold leading-none">7.00%</div>
                    <div className="text-white/80 mt-1">per annum (1-Year Special FD)</div>
                    <div className="text-sm text-white/60 mt-2">Senior Citizen: 7.50% p.a.</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                    <div className="text-2xl font-bold text-gray-900">₹1,000</div>
                    <div className="text-xs text-gray-500 mt-1">Minimum Deposit</div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-center">
                    <div className="text-2xl font-bold text-emerald-700">₹5L</div>
                    <div className="text-xs text-gray-500 mt-1">DICGC Insured</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">FD Features & Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#C0001B] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Eligibility" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Who Can Open an FD?</h2>
              {["Indian Resident individual or joint account holders", "NRO account holders (for NRE/NRO FD)", "HUF, Partnership Firms, Trusts, Companies", "Minor accounts with Guardian", "Existing MNS Bank account holders (preferred)"].map((e, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl mb-3 hover:border-[#C0001B]/20 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#C0001B] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{e}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Documents" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Documents Required</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport"] },
                  { label: "Address Proof", items: ["Aadhaar Card", "Utility Bill (recent)"] },
                  { label: "Photograph", items: ["Recent passport-size (2 copies)"] },
                  { label: "Source of Funds", items: ["Salary Slip / ITR / Bank Statement (for large FDs)"] },
                ].map(doc => (
                  <div key={doc.label} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg bg-[#C0001B]/8 flex items-center justify-center"><FileText className="w-4 h-4 text-[#C0001B]" /></div><h3 className="font-bold text-gray-900">{doc.label}</h3></div>
                    <ul className="space-y-2">{doc.items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-[#C0001B]/40 shrink-0" />{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Apply" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Open a Fixed Deposit</h2>
              <p className="text-gray-500 mb-8">We'll contact you within 24 hours to complete your FD opening.</p>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Request Received!</h3>
                  <p className="text-emerald-700 text-sm">Our team will call you within 24 working hours.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input required value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="Full name" /></div></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile *</label><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input required value={formData.mobile} onChange={e => setFormData(p => ({...p, mobile: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="10-digit mobile" /></div></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">FD Amount *</label><input required value={formData.amount} onChange={e => setFormData(p => ({...p, amount: e.target.value}))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="e.g. ₹50,000" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Branch *</label><div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><select required value={formData.branch} onChange={e => setFormData(p => ({...p, branch: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] appearance-none bg-white"><option value="">Select a branch</option><option>Bairagarhi — Head Office</option><option>TT Nagar Branch</option><option>Karond Branch</option></select></div></div>
                  <button type="submit" className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">Submit Enquiry <ArrowRight className="w-4 h-4" /></button>
                </form>
              )}
            </div>
          )}

          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Related Products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map(p => (
                <Link key={p.href} href={p.href} className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center group-hover:bg-[#C0001B] transition-colors"><p.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" /></div>
                  <div className="flex-1 min-w-0"><div className="text-sm font-bold text-gray-900 truncate">{p.title}</div>{p.rate && <div className="text-xs text-[#C0001B] font-semibold mt-0.5">{p.rate}</div>}</div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#C0001B] transition-colors shrink-0" />
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
