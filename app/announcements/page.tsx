import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const announcements = [
  {
    date: "26 Mar 2026",
    tag: "Deposit",
    title: "Special 1-Year FD Rate: 7.00% p.a.",
    desc: "MNS Bank is offering a special limited-period Fixed Deposit rate of 7.00% p.a. for a 1-year tenure. Senior Citizens receive an additional 0.50% (7.50% p.a.). Offer valid till 31 March 2026.",
    href: "/time-deposit",
  },
  {
    date: "26 Mar 2026",
    tag: "Safety",
    title: "DICGC Insurance Cover: ₹5,00,000",
    desc: "All deposits with Mahanagar Nagrik Sahakari Bank Ltd. are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC), a subsidiary of the Reserve Bank of India, up to ₹5,00,000 per depositor.",
    href: "/deposits",
  },
  {
    date: "15 Mar 2026",
    tag: "Service",
    title: "Net Banking & Mobile App Upgrade",
    desc: "MNS Bank's digital banking platform has been upgraded for enhanced security and speed. All customers are requested to update their mobile banking app to version 3.0 or above for the best experience.",
    href: "/net-banking",
  },
  {
    date: "01 Mar 2026",
    tag: "Awareness",
    title: "Beware of Cyber Fraud",
    desc: "MNS Bank customers are advised to never share OTP, ATM PIN, or net banking passwords with anyone — including bank staff. Report suspicious calls to 1930 immediately. Stay safe.",
    href: "/cyber-awareness",
  },
]

const tagColors: Record<string, string> = {
  Deposit: "bg-[#C0001B]/10 text-[#C0001B]",
  Safety: "bg-emerald-50 text-emerald-700",
  Service: "bg-blue-50 text-blue-700",
  Awareness: "bg-amber-50 text-amber-700",
}

export default function AnnouncementsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Announcements"
          subtitle="Latest news, rate updates, product launches and important notices from MNS Bank."
          breadcrumbs={[{ label: "Announcements" }]}
        >
          <div className="space-y-5">
            {announcements.map((a) => (
              <div key={a.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${tagColors[a.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {a.tag}
                  </span>
                  <span className="text-xs text-gray-400">{a.date}</span>
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-2">{a.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{a.desc}</p>
                <Link href={a.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C0001B] hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
