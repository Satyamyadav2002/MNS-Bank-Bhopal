import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, CreditCard, Shield, Smartphone } from "lucide-react"

const cardFeatures = [
  { title: "RuPay Powered", desc: "Accepted at all RuPay-enabled ATMs and POS machines across India.", icon: CreditCard },
  { title: "NPCI Insurance", desc: "Complimentary accident insurance cover on select RuPay cards.", icon: Shield },
  { title: "Contactless Pay", desc: "Tap to pay at NFC-enabled merchant terminals.", icon: Smartphone },
]

export default function DebitCardsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Debit Cards"
          subtitle="MNS Bank RuPay Debit Card — accepted at ATMs, POS and online merchants across India."
          breadcrumbs={[{ label: "Services" }, { label: "Debit Cards" }]}
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Annual Fee", value: "₹100", sub: "Per year maintenance" },
              { label: "ATM Withdrawals", value: "Free*", sub: "5 free / month at other banks" },
              { label: "Daily Limit", value: "₹25,000", sub: "ATM withdrawal limit" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-2">{s.label}</div>
                <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {cardFeatures.map(f => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3 group-hover:bg-[#C0001B] transition-colors">
                  <f.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Card Features & Limits</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#C0001B] text-white"><th className="text-left px-5 py-3 font-semibold">Feature</th><th className="text-left px-5 py-3 font-semibold">Details</th></tr></thead>
              <tbody>
                {[
                  ["ATM Cash Withdrawal Limit", "₹25,000 per day"],
                  ["POS / Online Shopping Limit", "₹50,000 per day"],
                  ["Free ATM Transactions (MNS ATM)", "Unlimited"],
                  ["Free ATM Transactions (Other Banks)", "5 per month"],
                  ["Card Issuance", "Free for new account holders"],
                  ["Annual Maintenance Charge", "₹100 + GST p.a."],
                  ["Lost Card Replacement", "₹200 + GST"],
                  ["International Usage", "Not enabled (domestic only)"],
                ].map(([k, v], i) => <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="px-5 py-3 text-gray-600">{k}</td><td className="px-5 py-3 font-semibold text-gray-900">{v}</td></tr>)}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800 mb-12">
            <strong>Lost or stolen card?</strong> Report immediately at <strong>0755-XXXXXXX</strong> or visit your nearest branch to block the card and request a replacement.
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div><h3 className="text-xl font-bold">Get your RuPay Debit Card</h3><p className="text-white/80 text-sm mt-1">Open a savings account to receive your free RuPay debit card instantly.</p></div>
            <Link href="/savings-account" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Open Account <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
