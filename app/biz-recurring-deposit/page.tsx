import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Calendar, Building2 } from "lucide-react"

export default function BizRecurringDepositPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Business Recurring Deposit"
          subtitle="Discipline your business savings with a fixed monthly deposit and earn up to 6.50% p.a. — ideal for seasonal businesses and SMEs."
          breadcrumbs={[{ label: "Business" }, { label: "Deposits" }, { label: "Business Recurring Deposit" }]}
          ctaLabel="Open RD"
          ctaHref="/contact-us"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Calendar,    label: "Min. Tenure",    value: "6 Months" },
              { icon: TrendingUp,  label: "Max Rate",       value: "6.50% p.a." },
              { icon: Building2,   label: "Min. Instalment",value: "₹1,000/mo" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <s.icon className="w-6 h-6 text-[#C0001B] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#C0001B]">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">RD Interest Rates</h2>
            </div>
            <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Tenure</span><span className="text-right">General</span><span className="text-right">Senior</span>
            </div>
            {[
              { tenure: "6 Months", gen: "5.00%", snr: "5.50%" },
              { tenure: "1 Year",   gen: "6.50%", snr: "7.00%", best: true },
              { tenure: "2 Years",  gen: "6.25%", snr: "6.75%" },
              { tenure: "3 Years",  gen: "6.00%", snr: "6.50%" },
              { tenure: "5 Years",  gen: "5.75%", snr: "6.25%" },
            ].map((r, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 ${r.best ? "bg-gradient-to-r from-[#C0001B] to-[#8B0015]" : "hover:bg-gray-50/50"}`}>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${r.best ? "text-white" : "text-gray-700"}`}>{r.tenure}</span>
                  {r.best && <span className="text-[9px] font-bold bg-yellow-400 text-[#C0001B] px-2 py-0.5 rounded-full">⭐ Best</span>}
                </div>
                <span className={`text-sm font-bold text-right ${r.best ? "text-white" : "text-gray-900"}`}>{r.gen}</span>
                <span className={`text-sm font-bold text-right ${r.best ? "text-yellow-300" : "text-emerald-600"}`}>{r.snr}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Monthly instalment auto-debited from your current account","Pre-maturity withdrawal available (with penalty)","Nomination facility available","Can be used as collateral for overdraft"].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Open Business RD <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/interest-rates" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              All Interest Rates
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
