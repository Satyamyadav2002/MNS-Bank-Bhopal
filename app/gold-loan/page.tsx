"use client"
import { useState } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight, FileText, User, Phone, MapPin, Coins, Home, Users } from "lucide-react"

const tabs = ["Overview", "Features", "Eligibility", "KFS", "Apply"]

const kfsData = [
  ["Interest Rate", "From 9.00% p.a. (reducing balance)"],
  ["Processing Fee", "0.25% of loan amount"],
  ["Prepayment Charges", "Nil"],
  ["Foreclosure Charges", "Nil after 1 year"],
  ["Loan Tenure", "Up to 12 months (renewable)"],
  ["Disbursal Time", "Same day (subject to gold verification)"],
  ["Repayment", "Bullet or monthly interest + principal at maturity"],
  ["Total Cost of Credit (illustrative — ₹1L, 1yr)", "₹9,000 interest + ₹250 processing = ₹9,250"],
]

const features = [
  "Instant approval — same day disbursal",
  "No income proof required",
  "Minimum documentation",
  "Transparent per-gram valuation",
  "Safe custody of your gold at our branch",
  "Loan-to-Value (LTV) up to 75% of gold value",
  "Flexible repayment — bullet / EMI",
  "Prepayment without penalty",
]

const related = [
  { title: "Home Loan", rate: "From 8.50%", href: "/home-loan", icon: Home },
  { title: "Personal Loan", rate: "From 12.00%", href: "/personal-loan", icon: Users },
  { title: "EMI Calculator", rate: null, href: "/emi-calculator", icon: Coins },
]

export default function GoldLoanPage() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", mobile: "", branch: "", amount: "" })

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans bg-white">
        <SegmentSwitcher />
        <Header />

        <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B]">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <Link href="/loans" className="hover:text-[#C0001B]">Loans</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-600">Gold Loan</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2 block">Loans · Quick Finance</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Gold Loan</h1>
                <p className="text-gray-500 mt-2 text-base max-w-xl">Same-day disbursal against gold jewellery. From <strong className="text-[#C0001B]">9.00% p.a.</strong> — No income proof required.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Same Day Disbursal", "No Income Proof", "From 9.00%", "Up to 75% LTV"].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C0001B]" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <button onClick={() => setActiveTab("Apply")} className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/emi-calculator" className="text-center inline-flex items-center justify-center gap-2 border border-[#C0001B] text-[#C0001B] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#FFF5F6] transition-colors">
                  EMI Calculator
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide border-t border-gray-100">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${activeTab === tab ? "text-[#C0001B] border-[#C0001B]" : "text-gray-500 border-transparent hover:text-gray-800"}`}>
                  {tab === "Apply" ? "Apply / Enquire" : tab === "KFS" ? "Key Facts" : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === "Overview" && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-gray-900">Instant funds against your gold</h2>
                <p className="text-gray-500 leading-relaxed">MNS Bank's Gold Loan gives you immediate liquidity against your gold jewellery — no income documentation, no lengthy processing. Visit any branch with your gold and get funds within hours.</p>
                <p className="text-gray-500 leading-relaxed">Your gold is stored in secure vaults at our branch under 24×7 surveillance and returned in the exact same condition upon repayment.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-5 text-white"><div className="text-3xl font-bold">9.00%</div><div className="text-white/80 text-sm mt-1">From p.a.</div></div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5"><div className="text-3xl font-bold text-gray-900">75%</div><div className="text-gray-500 text-sm mt-1">Max LTV</div></div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5"><div className="text-lg font-bold text-gray-900">Same Day</div><div className="text-gray-500 text-sm mt-1">Disbursal</div></div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5"><div className="text-lg font-bold text-gray-900">Nil</div><div className="text-gray-500 text-sm mt-1">Prepayment Charges</div></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">What you need to bring</h3>
                {["Your gold jewellery / ornaments", "Aadhaar Card (original)", "PAN Card", "One passport-size photograph", "Existing MNS Bank passbook (preferred)"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#C0001B] flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Features" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Gold Loan Features</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              {["Indian Resident aged 18 and above", "Owns gold jewellery / ornaments (22 or 18 carat)", "Valid KYC documents (Aadhaar + PAN)", "No minimum income requirement"].map((e, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl mb-3 hover:border-[#C0001B]/20 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#C0001B] flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                  <span className="text-gray-700 font-medium text-sm">{e}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "KFS" && (
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Key Facts Statement (KFS)</h2>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">RBI Mandated</span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-4 py-3 font-semibold">Particulars</th><th className="text-left px-4 py-3 font-semibold">Details</th></tr></thead>
                  <tbody>{kfsData.map(([k, v], i) => <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="px-4 py-3 text-gray-600">{k}</td><td className="px-4 py-3 font-semibold text-gray-900">{v}</td></tr>)}</tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">KFS is for illustrative purposes. Actual charges may differ. As per RBI Circular RBI/2023-24/xxx dated xxx.</p>
            </div>
          )}

          {activeTab === "Apply" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for Gold Loan</h2>
              <p className="text-gray-500 mb-8">Fill in your details — our team will contact you within 4 working hours.</p>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"><CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" /><h3 className="text-xl font-bold text-emerald-800 mb-2">Request Received!</h3><p className="text-emerald-700 text-sm">Our team will contact you within 4 working hours.</p></div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input required value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="Full name" /></div></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile *</label><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input required value={formData.mobile} onChange={e => setFormData(p => ({...p, mobile: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="10-digit mobile" /></div></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Approximate Gold Weight / Value *</label><input required value={formData.amount} onChange={e => setFormData(p => ({...p, amount: e.target.value}))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B]" placeholder="e.g. 50 grams / ₹3,00,000" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Branch *</label><div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><select required value={formData.branch} onChange={e => setFormData(p => ({...p, branch: e.target.value}))} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] appearance-none bg-white"><option value="">Select a branch</option><option>Bairagarhi — Head Office</option><option>TT Nagar Branch</option><option>Karond Branch</option></select></div></div>
                  <button type="submit" className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">Submit Application <ArrowRight className="w-4 h-4" /></button>
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
