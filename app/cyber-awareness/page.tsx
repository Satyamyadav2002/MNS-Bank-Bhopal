import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, ShieldCheck, Phone, ExternalLink } from "lucide-react"

const threats = [
  { icon: AlertTriangle, title: "UPI Fraud", color: "red", tips: ["Never accept a payment request to 'receive' money — you should only send, not accept.", "Fraudsters send 'collect' requests that debit your account. Decline all unknown requests.", "Verify the merchant VPA carefully before authorising any UPI payment."] },
  { icon: Shield, title: "Phishing & Fake Websites", color: "orange", tips: ["Always access net banking by typing the URL directly — never via email links.", "Check for 'https' and the padlock icon before entering any banking details.", "MNS Bank never sends login links over SMS or email."] },
  { icon: ShieldCheck, title: "OTP Theft", color: "blue", tips: ["Never share your OTP, MPIN, or password with anyone — including bank staff.", "MNS Bank will never call or SMS asking for OTPs.", "Report suspicious calls immediately to 1930 or cybercrime.gov.in."] },
  { icon: AlertTriangle, title: "KYC Update Scams", color: "yellow", tips: ["Fraudsters call claiming your account will be blocked unless you share KYC details.", "MNS Bank updates KYC only through official channels — branch visit or verified portal.", "Hang up immediately on suspicious KYC calls."] },
]

export default function CyberAwarenessPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Cyber Awareness"
          subtitle="Stay safe online. Know how to protect yourself from digital banking fraud and scams."
          breadcrumbs={[{ label: "Cyber Awareness" }]}
        >
          {/* Emergency Banner */}
          <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-xl mb-10">
            <Phone className="w-6 h-6 text-red-600 shrink-0" />
            <div>
              <p className="font-bold text-red-800 text-sm">Cyber Fraud Helpline</p>
              <p className="text-red-700 text-sm">Call <strong>1930</strong> or visit <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold">cybercrime.gov.in</a> immediately if you are a victim of online fraud.</p>
            </div>
          </div>

          {/* Threat cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {threats.map(t => (
              <div key={t.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C0001B]/8 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-[#C0001B]" />
                  </div>
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {t.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C0001B]/40 mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Golden rules */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🔒 The Golden Rules of Safe Banking</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Never share your OTP, PIN, or password with anyone",
                "Only use official MNS Bank website and app",
                "Verify QR codes and UPI IDs before paying",
                "Report fraudulent calls to 1930 immediately",
                "Regularly update your net banking password",
                "Use only secure, private Wi-Fi for banking",
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#C0001B] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Report links */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Report Cyber Crime", url: "https://cybercrime.gov.in", desc: "National Cyber Crime Reporting Portal" },
              { label: "RBI Ombudsman", url: "https://cms.rbi.org.in", desc: "Escalate unresolved banking complaints" },
              { label: "NPCI Helpdesk", url: "https://npci.org.in", desc: "UPI and RuPay related queries" },
            ].map(link => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C0001B]/30 hover:shadow-md transition-all flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{link.desc}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#C0001B] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
