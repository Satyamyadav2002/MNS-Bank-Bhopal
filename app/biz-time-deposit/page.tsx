import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react"

const rates = [
  { tenure: "7 – 45 days",      general: "4.00%", senior: "4.50%" },
  { tenure: "46 – 179 days",    general: "5.00%", senior: "5.50%" },
  { tenure: "180 – 364 days",   general: "5.50%", senior: "6.00%" },
  { tenure: "1 Year Special",   general: "7.00%", senior: "7.50%", best: true },
  { tenure: "Above 1 Year",     general: "6.50%", senior: "7.00%" },
  { tenure: "2 – 5 Years",      general: "6.25%", senior: "6.75%" },
]

const features = [
  { icon: TrendingUp, title: "Up to 7.00% p.a.", desc: "Guaranteed returns on your business surplus — higher than most commercial banks." },
  { icon: Shield,     title: "DICGC Insured",    desc: "All deposits insured up to ₹5 Lakh under the DICGC scheme." },
  { icon: Clock,      title: "Flexible Tenures", desc: "Choose from 7 days to 5 years to match your business cash flow." },
]

export default function BizTimeDepositPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Business Time Deposit"
          subtitle="Earn guaranteed returns on your business surplus funds. Flexible tenures from 7 days to 5 years with up to 7.00% p.a."
          breadcrumbs={[{ label: "Business" }, { label: "Deposits" }, { label: "Business Time Deposit" }]}
          ctaLabel="Open Deposit"
          ctaHref="/contact-us"
        >
          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-sm transition-all text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#C0001B]/8 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-[#C0001B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Rate table */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Current FD Rates</h2>
              <p className="text-xs text-gray-400 mt-0.5">Effective 01 March 2026 · Subject to change</p>
            </div>
            <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Tenure</span><span className="text-right">General</span><span className="text-right">Senior</span>
            </div>
            {rates.map((r, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 ${r.best ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015]" : "hover:bg-gray-50/50"}`}>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${r.best ? "text-white" : "text-gray-700"}`}>{r.tenure}</span>
                  {r.best && <span className="text-[9px] font-bold bg-yellow-400 text-[#C0001B] px-2 py-0.5 rounded-full">⭐ Best</span>}
                </div>
                <span className={`text-sm font-bold text-right ${r.best ? "text-white" : "text-gray-900"}`}>{r.general}</span>
                <span className={`text-sm font-bold text-right ${r.best ? "text-yellow-300" : "text-emerald-600"}`}>{r.senior}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Eligibility & Documents</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Current account holder / entity with MNS Bank","PAN Card of entity","KYC of authorised signatories","Board resolution (for companies)"].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Open Business FD <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/emi-calculator" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              FD Calculator
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
