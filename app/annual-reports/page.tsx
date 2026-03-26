import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import { TrendingUp, Shield, Users, Download, FileText } from "lucide-react"

const highlights = [
  { label: "Total Deposits",    value: "₹450 Cr+",  icon: TrendingUp },
  { label: "CRAR",              value: "14.25%",     icon: Shield },
  { label: "Total Members",     value: "50,000+",    icon: Users },
  { label: "Net Profit",        value: "₹8.2 Cr",   icon: TrendingUp },
]

const reports = [
  { year: "2024-25", title: "76th Annual Report", size: "4.2 MB" },
  { year: "2023-24", title: "75th Annual Report", size: "3.8 MB" },
  { year: "2022-23", title: "74th Annual Report", size: "3.5 MB" },
  { year: "2021-22", title: "73rd Annual Report", size: "3.1 MB" },
  { year: "2020-21", title: "72nd Annual Report", size: "2.9 MB" },
]

export default function AnnualReportsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Annual Reports & Financials"
          subtitle="Transparency is at the heart of cooperative banking. Review our audited financial statements and annual reports."
          breadcrumbs={[{ label: "About Us", href: "/about-us" }, { label: "Annual Reports" }]}
        >
          {/* Key Financial Highlights */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Key Financial Highlights (FY 2024-25)</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {highlights.map((h, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <h.icon className="w-6 h-6 text-[#C0001B] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#C0001B] mb-1">{h.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{h.label}</div>
              </div>
            ))}
          </div>

          {/* Download Reports */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C0001B]" />
              <h2 className="font-bold text-gray-900">Download Annual Reports</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {reports.map((r, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors group">
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-[#C0001B] transition-colors">{r.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">Financial Year {r.year} · PDF · {r.size}</div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#C0001B] hover:bg-[#C0001B]/5 px-4 py-2 rounded-xl transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Regulatory Information</h3>
            <div className="text-sm text-gray-500 space-y-2 leading-relaxed">
              <p><strong className="text-gray-700">RBI License:</strong> MP/UCB/001 | <strong className="text-gray-700">CRAR:</strong> 14.25% (above RBI minimum of 9%)</p>
              <p><strong className="text-gray-700">DICGC:</strong> All deposits insured up to ₹5,00,000 under the Deposit Insurance and Credit Guarantee Corporation.</p>
              <p><strong className="text-gray-700">Audit:</strong> All financial statements are audited by a chartered accountant appointed by the Registrar of Cooperative Societies, MP.</p>
            </div>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
