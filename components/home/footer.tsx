"use client"
import { ShieldCheck, Facebook, Twitter, Linkedin, ExternalLink, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative z-10">
      {/* Top red border line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C0001B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
                <Image src="/mnslogo.jpeg" alt="MNS Bank Logo" width={160} height={42} className="h-9 w-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted partner in growth since 1954. Committed to providing premium cooperative banking services to the citizens of Bhopal 🇮🇳.
            </p>
            {/* DICGC badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-[#C0001B]/30 rounded-full px-4 py-2.5 hover:bg-white/10 transition-all cursor-pointer group">
              <ShieldCheck className="w-5 h-5 text-[#C0001B] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-white font-bold text-xs tracking-wide">DICGC Insured</div>
                <div className="text-[#C0001B] text-[10px] uppercase font-bold mt-0.5">Up to ₹5 Lakh</div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] text-[#C0001B] uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "Savings Account", href: "/savings-account" },
                { label: "Current Account", href: "/current-account" },
                { label: "Fixed Deposits", href: "/time-deposit" },
                { label: "Double Deposit", href: "/double-deposit" },
                { label: "Home Loan", href: "/home-loan" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white hover:pl-1 transition-all duration-200">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[11px] text-[#C0001B] uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "Interest Rates", href: "/interest-rates" },
                { label: "Careers", href: "/careers" },
                { label: "Tenders", href: "/tenders" },
                { label: "Download Forms", href: "/download-forms" },
                { label: "Unclaimed Deposits (DEAF)", href: "/deaf-unclaimed-deposits" },
                { label: "Grievance Redressal", href: "/grievance-redressal" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white hover:pl-1 transition-all duration-200">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Portals + Social */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[11px] text-[#C0001B] uppercase tracking-widest mb-5">Important Portals</h4>
            <ul className="space-y-3 text-sm mb-8">
              {[
                { label: "RBI Ombudsman", href: "https://cms.rbi.org.in/" },
                { label: "SACHET Portal", href: "https://sachet.rbi.org.in/" },
                { label: "DICGC Guidelines", href: "https://dicgc.org.in/" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="text-[#C0001B] hover:text-red-400 transition-colors inline-flex items-center gap-1.5 font-semibold">
                    {item.label} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }, i) => (
                <a key={i} href="#" aria-label={label}
                  className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#C0001B] hover:border-[#C0001B] hover:text-white transition-all hover:-translate-y-0.5">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600">RBI License No: MP/UCB/001</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <Link href="/policy-centre" className="hover:text-white transition-colors">Fair Practice Code</Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button onClick={scrollToTop} aria-label="Back to top"
        className="fixed bottom-20 md:bottom-8 right-6 w-11 h-11 rounded-full bg-[#C0001B] text-white shadow-[0_4px_20px_rgba(192,0,27,0.4)] flex items-center justify-center hover:bg-[#8B0015] hover:-translate-y-1 transition-all z-50">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
