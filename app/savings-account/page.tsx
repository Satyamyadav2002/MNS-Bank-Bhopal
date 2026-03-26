"use client"
import { useState } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import {
  CheckCircle2, ChevronRight, ArrowRight, Shield, Smartphone, CreditCard,
  Landmark, PiggyBank, Repeat, ArrowUpRight, User, Phone, Mail, MapPin, FileText
} from "lucide-react"

const tabs = ["Overview", "Features", "Eligibility", "Documents", "Apply"]

const features = [
  { icon: ArrowUpRight, title: "Up to 6% Interest", desc: "Earn competitive interest calculated daily, paid quarterly." },
  { icon: Shield, title: "DICGC Insured", desc: "Your deposits are protected up to ₹5 lakh by Govt. of India." },
  { icon: Smartphone, title: "Net & Mobile Banking", desc: "Free access to net banking and mobile banking app." },
  { icon: CreditCard, title: "Free RuPay Debit Card", desc: "Free RuPay debit card with ATM and online usage." },
  { icon: Landmark, title: "No Minimum Balance*", desc: "Zero minimum balance requirement on standard accounts." },
  { icon: PiggyBank, title: "Auto-Sweep Facility", desc: "Excess balance auto-transferred to FD for higher returns." },
]

const eligibility = [
  "Indian Resident (individual or joint)",
  "Age 18 years and above (minor accounts with guardian)",
  "Valid KYC documents (Aadhaar + PAN or equivalent)",
  "Initial deposit as low as ₹500",
  "Cooperative society members and trust accounts also eligible",
]

