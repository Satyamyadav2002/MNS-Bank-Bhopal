import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Home, Calculator } from "lucide-react"

export default function HomeLoanPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Home Loan"
          subtitle="Make your dream home a reality with affordable interest rates starting from 8.50% p.a."
          breadcrumbs={[{ label: "Loans", href: "/loans" }, { label: "Home Loan" }]}
          ctaLabel="EMI Calculator"
          ctaHref="/emi-calculator"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Interest Rate", value: "From 8.50% p.a.", sub: "Reducing balance method" },
              { label: "Max Tenure", value: "20 Years", sub: "Flexible repayment options" },
              { label: "Processing Fee", value: "0.50%", sub: "Of loan amount + GST" },
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
              <h2 className="text-xl font-bold text-gray-900 mb-5">Eligible Purposes</h2>
              {["Purchase of new / resale residential property", "Construction of house on owned plot", "Home renovation or extension", "Plot purchase + construction (combo loan)"].map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Eligibility</h2>
              {["Salaried or self-employed Indian resident", "Age: 21–65 years", "Minimum income: ₹15,000/month", "Property in approved localities of Bhopal", "Valid KYC + income documents"].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KFS */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Facts Statement <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">RBI Mandated</span></h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Particulars</th><th className="text-left px-5 py-3 font-semibold">Details</th></tr></thead>
              <tbody>
                {[
                  ["Interest Rate", "From 8.50% p.a. (reducing balance)"],
                  ["Maximum Loan Amount", "As per property value & repayment capacity"],
                  ["Processing Fee", "0.50% of loan amount + GST"],
                  ["Prepayment Charges", "Nil (individual borrowers, floating rate)"],
                  ["Repayment Mode", "EMI via post-dated cheques / ECS"],
                  ["Security", "Mortgage of financed property"],
                  ["Total Cost (illustrative — ₹20L, 20yr, 8.50%)", "Approx. ₹20.37L interest + ₹10K processing"],
                ].map(([k, v], i) => <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="px-5 py-3 text-gray-600">{k}</td><td className="px-5 py-3 font-semibold text-gray-900">{v}</td></tr>)}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Ready to apply?</h3><p className="text-white/80 text-sm mt-1">Visit your nearest branch or call us to begin your application.</p></div>
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
