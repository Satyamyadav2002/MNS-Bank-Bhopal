import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import Link from "next/link"
import { Landmark, Repeat, Coins, ArrowRight, ShieldCheck } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

const personalDeposits = [
  {
    title: "Time Deposit (Fixed Deposit)",
    href: "/time-deposit",
    icon: Landmark,
    desc: "Guaranteed high returns on a lump-sum investment for a fixed period.",
    rate: "7.00% p.a.",
    tag: "Best Rate",
    features: ["Flexible tenure 7 days – 10 years", "Senior: 7.50% p.a.", "Auto-renewal option"]
  },
  {
    title: "Recurring Deposit",
    href: "/recurring-deposit",
    icon: Repeat,
    desc: "Build wealth systematically with small monthly savings.",
    rate: "6.50% p.a.",
    tag: null,
    features: ["₹100 minimum per month", "Flexible 6 – 120 months", "Pre-maturity withdrawal"]
  },
  {
    title: "Double Deposit",
    href: "/double-deposit",
    icon: Coins,
    desc: "MNS Bank's flagship scheme — watch your money double over time.",
    rate: "Special Rate",
    tag: "Popular",
    features: ["Guaranteed doubling", "Flexible investment size", "DICGC insured"]
  },
]

const businessDeposits = [
  {
    title: "Business Time Deposit",
    href: "/biz-time-deposit",
    icon: Landmark,
    desc: "Park your business surplus funds to earn high, guaranteed returns.",
    rate: "7.00% p.a.",
    tag: null,
    features: ["Corporate-specific terms", "Auto-renewal", "Senior citizen differential"]
  },
  {
    title: "Business Recurring Deposit",
    href: "/biz-recurring-deposit",
    icon: Repeat,
    desc: "Regular savings for business entities to build reserves over time.",
    rate: "6.50% p.a.",
    tag: null,
    features: ["Monthly contribution", "Flexible tenures", "Pre-foreclosure allowed"]
  },
  {
    title: "Business Double Deposit",
    href: "/biz-double-deposit",
    icon: Coins,
    desc: "Double your business corpus with our exclusive long-term scheme.",
    rate: "Special Rate",
    tag: null,
    features: ["Purpose-built for businesses", "Guaranteed returns", "DICGC insured"]
  },
]

export default function DepositsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Deposit Products"
          subtitle="Secure your savings with DICGC-insured deposits offering competitive interest rates."
          breadcrumbs={[{ label: "Deposits" }]}
          ctaLabel="View Interest Rates"
          ctaHref="/interest-rates"
        >
          {/* DICGC trust banner */}
          <div className="flex items-center gap-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl mb-12">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-sm text-emerald-800 font-medium">
              All deposits with MNS Bank are insured by DICGC (Govt. of India) up to <strong>₹5,00,000</strong> per depositor. Your money is 100% safe.
            </p>
          </div>

          {/* Personal Deposits */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-1 bg-[#C0001B] rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Personal Deposits</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {personalDeposits.map(dep => (
                <DepositCard key={dep.href} {...dep} />
              ))}
            </div>
          </section>

          {/* Business Deposits */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-1 bg-[#C0001B] rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Business Deposits</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {businessDeposits.map(dep => (
                <DepositCard key={dep.href} {...dep} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full" />
            <h3 className="text-2xl font-bold mb-2">Ready to start saving?</h3>
            <p className="text-white/80 mb-6">Open a deposit account today and start earning guaranteed returns.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Talk to Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}

function DepositCard({ title, href, icon: Icon, desc, rate, tag, features }: { title: string; href: string; icon: any; desc: string; rate: string; tag: string | null; features: string[] }) {
  return (
    <Link href={href} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/30 hover:shadow-[0_8px_32px_rgba(192,0,27,0.08)] transition-all relative overflow-hidden flex flex-col">
      {tag && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-[#C0001B] text-white px-2 py-0.5 rounded-full">{tag}</span>
      )}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-[16px] font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
      <ul className="space-y-1.5 mb-5 flex-1">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1 h-1 rounded-full bg-[#C0001B]/40 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-bold text-[#C0001B] bg-[#C0001B]/8 px-3 py-1 rounded-full">{rate}</span>
        <span className="text-sm font-bold text-[#C0001B] flex items-center gap-1 group-hover:gap-2 transition-all">
          Open <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
