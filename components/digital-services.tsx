"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, CreditCard, Scan, ArrowRight, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Net Banking",
    description: "Access your accounts 24/7 from anywhere. Check balance, transfer funds, pay bills, and more.",
    features: ["Fund Transfer", "Bill Payments", "Statement Download", "FD/RD Booking"],
    href: "/services/net-banking",
    cta: "Login to Net Banking",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Bank on the go with our secure mobile app. Available on Android and iOS.",
    features: ["UPI Payments", "Quick Balance", "Mini Statement", "Fund Transfer"],
    href: "/services/mobile-banking",
    cta: "Download App",
  },
  {
    icon: Scan,
    title: "UPI / QR Payments",
    description: "Make instant payments using UPI. Scan and pay at any merchant.",
    features: ["Instant Transfer", "QR Code Pay", "Request Money", "Split Bills"],
    href: "/services/upi",
    cta: "Learn More",
  },
  {
    icon: CreditCard,
    title: "Debit Card",
    description: "RuPay debit card for seamless shopping and ATM withdrawals across India.",
    features: ["ATM Withdrawals", "Online Shopping", "Card Controls", "Rewards"],
    href: "/services/debit-card",
    cta: "Apply Now",
  },
]

export function DigitalServices() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Secure Digital Banking</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Services
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience modern banking at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.href}>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-secondary">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-[#8B0015] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Download Our Mobile App
              </h3>
              <p className="text-white/80 mb-6">
                Bank anywhere, anytime with MNS Bank mobile app. Check balance, transfer funds, pay bills and more - all from your smartphone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primary hover:bg-white/90">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 2H6.477C5.661 2 5 2.661 5 3.477v17.046C5 21.339 5.661 22 6.477 22h11.046c.816 0 1.477-.661 1.477-1.477V3.477C19 2.661 18.339 2 17.523 2zM12 20.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5-3H7V5h10v12.5z"/>
                  </svg>
                  Google Play
                </Button>
                <Button className="bg-white text-primary hover:bg-white/90">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-48 h-96 bg-white/10 rounded-3xl border-4 border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-50">MNS Bank App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
