import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function RecurringDepositPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Recurring Deposit"
          subtitle="Build wealth systematically — deposit a fixed amount every month and earn up to 6.50% p.a."
          breadcrumbs={[{ label: "Deposits", href: "/deposits" }, { label: "Recurring Deposit" }]}
          ctaLabel="Open RD Online"
          ctaHref="/contact-us"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Interest Rate", value: "Up to 6.50%", sub: "p.a. (senior: +0.50%)" },
              { label: "Minimum Deposit", value: "₹100/month", sub: "No upper limit" },
              { label: "Tenure", value: "6 – 120 Months", sub: "Flexible options" },
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
              <h2 className="text-xl font-bold text-gray-900 mb-5">Features & Benefits</h2>
              {[
                "Start with as little as ₹100 per month",
                "Auto-debit from savings account each month",
                "Senior citizens earn extra 0.50% interest",
                "Premature withdrawal allowed (with penalty)",
                "Loan facility against RD balance",
                "Nomination facility available",
                "DICGC insured up to ₹5,00,000",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Illustrative Returns</h2>
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#C0001B] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Monthly Deposit</th>
                      <th className="text-left px-4 py-3 font-semibold">12 Months</th>
                      <th className="text-left px-4 py-3 font-semibold">36 Months</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["₹500", "₹6,207", "₹19,492"],
                      ["₹1,000", "₹12,413", "₹38,984"],
                      ["₹5,000", "₹62,065", "₹1,94,918"],
                      ["₹10,000", "₹1,24,130", "₹3,89,836"],
                    ].map(([dep, y1, y3], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-gray-700 font-semibold">{dep}</td>
                        <td className="px-4 py-3 text-gray-900 font-bold">{y1}</td>
                        <td className="px-4 py-3 text-gray-900 font-bold">{y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">*Illustrative at 6.50% p.a. Actual returns may vary.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Start saving as little as ₹100/month</h3><p className="text-white/80 text-sm mt-1">Visit any MNS Bank branch or call us to open your RD account today.</p></div>
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
