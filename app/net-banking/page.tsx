import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { Monitor, Shield, Lock, Smartphone, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

const features = [
  { icon: Shield, title: "Bank-grade Security", desc: "256-bit SSL encryption and two-factor authentication on every login." },
  { icon: Clock, title: "24×7 Access", desc: "Manage your account anytime — day, night, holidays." },
  { icon: Monitor, title: "Full Account Access", desc: "View balance, statements, transactions, FDs and loans in one place." },
  { icon: Lock, title: "Secure Fund Transfers", desc: "Transfer funds via NEFT, RTGS, IMPS directly from your browser." },
]

const services = [
  "View account balance & mini-statement",
  "Download account statement (PDF)",
  "Transfer funds — NEFT, RTGS, IMPS",
  "Open / renew Fixed Deposits online",
  "Pay utility bills via BBPS",
  "Request cheque book",
  "Update contact details",
  "Raise service requests",
]

export default function NetBankingPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Net Banking"
          subtitle="Secure, 24×7 online banking — manage your MNS Bank account from anywhere."
          breadcrumbs={[{ label: "Services" }, { label: "Net Banking" }]}
          ctaLabel="Login to Net Banking"
          ctaHref="https://netbanking.mnsbankbhopal.com"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">What you can do with MNS Net Banking</h2>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
                <strong>Security Tip:</strong> MNS Bank will never ask for your password or OTP via phone call or email. Always log in only from <code>netbanking.mnsbankbhopal.com</code>.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-[#C0001B]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Not registered for Net Banking?</h3>
              <p className="text-white/80 text-sm mt-1">Visit your nearest branch with your account and Aadhaar to get started.</p>
            </div>
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
