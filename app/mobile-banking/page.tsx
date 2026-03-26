import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Smartphone, Bell, Lock, TrendingUp } from "lucide-react"

const features = [
  { icon: TrendingUp, title: "View Balance & Statements", desc: "Instantly check your balance and download statements on the go." },
  { icon: Lock, title: "Secure Transfers", desc: "NEFT, RTGS and IMPS — all secured with MPIN and biometric." },
  { icon: Bell, title: "Instant Alerts", desc: "Real-time SMS and push notifications for every transaction." },
  { icon: Smartphone, title: "Works Offline", desc: "Check balance via *99# even without internet connectivity." },
]

export default function MobileBankingPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Mobile Banking"
          subtitle="Full-featured banking in your pocket — available on Android and iOS."
          breadcrumbs={[{ label: "Services" }, { label: "Mobile Banking" }]}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Everything you need, in one app</h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map(f => (
                  <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#C0001B]/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-3">
                      <f.icon className="w-4 h-4 text-[#C0001B]" />
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
                <strong>Security Tip:</strong> Never share your MPIN or OTP with anyone, including MNS Bank staff.
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white text-center">
              <Smartphone className="w-14 h-14 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Download MNS Mobile App</h3>
              <p className="text-white/80 text-sm mb-6">Available on Android. Visit Google Play Store or contact your nearest branch for the APK download link.</p>
              <div className="flex flex-col gap-2">
                <span className="inline-block bg-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full">Android — Google Play Store</span>
                <span className="inline-block bg-white/10 text-white/60 text-xs px-4 py-2 rounded-full">iOS — Coming Soon</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <p className="text-gray-600 text-sm mb-3">Can't use the app? Access all features on your desktop via</p>
            <Link href="/net-banking" className="inline-flex items-center gap-2 text-[#C0001B] font-bold text-sm hover:gap-3 transition-all">
              Net Banking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
