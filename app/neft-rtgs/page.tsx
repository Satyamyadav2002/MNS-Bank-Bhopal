import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react"

export default function NeftRtgsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="NEFT / RTGS"
          subtitle="Transfer funds to any bank account in India securely — via NEFT (batch) or RTGS (real-time for large amounts)."
          breadcrumbs={[{ label: "Services" }, { label: "NEFT / RTGS" }]}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* NEFT */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C0001B] flex items-center justify-center text-white font-bold text-sm">NE</div>
                <div><h2 className="font-bold text-gray-900">NEFT</h2><p className="text-xs text-gray-500">National Electronic Fund Transfer</p></div>
              </div>
              <div className="space-y-3 mb-5">
                {[["Minimum Amount", "No minimum"], ["Maximum Amount", "No limit"], ["Settlement", "In batches every 30 min"], ["Availability", "24×7 (including holidays)"], ["Charges (up to ₹10K)", "₹2.50 + GST"], ["Charges (₹10K–₹1L)", "₹5 + GST"], ["Charges (₹1L–₹2L)", "₹15 + GST"], ["Charges (above ₹2L)", "₹25 + GST"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-semibold text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-800">Best for: Everyday fund transfers of any amount.</div>
            </div>

            {/* RTGS */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">RT</div>
                <div><h2 className="font-bold text-gray-900">RTGS</h2><p className="text-xs text-gray-500">Real Time Gross Settlement</p></div>
              </div>
              <div className="space-y-3 mb-5">
                {[["Minimum Amount", "₹2,00,000"], ["Maximum Amount", "No limit"], ["Settlement", "Real-time (gross)"], ["Availability", "24×7 (including holidays)"], ["Charges (₹2L–₹5L)", "₹25 + GST"], ["Charges (above ₹5L)", "₹50 + GST"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-semibold text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-800">Best for: High-value real-time transfers above ₹2 lakh.</div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">What you need to transfer funds</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {["Beneficiary's full name", "Beneficiary's bank account number", "Beneficiary bank's IFSC code", "Your net banking / branch access", "Purpose of remittance (for large amounts)"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Transfer funds from anywhere</h3><p className="text-white/80 text-sm mt-1">Initiate NEFT / RTGS via Net Banking, Mobile App, or visit your branch.</p></div>
            <Link href="/net-banking" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Net Banking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
