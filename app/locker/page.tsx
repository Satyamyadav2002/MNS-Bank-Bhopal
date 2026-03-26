import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Lock, Shield, Key } from "lucide-react"

export default function LockerPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Safe Deposit Locker"
          subtitle="Secure your valuables — gold, documents, jewellery — in our bank-grade safe deposit lockers."
          breadcrumbs={[{ label: "Services" }, { label: "Safe Deposit Locker" }]}
          ctaLabel="Enquire at Branch"
          ctaHref="/locate-us"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Lock, title: "Bank-Grade Security", desc: "Lockers stored in reinforced vaults with 24×7 surveillance and dual-key access." },
              { icon: Shield, title: "Insurance Cover", desc: "Lockers are covered under bank's property insurance policy." },
              { icon: Key, title: "Dual-Key Access", desc: "Your unique key + the bank's master key required to open — no unauthorised access." },
            ].map(f => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3 group-hover:bg-[#C0001B] transition-colors">
                  <f.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Locker Sizes & Annual Charges</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Size</th><th className="text-left px-5 py-3 font-semibold">Dimensions (approx.)</th><th className="text-left px-5 py-3 font-semibold">Annual Rent</th><th className="text-left px-5 py-3 font-semibold">Key Deposit</th></tr></thead>
              <tbody>
                {[
                  ["Small", "9\" × 5\" × 5\"", "₹800 + GST", "₹1,000 (refundable)"],
                  ["Medium", "12\" × 8\" × 5\"", "₹1,200 + GST", "₹1,000 (refundable)"],
                  ["Large", "18\" × 10\" × 5\"", "₹2,000 + GST", "₹1,000 (refundable)"],
                ].map(([size, dim, rent, dep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 text-gray-800 font-bold">{size}</td>
                    <td className="px-5 py-3 text-gray-600">{dim}</td>
                    <td className="px-5 py-3 font-bold text-[#C0001B]">{rent}</td>
                    <td className="px-5 py-3 text-gray-600">{dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Eligibility</h2>
              {["Existing MNS Bank account holder", "Valid KYC (Aadhaar + PAN)", "Minimum FD of ₹5,000 (may be required for large lockers)", "Joint locker facility available"].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">What you can store</h2>
              {["Gold jewellery and ornaments", "Important documents (property papers, will)", "Passports and original certificates", "Family heirlooms and antiques", "Share certificates and bonds"].map((e, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl mb-2 hover:border-[#C0001B]/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Check locker availability</h3><p className="text-white/80 text-sm mt-1">Locker availability is subject to vacancy at each branch. Contact us to check.</p></div>
            <Link href="/locate-us" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
