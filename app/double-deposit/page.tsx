import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Coins, Landmark, Repeat, Shield } from "lucide-react"

const highlights = [
  { icon: Coins, title: "Money Doubles", desc: "Your investment doubles at the end of the scheme period — guaranteed." },
  { icon: Shield, title: "DICGC Insured", desc: "Protected up to ₹5,00,000 by Government of India." },
  { icon: Landmark, title: "No TDS on Interest*", desc: "Benefit from tax treatment specific to cooperative bank deposits." },
  { icon: Repeat, title: "Auto-Renewal Option", desc: "Seamlessly re-invest on maturity for continued compounding." },
]

const faqs = [
  { q: "What is the Double Deposit scheme?", a: "The MNS Bank Double Deposit scheme is a special fixed-term deposit where your invested principal doubles at maturity. The tenure is calculated based on the current interest rate that would double the investment." },
  { q: "What is the minimum investment?", a: "The minimum investment in the Double Deposit scheme starts from ₹5,000. There is no upper limit." },
  { q: "Can I take a loan against my Double Deposit?", a: "Yes, you can avail of a loan up to 90% of the maturity value of your Double Deposit account." },
  { q: "Is premature withdrawal allowed?", a: "Yes, premature withdrawal is allowed but a penalty of 1% below the contracted rate will be applied on premature closure." },
]

export default function DoubleDepositPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Double Deposit"
          subtitle="MNS Bank's flagship scheme — invest once and watch your money double. Guaranteed returns, DICGC insured."
          breadcrumbs={[{ label: "Deposits", href: "/deposits" }, { label: "Double Deposit" }]}
          ctaLabel="Open Double Deposit"
          ctaHref="/contact-us"
        >
          {/* Hero stat */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="sm:col-span-1 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">Your Money</div>
                <div className="text-5xl font-bold">2×</div>
                <div className="text-white/80 mt-2 text-lg">Guaranteed Doubling</div>
              </div>
              <div className="mt-6 text-xs text-white/50">Tenure calculated at prevailing rate</div>
            </div>
            <div className="sm:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: "Minimum Deposit", value: "₹5,000", sub: "No upper limit" },
                { label: "DICGC Insurance", value: "₹5 Lakh", sub: "Govt. of India guarantee" },
                { label: "Loan Facility", value: "Up to 90%", sub: "Of maturity value" },
                { label: "Nomination", value: "Available", sub: "For all depositors" },
              ].map(s => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#C0001B] mb-1">{s.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <h2 className="text-xl font-bold text-gray-900 mb-6">Why choose Double Deposit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {highlights.map(h => (
              <div key={h.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#C0001B]/20 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3 group-hover:bg-[#C0001B] transition-colors">
                  <h.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{h.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Who can invest */}
          <div className="grid lg:grid-cols-2 gap-12 mb-14">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Who can invest?</h2>
              {[
                "Indian Resident individuals (single or joint)",
                "HUF, Trusts, Partnership Firms",
                "Minors (through guardian)",
                "Existing MNS Bank account holders (preferred)",
                "Senior citizens (with extra 0.50% p.a.)",
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Documents Required</h2>
              {[
                "Aadhaar Card (original + self-attested copy)",
                "PAN Card",
                "Recent passport-size photograph (2 copies)",
                "Address proof (if different from Aadhaar)",
                "Source of funds (for large deposits)",
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-14">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Ready to double your money?</h3>
              <p className="text-white/80 text-sm mt-1">Visit your nearest MNS Bank branch with your KYC documents to open a Double Deposit account today.</p>
            </div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5">You may also like</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Time Deposit (FD)", rate: "7.00% p.a.", href: "/time-deposit", icon: Landmark },
                { title: "Recurring Deposit", rate: "6.50% p.a.", href: "/recurring-deposit", icon: Repeat },
                { title: "Savings Account", rate: "6.00% p.a.", href: "/savings-account", icon: Coins },
              ].map(p => (
                <Link key={p.href} href={p.href} className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center group-hover:bg-[#C0001B] transition-colors">
                    <p.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-gray-900 truncate">{p.title}</div>
                    <div className="text-xs text-[#C0001B] font-semibold mt-0.5">{p.rate}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#C0001B] transition-colors shrink-0" />
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
