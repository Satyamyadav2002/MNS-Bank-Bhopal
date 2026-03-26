import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"

const branches = [
  { branch: "Head Office — Bairagarhi", ifsc: "HDFC0XXXXXX", micr: "462015001", address: "Bairagarhi Main Road, Bhopal — 462030" },
  { branch: "TT Nagar Branch", ifsc: "HDFC0XXXXXY", micr: "462015002", address: "TT Nagar, Bhopal — 462003" },
  { branch: "Karond Branch", ifsc: "HDFC0XXXXXZ", micr: "462015003", address: "Karond Chowk, Bhopal — 462038" },
]

export default function IfscCodesPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="IFSC Codes"
          subtitle="Find the IFSC and MICR codes for all MNS Bank branches for NEFT, RTGS and IMPS transactions."
          breadcrumbs={[{ label: "IFSC Codes" }]}
        >
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl mb-10 text-sm text-blue-800">
            <strong>What is IFSC?</strong> The Indian Financial System Code (IFSC) is an 11-character alphanumeric code used to uniquely identify a bank branch in India's fund transfer systems (NEFT, RTGS, IMPS).
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#C0001B] text-white">
                  <th className="text-left px-5 py-3 font-semibold">Branch</th>
                  <th className="text-left px-5 py-3 font-semibold">IFSC Code</th>
                  <th className="text-left px-5 py-3 font-semibold">MICR Code</th>
                  <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Address</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 text-gray-800 font-semibold">{b.branch}</td>
                    <td className="px-5 py-4"><code className="font-mono text-[#C0001B] font-bold bg-[#C0001B]/8 px-2 py-0.5 rounded">{b.ifsc}</code></td>
                    <td className="px-5 py-4 font-mono text-gray-700">{b.micr}</td>
                    <td className="px-5 py-4 text-gray-500 hidden md:table-cell text-xs">{b.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">How to use the IFSC code</h3>
            <p className="text-sm text-gray-600 leading-relaxed">When sending money to MNS Bank via NEFT/RTGS/IMPS from another bank, enter the recipient's account number and the IFSC code of the relevant MNS Bank branch. Transactions are processed within 30 minutes (NEFT) or instantly (IMPS).</p>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
