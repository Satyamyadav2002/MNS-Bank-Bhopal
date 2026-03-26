import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

const branches = [
  {
    name: "Head Office — Bairagarhi",
    address: "Mahanagar Nagrik Sahakari Bank Ltd., Bairagarhi Main Road, Bhopal, MP 462030",
    phone: "0755-XXXXXXX",
    mobile: "+91 XXXXXXXXXX",
    ifsc: "HDFC0XXXXXX",
    hours: "Mon–Sat: 10:00 AM – 4:00 PM",
    type: "Branch + ATM",
  },
  {
    name: "TT Nagar Branch",
    address: "TT Nagar, Near Post Office, Bhopal, MP 462003",
    phone: "0755-XXXXXXX",
    mobile: "+91 XXXXXXXXXX",
    ifsc: "HDFC0XXXXXY",
    hours: "Mon–Sat: 10:00 AM – 4:00 PM",
    type: "Branch",
  },
  {
    name: "Karond Branch",
    address: "Karond Chowk, Bhopal, MP 462038",
    phone: "0755-XXXXXXX",
    mobile: "+91 XXXXXXXXXX",
    ifsc: "HDFC0XXXXXZ",
    hours: "Mon–Sat: 10:00 AM – 3:30 PM",
    type: "Branch",
  },
]

export default function LocateUsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Locate Us"
          subtitle="Find your nearest MNS Bank branch or ATM in Bhopal."
          breadcrumbs={[{ label: "Locate Us" }]}
        >
          {/* Map placeholder */}
          <div className="w-full h-72 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-12 overflow-hidden relative">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-[#C0001B] mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Interactive map — Open in Google Maps</p>
              <Link href="https://maps.google.com/?q=Mahanagar+Nagrik+Sahakari+Bank+Bhopal" target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#C0001B] border border-[#C0001B]/30 px-4 py-2 rounded-full hover:bg-[#FFF5F6] transition-colors">
                Open in Google Maps <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Branch Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map(b => (
              <div key={b.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-base">{b.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C0001B] bg-[#C0001B]/8 px-2.5 py-1 rounded-full shrink-0 ml-2">{b.type}</span>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C0001B] mt-0.5 shrink-0" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <Phone className="w-4 h-4 text-[#C0001B] mt-0.5 shrink-0" />
                    <span>{b.phone} / {b.mobile}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <Clock className="w-4 h-4 text-[#C0001B] mt-0.5 shrink-0" />
                    <span>{b.hours}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">IFSC: <strong className="text-gray-700">{b.ifsc}</strong></span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800">
            <strong>Banking Hours:</strong> All branches are open Monday to Saturday except bank holidays. We are closed on national holidays and 2nd & 4th Saturdays.
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
