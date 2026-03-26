import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap } from "lucide-react"

export default function ImpsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="IMPS"
          subtitle="Immediate Payment Service — instant 24×7 fund transfers to any bank in India, including weekends and holidays."
          breadcrumbs={[{ label: "Services" }, { label: "IMPS" }]}
        >
          {/* Key stats */}
          <div className="grid sm:grid-cols-4 gap-5 mb-12">
            {[
              { label: "Settlement", value: "Instant", sub: "Real-time credit" },
              { label: "Availability", value: "24×7", sub: "Including holidays" },
              { label: "Max Amount", value: "₹5,00,000", sub: "Per transaction" },
              { label: "Charges", value: "₹4 – ₹15", sub: "+ GST per transfer" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#C0001B] mb-2">{s.label}</div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Charge table */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">IMPS Transaction Charges</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Transaction Amount</th><th className="text-left px-5 py-3 font-semibold">Charge</th></tr></thead>
              <tbody>
                {[
                  ["Up to ₹10,000", "₹4 + GST"],
                  ["₹10,001 – ₹1,00,000", "₹6.50 + GST"],
                  ["₹1,00,001 – ₹5,00,000", "₹15 + GST"],
                ].map(([range, charge], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 text-gray-700">{range}</td>
                    <td className="px-5 py-3 font-bold text-gray-900">{charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">How to send money via IMPS</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { step: "01", title: "Login to Net/Mobile Banking", desc: "Access your MNS Bank account." },
              { step: "02", title: "Select IMPS / Fund Transfer", desc: "Enter beneficiary account number and IFSC, or use their mobile number + MMID." },
              { step: "03", title: "Confirm & Transfer", desc: "Authenticate with OTP — funds credited instantly." },
            ].map(s => (
              <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#C0001B]/20 transition-all">
                <div className="w-8 h-8 rounded-full bg-[#C0001B] text-white font-bold text-xs flex items-center justify-center mb-3">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Send money in seconds</h3>
              <p className="text-white/80 text-sm mt-1">Use IMPS via MNS Net Banking or Mobile App — anytime, anywhere.</p>
            </div>
            <Link href="/mobile-banking" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Mobile Banking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
