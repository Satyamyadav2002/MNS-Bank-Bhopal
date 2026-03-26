import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function PersonalLoanPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Personal Loan"
          subtitle="Instant finance for any personal need — medical, education, travel or home improvement. From 12.00% p.a."
          breadcrumbs={[{ label: "Loans", href: "/loans" }, { label: "Personal Loan" }]}
          ctaLabel="EMI Calculator"
          ctaHref="/emi-calculator"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Interest Rate", value: "From 12.00%", sub: "p.a. reducing balance" },
              { label: "Max Tenure", value: "60 Months", sub: "5-year repayment" },
              { label: "Max Amount", value: "₹5,00,000", sub: "Based on eligibility" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2">{s.label}</div>
                <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Features</h2>
              {["No collateral required (unsecured)", "Quick processing in 2–3 working days", "Flexible repayment up to 5 years", "Nil prepayment charges", "Loan top-up available for existing borrowers"].map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Eligibility</h2>
              {["Indian resident aged 21–60 years", "Salaried: Min ₹15,000/month net take-home", "Self-employed: Min ₹2L annual turnover", "Good credit history (CIBIL/CRIF)", "2+ years at current job / business"].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Facts Statement <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">RBI Mandated</span></h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Particulars</th><th className="text-left px-5 py-3 font-semibold">Details</th></tr></thead>
              <tbody>
                {[["Interest Rate", "From 12.00% p.a. (reducing)"], ["Processing Fee", "1.00% of loan + GST"], ["Prepayment Charges", "Nil"], ["Late Payment Charges", "2% p.m. on overdue"], ["Total Cost (₹1L, 12%, 36 months)", "₹19,462 interest + ₹1,000 processing = ₹20,462"]].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="px-5 py-3 text-gray-600">{k}</td><td className="px-5 py-3 font-semibold text-gray-900">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Apply at your nearest branch</h3><p className="text-white/80 text-sm mt-1">Bring your income proof and KYC documents to get started.</p></div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
