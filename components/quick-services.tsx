"use client"

import Link from "next/link"
import { 
  CreditCard, 
  PiggyBank, 
  Landmark, 
  Calculator, 
  FileText, 
  Smartphone 
} from "lucide-react"

const services = [
  {
    title: "I Need an Account",
    description: "Open savings or current account",
    icon: CreditCard,
    href: "/accounts/savings",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "I Need a Loan",
    description: "Home, Gold, Personal & more",
    icon: Landmark,
    href: "/loans",
    color: "bg-[#D4A017]/10 text-[#D4A017]",
  },
  {
    title: "I Want to Save",
    description: "FD, RD & deposit schemes",
    icon: PiggyBank,
    href: "/deposits",
    color: "bg-[#28A745]/10 text-[#28A745]",
  },
  {
    title: "EMI Calculator",
    description: "Calculate your loan EMI",
    icon: Calculator,
    href: "/calculator",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Download Forms",
    description: "Account opening & loan forms",
    icon: FileText,
    href: "/downloads",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Digital Banking",
    description: "Net Banking & Mobile App",
    icon: Smartphone,
    href: "/services/net-banking",
    color: "bg-[#D4A017]/10 text-[#D4A017]",
  },
]

export function QuickServices() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick access to our most popular banking services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
