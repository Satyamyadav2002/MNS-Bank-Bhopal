import Link from "next/link"
import { Building2, Phone, Mail, MapPin, Shield, ExternalLink } from "lucide-react"

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Board of Directors", href: "/about/board" },
  { title: "Annual Reports", href: "/about/reports" },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
  { title: "Branch Locator", href: "/branches" },
]

const products = [
  { title: "Savings Account", href: "/accounts/savings" },
  { title: "Current Account", href: "/accounts/current" },
  { title: "Fixed Deposit", href: "/deposits/fixed" },
  { title: "Recurring Deposit", href: "/deposits/recurring" },
  { title: "Home Loan", href: "/loans/home" },
  { title: "Gold Loan", href: "/loans/gold" },
]

const services = [
  { title: "Net Banking", href: "/services/net-banking" },
  { title: "Mobile Banking", href: "/services/mobile-banking" },
  { title: "EMI Calculator", href: "/calculator" },
  { title: "Download Forms", href: "/downloads" },
  { title: "Interest Rates", href: "/rates" },
  { title: "Service Charges", href: "/charges" },
]

const compliance = [
  { title: "Grievance Redressal", href: "/grievance" },
  { title: "RBI Ombudsman", href: "https://cms.rbi.org.in", external: true },
  { title: "KYC Policy", href: "/policies/kyc" },
  { title: "Fair Practice Code", href: "/policies/fair-practice" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Citizen Charter", href: "/policies/citizen-charter" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Grievance Banner */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6" />
              <div>
                <span className="font-semibold">Grievance Redressal Officer:</span>
                <span className="ml-2">Shri. Rajesh Kumar</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+917554098000" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" />
                0755-4098000
              </a>
              <a href="mailto:grievance@mnsbankbhopal.com" className="flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" />
                grievance@mnsbankbhopal.com
              </a>
              <Link href="/grievance" className="hover:underline font-medium">
                File Complaint
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Bank Info */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">MNS Bank</h3>
                  <p className="text-sm text-white/60">महानगर नागरिक सहकारी बैंक</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4 max-w-xs">
                Serving the Bhopal community since 1954 with trust, transparency, and cooperative values.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Head Office: Bairagarh, Bhopal - 462030, Madhya Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>0755-4098000 / 4098001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@mnsbankbhopal.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base mb-4">About Bank</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white hover:underline transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-base mb-4">Products</h4>
              <ul className="space-y-2">
                {products.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white hover:underline transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white hover:underline transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h4 className="font-semibold text-base mb-4">Compliance</h4>
              <ul className="space-y-2">
                {compliance.map((link) => (
                  <li key={link.title}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white hover:underline transition-colors inline-flex items-center gap-1">
                        {link.title}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/70 hover:text-white hover:underline transition-colors">
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <Shield className="h-4 w-4 text-[#D4A017]" />
                <span>DICGC Insured</span>
              </div>
              <span>RBI Reg. No. MCGM/BPL/2023</span>
              <span>IFSC: MNSB0001234</span>
            </div>
            <div className="text-center md:text-right">
              <p>2026 Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
