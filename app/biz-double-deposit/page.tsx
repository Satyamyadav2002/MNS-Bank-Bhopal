import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react"

export default function BizDoubleDepositPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Business Double Deposit"
          subtitle="Our flagship scheme to double your business surplus. Invest once and watch your money grow — no reinvestment needed."
          breadcrumbs={[{ label: "Business" }, { label: "Deposits" }, { label: "Business Double Deposit" }]}
          ctaLabel="Invest Now"
          ctaHref="/contact-us"
        >
          {/* Hero highlight */}
          <div className="bg-gradient-to-r from-[#C0001B] to-[#8B0015] rounded-3xl p-8 text-white mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">How it works</div>
              <h2 className="text-3xl font-bold mb-2">Double your money in ~10 years</h2>
              <p className="text-white/70 text-sm max-w-md">Invest a lump sum today. The corpus doubles at maturity — principal + interest, compounded quarterly.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center shrink-0">
              <div className="text-4xl font-bold">2×</div>
              <div className="text-white/70 text-sm mt-1">Your Investment</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Min. Deposit",  value: "₹5,000" },
              { label: "Approx. Tenure", value: "~10 Years" },
              { label: "Rate of Return", value: "~7.20% p.a." },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Lump sum deposit with zero recurring obligation",
                "Compounded quarterly for maximum returns",
                "DICGC insured up to ₹5 Lakh",
                "Nomination facility available",
                "Can be used as loan collateral",
                "Pre-mature withdrawal available with penalty",
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Open Double Deposit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/interest-rates" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              All Deposit Rates
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
