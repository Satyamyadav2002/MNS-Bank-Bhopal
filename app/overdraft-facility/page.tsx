import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, CreditCard, Zap, Repeat } from "lucide-react"

export default function OverdraftFacilityPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Overdraft Facility"
          subtitle="Flexible credit linked to your current account — withdraw beyond your balance up to a pre-approved limit and pay interest only on usage."
          breadcrumbs={[{ label: "Business" }, { label: "Loans" }, { label: "Overdraft Facility" }]}
          ctaLabel="Apply Now"
          ctaHref="/contact-us"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "OD Limit",        value: "Up to ₹25L" },
              { label: "Interest",        value: "Pay on Use" },
              { label: "Against",         value: "FD / Property" },
              { label: "Processing Fee",  value: "0.50%" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: CreditCard, title: "Linked to Current Account", desc: "OD is automatically available within your current account — no separate withdrawal needed." },
              { icon: Zap,        title: "Instant Access to Funds",   desc: "Draw funds anytime within the sanctioned limit. No paperwork per drawdown." },
              { icon: Repeat,     title: "Revolving Credit",          desc: "Repay and redraw within the tenure — ideal for businesses with seasonal cash flow." },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[#C0001B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Eligibility & Documents</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Existing current account holder at MNS Bank",
                "Valid FD / property to offer as security",
                "GST registration & ITR for last 2 years",
                "Satisfactory banking history (min. 6 months)",
                "Business vintage of at least 1 year",
                "KYC of all authorised persons",
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Apply for OD Facility <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
