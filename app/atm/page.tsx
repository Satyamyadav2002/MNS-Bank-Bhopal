import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"

const atms = [
  { location: "Head Office — Bairagarhi", address: "Bairagarhi Main Road, Bhopal", hours: "24×7", type: "Onsite ATM" },
  { location: "TT Nagar Branch", address: "TT Nagar, Bhopal", hours: "6 AM – 11 PM", type: "Onsite ATM" },
]

export default function AtmPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="ATM Services"
          subtitle="Withdraw cash, check balance and make transfers at MNS Bank ATMs — free and available 24×7."
          breadcrumbs={[{ label: "Services" }, { label: "ATM Services" }]}
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Home Bank ATM", value: "Free", sub: "Unlimited transactions" },
              { label: "Other Bank ATMs", value: "5 Free/month", sub: "₹20 thereafter" },
              { label: "Daily Limit", value: "₹25,000", sub: "Cash withdrawal per day" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2">{s.label}</div>
                <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">ATM Locations</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {atms.map(atm => (
              <div key={atm.location} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{atm.location}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C0001B] bg-[#C0001B]/8 px-2 py-0.5 rounded-full">{atm.type}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 text-[#C0001B] mt-0.5 shrink-0" />
                  {atm.address}
                </div>
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-1">⏰ {atm.hours}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Available at ATM</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {[
              "Cash Withdrawal",
              "Balance Enquiry",
              "Mini Statement (last 8 transactions)",
              "PIN Change",
              "Fund Transfer (intra-bank)",
              "Cheque Book Request",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-800 mb-10">
            <strong>Card skimming alert:</strong> If you notice any suspicious device on the ATM, do not use it. Report to <strong>0755-XXXXXXX</strong> or call <strong>1930</strong> immediately.
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Find your nearest ATM</h3><p className="text-white/80 text-sm mt-1">Use our branch & ATM locator to find MNS Bank ATMs near you.</p></div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate ATM <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
