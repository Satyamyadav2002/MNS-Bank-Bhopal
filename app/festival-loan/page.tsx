import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Sparkles, Users, Coins } from "lucide-react"

export default function FestivalLoanPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Festival Loan"
          subtitle="Celebrate every occasion without financial stress — quick personal finance at festive-special rates. Available during Diwali, Eid, Navratri, Christmas and more."
          breadcrumbs={[{ label: "Loans", href: "/loans" }, { label: "Festival Loan" }]}
          ctaLabel="Apply Now"
          ctaHref="/locate-us"
        >
          {/* Festive banner */}
          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white mb-12 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Seasonal Special</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Celebrate bigger this season</h2>
              <p className="text-white/80 max-w-xl">Festival Loan is a limited-period personal finance product offered during major festive occasions with preferential rates and same-day processing.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Interest Rate", value: "Special Rate", sub: "Preferential festive rate" },
              { label: "Max Amount", value: "₹2,00,000", sub: "Quick unsecured loan" },
              { label: "Processing", value: "Same Day", sub: "Minimal documentation" },
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
              <h2 className="text-xl font-bold text-gray-900 mb-5">Key Features</h2>
              {[
                "Available during all major Indian festivals",
                "No collateral required (unsecured)",
                "Same-day disbursal for existing account holders",
                "Flexible repayment up to 24 months",
                "Special interest rate during festive period",
                "Nil prepayment charges",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Eligibility</h2>
              {[
                "Existing MNS Bank account holder (preferred)",
                "Indian resident aged 21–60 years",
                "Salaried or self-employed with regular income",
                "Good repayment track record",
                "Minimum 6-month bank relationship",
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl mb-12 text-sm text-amber-800">
            <strong>Availability Note:</strong> The Festival Loan scheme is offered for limited periods during major festivals. Contact your nearest branch or call us to check the current offer window and applicable interest rate.
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Check current festive offer</h3><p className="text-white/80 text-sm mt-1">Visit your nearest branch to know the active festival rate and apply.</p></div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Related Products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Personal Loan", rate: "From 12.00%", href: "/personal-loan", icon: Users },
                { title: "Gold Loan", rate: "From 9.00%", href: "/gold-loan", icon: Coins },
                { title: "Savings Account", rate: "6.00% p.a.", href: "/savings-account", icon: Sparkles },
              ].map(p => (
                <Link key={p.href} href={p.href} className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center group-hover:bg-[#C0001B] transition-colors"><p.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" /></div>
                  <div><div className="text-sm font-bold text-gray-900">{p.title}</div><div className="text-xs text-[#C0001B] font-semibold mt-0.5">{p.rate}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
