import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

const chargeCategories = [
  {
    title: "Savings Account Charges",
    rows: [
      ["Minimum Balance", "Zero (Nil)"],
      ["Non-maintenance of minimum balance", "Nil"],
      ["Account Closure Charges (< 1 year)", "₹200"],
      ["Cheque Book (First book)", "Free"],
      ["Cheque Book (Additional)", "₹100 per book"],
      ["RTGS / NEFT (via branch)", "As per RBI guidelines"],
      ["ATM Transactions (home bank)", "Free"],
      ["ATM Transactions (other bank, >5/month)", "₹20 per transaction"],
      ["Duplicate Pass Book / Statement", "₹50"],
    ]
  },
  {
    title: "Fixed Deposit Charges",
    rows: [
      ["Premature Withdrawal Penalty", "1% below contracted rate"],
      ["Duplicate FD Receipt", "₹50"],
      ["FD Loan Processing Fee", "Nil"],
      ["Auto-Renewal", "Free"],
    ]
  },
  {
    title: "Loan Processing Fees",
    rows: [
      ["Home Loan", "0.5% of loan amount"],
      ["Gold Loan", "0.25% of loan amount"],
      ["Personal Loan", "1% of loan amount"],
      ["Car Loan", "0.5% of loan amount"],
      ["Education Loan", "Nil"],
      ["Working Capital Loan", "0.75% of loan amount"],
    ]
  },
  {
    title: "NEFT / RTGS Charges",
    rows: [
      ["NEFT (Up to ₹10,000)", "₹2.50 + GST"],
      ["NEFT (₹10,001 – ₹1 lakh)", "₹5 + GST"],
      ["NEFT (₹1 lakh – ₹2 lakh)", "₹15 + GST"],
      ["NEFT (> ₹2 lakh)", "₹25 + GST"],
      ["RTGS (₹2 lakh – ₹5 lakh)", "₹25 + GST"],
      ["RTGS (> ₹5 lakh)", "₹50 + GST"],
      ["IMPS (Up to ₹10,000)", "₹4 + GST"],
      ["IMPS (₹10,001 – ₹1 lakh)", "₹6.50 + GST"],
    ]
  },
  {
    title: "Debit Card Charges",
    rows: [
      ["Card Issuance", "Free"],
      ["Annual Maintenance Charge", "₹100 p.a."],
      ["Lost Card Replacement", "₹200"],
      ["PIN Regeneration", "Free (online / ATM)"],
    ]
  },
  {
    title: "Locker Charges",
    rows: [
      ["Small Locker (Annual)", "₹800"],
      ["Medium Locker (Annual)", "₹1,200"],
      ["Large Locker (Annual)", "₹2,000"],
      ["Key Deposit (Refundable)", "₹1,000"],
    ]
  },
]

export default function ServiceChargesPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Service Charges"
          subtitle="Transparent fee structure for all accounts, loans, and services at MNS Bank."
          breadcrumbs={[{ label: "Service Charges" }]}
          ctaLabel="Download Full Schedule"
          ctaHref="/download-forms"
        >
          {/* Disclaimer */}
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl mb-10 text-sm text-amber-800">
            <strong>Note:</strong> Charges are subject to revision. GST applicable as per prevailing rates. Last updated: March 2026.
          </div>

          <div className="space-y-12">
            {chargeCategories.map(cat => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-5 w-1 bg-[#C0001B] rounded-full" />
                  <h2 className="text-lg font-bold text-gray-900">{cat.title}</h2>
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#C0001B] text-white">
                        <th className="text-left px-5 py-3 font-semibold">Particulars</th>
                        <th className="text-left px-5 py-3 font-semibold">Charges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.rows.map(([label, val], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-5 py-3.5 text-gray-700">{label}</td>
                          <td className="px-5 py-3.5 font-semibold text-gray-900">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* CTA footer */}
          <div className="mt-16 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Need the complete charges schedule?</h3>
              <p className="text-white/80 text-sm mt-1">Download the full PDF with all applicable charges and GST breakdowns.</p>
            </div>
            <Link href="/download-forms" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Download PDF
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
