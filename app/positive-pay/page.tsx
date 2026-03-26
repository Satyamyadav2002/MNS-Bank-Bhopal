import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield, AlertTriangle, FileText } from "lucide-react"

export default function PositivePayPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Positive Pay System"
          subtitle="Protect your high-value cheques from fraud. Register cheque details in advance so the bank can verify them before processing."
          breadcrumbs={[{ label: "Services" }, { label: "Positive Pay System" }]}
        >
          {/* Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-amber-800 mb-1">RBI Mandate</div>
              <p className="text-sm text-amber-700 leading-relaxed">
                As per RBI guidelines, Positive Pay confirmation is mandatory for all cheques of ₹50,000 and above. 
                Cheques without PPS registration may be returned.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-[#C0001B]" /> How It Works</h2>
              <ol className="space-y-3 text-sm text-gray-600">
                {[
                  "You issue a cheque of ₹50,000 or above.",
                  "Register cheque details (number, date, payee, amount) through Net Banking, Mobile Banking, or at the branch.",
                  "When the cheque is presented for clearing, the bank cross-verifies against your registration.",
                  "If details match → cheque is processed. If mismatch → cheque is held and you are notified.",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#C0001B]/8 flex items-center justify-center shrink-0 text-xs font-bold text-[#C0001B]">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-[#C0001B]" /> How to Register</h2>
              <div className="space-y-3">
                {[
                  { method: "Net Banking", desc: "Login → Payments → Positive Pay → Add Cheque Details" },
                  { method: "Mobile Banking", desc: "Open App → More → Positive Pay → Register Cheque" },
                  { method: "Branch Visit", desc: "Fill PPS registration form at any MNS Bank branch" },
                  { method: "SMS Banking", desc: "SMS: PPS <ChequeNo> <Amount> <Date> to 9XXXXXXXXX" },
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" />
                    <div><strong className="text-gray-800">{m.method}:</strong> {m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Key Details</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                "Applicable for cheques of ₹50,000 and above",
                "Registration must be done before cheque is presented",
                "Free of charge — no extra fees",
                "Applicable to all account types (Savings, Current)",
                "RBI Circular: CO.DPSS.POLC.No.S-16/02-14-003/2020-21",
                "Contact branch if cheque is flagged for mismatch",
              ].map((d, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {d}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/net-banking" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              Register via Net Banking <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              Contact Branch
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