const documents = [
  { label: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID", "Driving Licence"] },
  { label: "Address Proof", items: ["Aadhaar Card", "Utility Bill (recent)", "Rent Agreement", "Bank Statement"] },
  { label: "Photograph", items: ["Recent passport-size photograph (2 copies)"] },
  { label: "For Minor Accounts", items: ["Birth certificate", "Guardian's KYC documents"] },
]

const relatedProducts = [
  { title: "Time Deposit (FD)", rate: "7.00% p.a.", href: "/time-deposit", icon: Landmark },
  { title: "Recurring Deposit", rate: "6.50% p.a.", href: "/recurring-deposit", icon: Repeat },
  { title: "Net Banking", rate: null, href: "/net-banking", icon: Smartphone },
]

export default function SavingsAccountPage() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", branch: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans bg-white">
        <SegmentSwitcher />
        <Header />

        {/* ── Page Hero Banner ── */}
        <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B]">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <Link href="/accounts" className="hover:text-[#C0001B]">Accounts</Link>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-600">Savings Account</span>
            </nav>

            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2 block">Personal Banking · Accounts</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Savings Account</h1>
                <p className="text-gray-500 mt-2 text-base max-w-xl">
                  Zero minimum balance. Earn up to <strong className="text-[#C0001B]">6% interest p.a.</strong> with free debit card, net banking, and DICGC insurance up to ₹5 lakh.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["DICGC Insured", "No Min Balance*", "Free Debit Card", "Free Net Banking"].map(b => (
                    <span key={b} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C0001B]" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <a href="#apply" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
                  Open Account <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/interest-rates" className="inline-flex items-center gap-2 border border-[#C0001B] text-[#C0001B] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#FFF5F6] transition-colors text-center justify-center">
                  View Interest Rates
                </Link>
              </div>
            </div>
          </div>

          {/* ── Product Tab Bar ── */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide border-t border-gray-100">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
                    activeTab === tab
                      ? "text-[#C0001B] border-[#C0001B]"
                      : "text-gray-500 border-transparent hover:text-gray-800 hover:border-gray-200"
                  }`}
                >
                  {tab === "Apply" ? "Apply / Enquire" : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tab Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Overview */}
          {activeTab === "Overview" && (
            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B]">About This Account</span>
                  <h2 className="text-3xl font-bold text-gray-900">A savings account built for <span className="italic text-[#C0001B]">your</span> life</h2>
                  <p className="text-gray-500 leading-relaxed">
                    The MNS Bank Savings Account is designed to help you save effortlessly while earning competitive interest. With zero minimum balance requirements, free digital banking access, and a free RuPay debit card, managing your money has never been easier.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    As a cooperative bank member since 1954, your deposits are DICGC-insured by the Government of India up to ₹5,00,000 — giving you complete peace of mind.
                  </p>
                  <button onClick={() => setActiveTab("Apply")} className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#8B0015] transition-colors">
                    Open Account Today <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold">6.00%</div>
                    <div className="text-white/80 text-sm mt-1">Interest p.a.</div>
                    <div className="text-xs text-white/60 mt-3">Calculated daily, paid quarterly</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-gray-900">₹0</div>
                    <div className="text-gray-500 text-sm mt-1">Min. Balance*</div>
                    <div className="text-xs text-gray-400 mt-3">Zero balance requirement</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">₹5L</div>
                    <div className="text-gray-500 text-sm mt-1">DICGC Insured</div>
                    <div className="text-xs text-gray-400 mt-3">Govt. of India protection</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="text-3xl font-bold text-gray-900">70+</div>
                    <div className="text-gray-500 text-sm mt-1">Years of Trust</div>
                    <div className="text-xs text-gray-400 mt-3">Serving Bhopal since 1954</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "Features" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors duration-300">
                      <f.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400">*Zero minimum balance applicable on standard savings accounts. Premium variants may have different terms. Contact your nearest branch for details.</p>
            </div>
          )}

          {/* Eligibility */}
          {activeTab === "Eligibility" && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Who Can Apply?</h2>
              <ul className="space-y-4">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/20 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#C0001B] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Documents */}
          {activeTab === "Documents" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Documents Required</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {documents.map((doc) => (
                  <div key={doc.label} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#C0001B]/8 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#C0001B]" />
                      </div>
                      <h3 className="font-bold text-gray-900">{doc.label}</h3>
                    </div>
                    <ul className="space-y-2">
                      {doc.items.map(item => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C0001B]/40 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
                All documents must be self-attested. Original documents must be produced for verification at the branch.
              </div>
              <Link href="/download-forms" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C0001B] hover:gap-3 transition-all">
                Download Account Opening Form <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Apply */}
          {activeTab === "Apply" && (
            <div id="apply" className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Open a Savings Account</h2>
              <p className="text-gray-500 mb-8">Fill in your details and our team will contact you within 24 hours to complete the process.</p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Request Received!</h3>
                  <p className="text-emerald-700 text-sm">Our team will call you within 24 working hours. Reference: MNS-SA-{Date.now().toString().slice(-6)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input required value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                          placeholder="Enter your full name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input required value={formData.mobile} onChange={e => setFormData(p => ({...p, mobile: e.target.value}))}
                          pattern="[6-9][0-9]{9}" maxLength={10}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                          placeholder="10-digit mobile number" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                        placeholder="Optional" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Branch *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select required value={formData.branch} onChange={e => setFormData(p => ({...p, branch: e.target.value}))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all appearance-none bg-white">
                        <option value="">Select a branch</option>
                        <option>Bairagarhi — Head Office</option>
                        <option>TT Nagar Branch</option>
                        <option>Karond Branch</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea value={formData.message} onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                      rows={3} maxLength={250}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all resize-none"
                      placeholder="Any specific requirements or questions?" />
                  </div>
                  <button type="submit" className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.25)] flex items-center justify-center gap-2">
                    Submit Enquiry <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-400 text-center">We'll contact you within 24 working hours. Your data is safe and will not be shared.</p>
                </form>
              )}
            </div>
          )}

          {/* ── Related Products ── */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">You might also be interested in</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedProducts.map(p => (
                <Link key={p.href} href={p.href} className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center group-hover:bg-[#C0001B] transition-colors">
                    <p.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-gray-900 truncate">{p.title}</div>
                    {p.rate && <div className="text-xs text-[#C0001B] font-semibold mt-0.5">{p.rate}</div>}
                  </div>
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
