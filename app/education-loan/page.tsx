import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, GraduationCap, Users, Home } from "lucide-react"

export default function EducationLoanPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Education Loan"
          subtitle="Fund your or your child's higher education with flexible repayment and a moratorium period — from 10.00% p.a."
          breadcrumbs={[{ label: "Loans", href: "/loans" }, { label: "Education Loan" }]}
          ctaLabel="EMI Calculator"
          ctaHref="/emi-calculator"
        >
          <div className="grid sm:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Interest Rate", value: "From 10.00%", sub: "p.a. reducing balance" },
              { label: "Max Loan", value: "₹10,00,000", sub: "Higher on collateral" },
              { label: "Moratorium", value: "Course + 1 yr", sub: "Repayment starts after" },
              { label: "Processing Fee", value: "Nil", sub: "Zero processing charge" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#C0001B] mb-2">{s.label}</div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Covered Expenses</h2>
              {[
                "Tuition and examination fees",
                "Hostel and accommodation charges",
                "Books, equipment, and library fees",
                "Purchase of laptop / computer (if required)",
                "Study tour / project work expenses",
                "Insurance premium for the student",
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
                "Indian national aged 16–35 years",
                "Confirmed admission to a recognised institution",
                "Courses: Graduation, Post-graduation, Professional (MBBS, B.Tech, MBA, CA, etc.)",
                "Co-borrower: Parent or guardian required",
                "Collateral required for loans above ₹4,00,000",
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            Key Facts Statement
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">RBI Mandated</span>
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Particulars</th><th className="text-left px-5 py-3 font-semibold">Details</th></tr></thead>
              <tbody>
                {[
                  ["Interest Rate", "From 10.00% p.a. (reducing balance)"],
                  ["Processing Fee", "Nil"],
                  ["Maximum Amount", "₹4,00,000 (no collateral) / ₹10,00,000 (with collateral)"],
                  ["Moratorium Period", "Course duration + 1 year (or 6 months after getting job)"],
                  ["Repayment Tenure", "Up to 7 years after moratorium"],
                  ["Prepayment Charges", "Nil"],
                ].map(([k, v], i) => <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="px-5 py-3 text-gray-600">{k}</td><td className="px-5 py-3 font-semibold text-gray-900">{v}</td></tr>)}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Invest in your future today</h3><p className="text-white/80 text-sm mt-1">Bring your admission letter and KYC to any branch to begin.</p></div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Related Products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Personal Loan", rate: "From 12.00%", href: "/personal-loan", icon: Users },
                { title: "Savings Account", rate: "6.00% p.a.", href: "/savings-account", icon: GraduationCap },
                { title: "Home Loan", rate: "From 8.50%", href: "/home-loan", icon: Home },
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
