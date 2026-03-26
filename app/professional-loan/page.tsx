import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Briefcase, Zap, Shield } from "lucide-react"

export default function ProfessionalLoanPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Professional Loan"
          subtitle="Tailored finance for doctors, CAs, architects, lawyers, and other self-employed professionals — to fund your practice, equipment, or expansion."
          breadcrumbs={[{ label: "Business" }, { label: "Loans" }, { label: "Professional Loan" }]}
          ctaLabel="Apply Now"
          ctaHref="/contact-us"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Rate From",     value: "12.00% p.a." },
              { label: "Loan Amount",   value: "Up to ₹40L" },
              { label: "Tenure",        value: "Up to 5 Yrs" },
              { label: "Approval",      value: "7 Days" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Briefcase, title: "For All Professions",      desc: "Doctors, dentists, CAs, engineers, lawyers, architects, and other licensed professionals." },
              { icon: Zap,       title: "No Collateral Required",   desc: "Unsecured loan based on your professional income and practice vintage." },
              { icon: Shield,    title: "Equipment & Clinic Finance", desc: "Use loan for clinic setup, diagnostic equipment, software, or office renovation." },
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
                "Valid professional degree / licence (MCI, ICAI, BCI etc.)",
                "Minimum 2 years of practice",
                "Last 2 years ITR with P&L statement",
                "Bank statements for 6 months",
                "Aadhaar + PAN of applicant",
                "Practice registration certificate",
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {e}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Apply for Professional Loan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/emi-calculator" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              EMI Calculator
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
