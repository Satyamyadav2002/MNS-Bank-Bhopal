import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { Smartphone, QrCode, ArrowRight, CheckCircle2, Shield, Zap, Clock } from "lucide-react"

const steps = [
  { num: "01", title: "Enable UPI in your bank app", desc: "Open MNS Mobile Banking app → Go to UPI section → Link your MNS Bank account." },
  { num: "02", title: "Set your UPI PIN", desc: "Create a 6-digit UPI PIN linked to your debit card details." },
  { num: "03", title: "Pay / Receive instantly", desc: "Use your VPA (Virtual Payment Address) or scan any UPI QR code to pay." },
]

const upiFeatures = [
  { icon: Zap, title: "Instant Transfers", desc: "Money credited in seconds — 24×7, even on bank holidays." },
  { icon: Shield, title: "Bank-grade Security", desc: "All transactions PIN-protected and encrypted end-to-end." },
  { icon: Clock, title: "Zero Charges", desc: "No transaction charge for peer-to-peer UPI payments." },
  { icon: QrCode, title: "Scan & Pay", desc: "Accept payments via your unique MNS Bank QR code at your shop." },
]

export default function UpiQrPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="UPI / QR Payments"
          subtitle="Instant, secure money transfers using UPI — send and receive money 24×7."
          breadcrumbs={[{ label: "Services" }, { label: "UPI / QR" }]}
        >
          <div className="grid lg:grid-cols-2 gap-12 mb-14">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">How to get started with UPI</h2>
              {steps.map(s => (
                <div key={s.num} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C0001B] text-white font-bold text-sm flex items-center justify-center shrink-0">{s.num}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-[#FFF5F6] border border-[#C0001B]/10 rounded-xl">
                <p className="text-sm font-semibold text-[#C0001B]">Your MNS Bank VPA</p>
                <p className="text-sm text-gray-600 mt-1">Format: <code className="font-bold">youraccountnumber@mnsbank</code></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {upiFeatures.map(f => (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#C0001B]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-[#C0001B]" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white text-center">
            <QrCode className="w-10 h-10 mx-auto mb-3 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Get your MNS Bank QR Code</h3>
            <p className="text-white/80 text-sm mb-6">Contact your nearest branch to receive your personalised UPI QR code for accepting payments.</p>
            <Link href="/locate-us" className="inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Locate Branch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
