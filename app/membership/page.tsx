import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Shield, Award, FileText, Download } from "lucide-react"

const benefits = [
  "Equal voting rights in all General Body meetings",
  "Share in the bank's annual dividend",
  "Priority in loan processing and special rates",
  "Participate in bank governance and elections",
  "Access to exclusive member-only deposit schemes",
  "Free nomination facility for shares",
]

const steps = [
  { num: "01", title: "Eligibility Check",  desc: "Must be 18+ and a resident of Bhopal. Both individuals and registered entities can apply." },
  { num: "02", title: "Share Purchase",     desc: "Minimum 10 shares at ₹25/share = ₹250. Additional shares can be purchased over time." },
  { num: "03", title: "KYC Documentation",  desc: "Submit Aadhaar, PAN, 2 photographs, and proof of residence along with the membership form." },
  { num: "04", title: "Approval & Welcome",  desc: "Board approval typically within 7 working days. Welcome kit with passbook and share certificate issued." },
]

export default function MembershipPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Membership / Shareholding"
          subtitle="Join the Mahanagar family. As a cooperative bank, every member is an equal owner — with voting rights, dividends, and a voice in governance."
          breadcrumbs={[{ label: "About Us", href: "/about-us" }, { label: "Membership" }]}
          ctaLabel="Download Form"
          ctaHref="/download-forms"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Share Value",   value: "₹25/share" },
              { label: "Min. Shares",   value: "10 Shares" },
              { label: "Min. Investment", value: "₹250" },
              { label: "Active Members", value: "50,000+" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl p-5 text-center">
                <div className="text-xl font-bold text-[#C0001B] mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* How to Join */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">How to Become a Member</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {steps.map((s, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-sm transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
                <span className="text-4xl font-bold text-gray-100 absolute top-3 right-4">{s.num}</span>
                <h3 className="font-bold text-gray-900 mb-2 mt-6">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Member Benefits */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-[#C0001B]" /> Member Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-[#C0001B]" /> Documents Required</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Aadhaar Card (front & back)","PAN Card","2 Passport-size Photographs","Proof of Residence in Bhopal","Membership Application Form (A4)","Share purchase amount (cash/cheque)"].map((d, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" /> {d}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/download-forms" className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]">
              <Download className="w-4 h-4" /> Download Membership Form
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
