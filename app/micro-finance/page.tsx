import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Heart, Shield } from "lucide-react"

const groups = [
  { label: "SHG Members",     value: "₹50K – ₹5L" },
  { label: "JLG Members",     value: "₹25K – ₹2L" },
  { label: "Micro Business",  value: "₹1L – ₹10L" },
]

export default function MicroFinancePage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Micro Finance"
          subtitle="Empowering Self-Help Groups (SHG) and Joint Liability Groups (JLG) with accessible credit to build sustainable livelihoods across Bhopal."
          breadcrumbs={[{ label: "Business" }, { label: "Loans" }, { label: "Micro Finance" }]}
          ctaLabel="Apply Now"
          ctaHref="/contact-us"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Starting Rate",   value: "10.00% p.a." },
              { label: "Min. Loan",       value: "₹25,000" },
              { label: "Max. Tenure",     value: "3 Years" },
              { label: "Group Size",      value: "5–20 Members" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Group loan limits */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Loan Limits by Group Type</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {groups.map((g, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <span className="font-semibold text-gray-700">{g.label}</span>
                  <span className="font-bold text-[#C0001B]">{g.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Users,  title: "Group-Based Lending",    desc: "Credit extended to SHG and JLG groups — peer accountability replaces collateral." },
              { icon: Heart,  title: "Women Empowerment Focus", desc: "Priority lending to women-led SHGs at subsidised rates under government linkage programs." },
              { icon: Shield, title: "No Collateral",           desc: "Group guarantee serves as collateral. No property pledge required for micro loans." },
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
                "Registered SHG / JLG with MNS Bank savings account",
                "Group vintage of at least 6 months",
                "Regular savings record in group passbook",
                "Aadhaar card of all members",
                "Bank passbook of the group",
                "Activity / income proof (for micro business loans)",
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Apply for Micro Finance <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/locate-us" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              Visit Nearest Branch
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
