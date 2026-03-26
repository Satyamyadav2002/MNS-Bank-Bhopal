import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { Repeat, Shield, Zap, Phone, ArrowRight, Building2, CheckCircle2, FileText } from "lucide-react"

const stats = [
  { label: "Min. Balance", value: "₹10,000" },
  { label: "Free NEFT/RTGS", value: "Unlimited" },
  { label: "Cheque Book", value: "Free" },
  { label: "Net Banking", value: "Free" },
]

const features = [
  { icon: Repeat,    title: "High Transaction Limits",   desc: "No cap on daily transactions. Supports bulk NEFT/RTGS for payrolls and vendor payments." },
  { icon: Shield,    title: "Dedicated Relationship Manager", desc: "A dedicated RM assigns to every business for personalised banking support." },
  { icon: Zap,       title: "Instant OD Facility",       desc: "Get an overdraft against your current account balance in 48 hours." },
  { icon: Building2, title: "GST-Ready Statements",      desc: "Download GST-compliant account statements for seamless tax filing." },
]

const eligibility = [
  "Sole Proprietorship / Partnership / Pvt. Ltd. / LLP / Trust / Society",
  "Valid GSTIN / trade licence",
  "KYC documents of all authorised signatories",
  "Board resolution (for companies and trusts)",
]

const docs = [
  "Certificate of Incorporation / Partnership Deed",
  "GST Registration Certificate",
  "PAN Card of entity",
  "Aadhaar + PAN of all directors / partners",
  "Last 6-month bank statement",
  "2 recent passport-size photographs",
]

export default function CurrentAccountPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Current Account"
          subtitle="A power-packed business account built for high-volume transactions — with unlimited NEFT/RTGS, dedicated support, and instant OD facility."
          breadcrumbs={[{ label: "Business" }, { label: "Accounts" }, { label: "Current Account" }]}
          ctaLabel="Open Account"
          ctaHref="/contact-us"
        >
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Features */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Why Choose MNS Current Account?</h2>
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#C0001B]/20 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-[#C0001B]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{f.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Apply */}
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-6 text-white">
                <Phone className="w-6 h-6 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-2">Talk to our Business Team</h3>
                <p className="text-white/70 text-sm mb-4">Get a personalised account opening experience at your doorstep.</p>
                <a href="tel:07554098000" className="inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4" /> 0755-4098000
                </a>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-[#C0001B]" /> Documents Required</h3>
                <ul className="space-y-2">
                  {docs.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Eligibility</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {eligibility.map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Open Current Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/interest-rates" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              View Interest Rates
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
