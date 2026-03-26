import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, Smartphone } from "lucide-react"

const billers = [
  { cat: "Electricity", examples: "MPEB, Madhya Pradesh Poorv, Paschim, Madhya Kshetra Vidyut" },
  { cat: "Water", examples: "Bhopal Municipal Corporation (BMC)" },
  { cat: "Gas", examples: "Indane, HP Gas, Bharat Gas (cylinder booking)" },
  { cat: "Broadband / Internet", examples: "BSNL, Jio Fiber, Airtel Xstream" },
  { cat: "Postpaid Mobile", examples: "Airtel, Jio, Vi, BSNL" },
  { cat: "Insurance Premium", examples: "LIC, HDFC Life, SBI Life" },
  { cat: "Education Fees", examples: "Various school / college fee portals" },
  { cat: "Municipal Tax", examples: "Bhopal Nagar Palika" },
]

export default function BBPSPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="BBPS Bill Pay"
          subtitle="Pay all your utility bills in one place — electricity, water, gas, insurance and more — securely via MNS Bank."
          breadcrumbs={[{ label: "Services" }, { label: "BBPS Bill Pay" }]}
        >
          {/* How to */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { num: "01", icon: Smartphone, title: "Login to Net / Mobile Banking", desc: "Access your MNS Bank account online or via the mobile app." },
              { num: "02", icon: Zap, title: "Go to Bill Pay / BBPS", desc: "Select the biller category and enter your consumer number." },
              { num: "03", icon: ShieldCheck, title: "Pay & Get Instant Receipt", desc: "Confirm payment — instant confirmation with digital receipt." },
            ].map(s => (
              <div key={s.num} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] mb-3">Step {s.num}</div>
                <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-[#C0001B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Supported Biller Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {billers.map(b => (
              <div key={b.cat} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#C0001B]/20 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <h3 className="font-bold text-sm text-gray-900">{b.cat}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{b.examples}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Pay bills without leaving home</h3>
              <p className="text-white/80 text-sm mt-1">Login to MNS Net Banking or Mobile App to access BBPS Bill Pay.</p>
            </div>
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
