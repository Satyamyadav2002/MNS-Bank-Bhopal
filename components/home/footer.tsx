"use client"
import { ShieldCheck, Facebook, Twitter, Linkedin, ExternalLink, MapPin, Phone, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-[#141520] to-[#0D0E15] text-white pt-20 pb-8 relative border-none z-10 w-full">
      {/* Premium double gradient border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C0001B] via-[#C9922A] to-[#C0001B]" />
      <div className="absolute top-[2px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0C96A]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-xl flex items-center justify-center shadow-[0_8px_24px_rgba(192,0,27,0.3)]">
                <span className="font-serif text-3xl font-bold text-white leading-none">M</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-xl leading-tight">Mahanagar Bank</h3>
                <p className="font-serif italic text-[14px] text-[#F0C96A] tracking-wide mt-0.5">Your Trust. Our Responsibility.</p>
              </div>
            </div>
            
            <p className="text-white/35 text-[14px] mb-8 leading-relaxed max-w-sm">
              Your trusted partner in growth since 1954. Committed to providing premium, modern cooperative banking services to the citizens of Bhopal 🇮🇳.
            </p>
            
            {/* DICGC Badge with glow */}
            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-[#C9922A]/30 rounded-full px-5 py-3 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer group animate-border-glow">
              <ShieldCheck className="w-6 h-6 text-[#C9922A] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-white font-bold text-[13px] tracking-wide">DICGC Insured</div>
                <div className="text-[#C9922A] text-[10px] uppercase font-bold mt-0.5">Up to ₹5 Lakh</div>
              </div>
            </div>
          </div>
          
          {/* Products Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-sans font-bold text-[#C9922A] text-[11px] uppercase tracking-[0.12em] mb-6">Products</h4>
            <ul className="space-y-3.5 text-[14px] font-medium text-white/40">
              {[
                { label: "Savings Account", href: "/accounts/savings-account" },
                { label: "Current Account", href: "/accounts/current-account" },
                { label: "Fixed Deposits", href: "/deposits/fixed-deposits" },
                { label: "Double Deposit", href: "/deposits/double-deposit" },
                { label: "Home Loan", href: "/loans/home-loans" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-300 relative group/link inline-flex items-center">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9922A] group-hover/link:w-full transition-all duration-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h4 className="font-sans font-bold text-[#C9922A] text-[11px] uppercase tracking-[0.12em] mb-6">Quick Links</h4>
            <ul className="space-y-3.5 text-[14px] font-medium text-white/40">
              {[
                { label: "Interest Rates", href: "/interest-rates" },
                { label: "Careers", href: "/careers" },
                { label: "Tenders", href: "/tenders" },
                { label: "Download Forms", href: "/download-forms" },
                { label: "Unclaimed Deposits (DEAF)", href: "/deaf-unclaimed-deposits" },
                { label: "Grievance Redressal", href: "/grievance-redressal" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors duration-300 relative group/link inline-flex items-center">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9922A] group-hover/link:w-full transition-all duration-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Important Portal Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="font-sans font-bold text-[#C9922A] text-[11px] uppercase tracking-[0.12em] mb-6">Important Portals</h4>
            <ul className="space-y-3.5 text-[14px] font-medium">
              {[
                { label: "RBI Ombudsman", href: "https://cms.rbi.org.in/" },
                { label: "SACHET Portal", href: "https://sachet.rbi.org.in/" },
                { label: "DICGC Guidelines", href: "https://dicgc.org.in/" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#C9922A] hover:text-[#F0C96A] transition-colors duration-300 inline-flex items-center gap-1.5 font-bold group/ext">
                    {item.label} <ExternalLink className="w-3.5 h-3.5 group-hover/ext:-translate-y-0.5 group-hover/ext:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#C0001B] hover:border-[#C0001B] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(192,0,27,0.3)]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[12px] font-medium text-white/30">
          <p>© {new Date().getFullYear()} Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-5">
            <span className="text-white/20">RBI License No: MP/UCB/001</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/15" />
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/15" />
            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/15" />
            <Link href="/policy-centre" className="hover:text-white transition-colors duration-300">Fair Practice Code</Link>
          </div>
        </div>
      </div>
      
      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-20 md:bottom-8 right-6 w-11 h-11 rounded-full bg-gradient-to-br from-[#C0001B] to-[#8B0015] text-white shadow-[0_4px_20px_rgba(192,0,27,0.35)] flex items-center justify-center hover:shadow-[0_8px_28px_rgba(192,0,27,0.5)] hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
