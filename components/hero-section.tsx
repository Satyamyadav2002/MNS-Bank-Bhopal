"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Building, Users, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-white to-[#FAF7F2]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>DICGC Insured up to Rs. 5 Lakh</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Trusted <br />
                <span className="text-primary">Cooperative Bank</span>
                <br />
                Since 1954
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                महानगर नागरिक सहकारी बैंक लिमिटेड, भोपाल - Building financial futures for generations with trust, transparency, and community values.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-[#8B0015] text-white text-lg px-8 py-6">
                Open Account Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6">
                Explore Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Years of Trust</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Branches</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">7.5%</div>
                <div className="text-sm text-muted-foreground">FD Interest</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fixed Deposit</h3>
                    <p className="text-muted-foreground text-sm">Secure your future</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-bold text-[#28A745]">7.5%</div>
                    <div className="text-xs text-muted-foreground">p.a.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                    <Award className="h-8 w-8 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gold Loan</h3>
                    <p className="text-muted-foreground text-sm">Instant approval</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-bold text-[#28A745]">9.5%</div>
                    <div className="text-xs text-muted-foreground">p.a.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#28A745]/10 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-[#28A745]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Home Loan</h3>
                    <p className="text-muted-foreground text-sm">Build your dream</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-bold text-[#28A745]">8.5%</div>
                    <div className="text-xs text-muted-foreground">p.a.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#D4A017]/10 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white border-y border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#D4A017]" />
              <span>DICGC Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <span>RBI Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#28A745]" />
              <span>70+ Years of Trust</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>50,000+ Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
