"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Building, Users, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-white to-[#F0EBE1]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '4s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-primary text-sm font-medium border border-white/80 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Shield className="h-4 w-4" />
                <span>DICGC Insured up to Rs. 5 Lakh</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-backwards">
                Your Trusted <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Cooperative Bank
                </span>
                <br />
                Since 1954
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-backwards">
                महानगर नागरिक सहकारी बैंक लिमिटेड, भोपाल - Building financial futures for generations with trust, transparency, and community values.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-2xl shadow-[0_8px_30px_rgb(160,0,21,0.3)] hover:shadow-[0_8px_30px_rgb(160,0,21,0.5)] transition-all duration-300 hover:-translate-y-1">
                Open Account Online
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/20 bg-white/50 backdrop-blur-sm text-foreground hover:bg-white/80 hover:border-primary/40 text-lg px-8 py-7 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                Explore Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border/50 animate-in fade-in duration-700 delay-700 fill-mode-backwards">
              <div className="text-center sm:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 origin-left">70+</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Years of Trust</div>
              </div>
              <div className="text-center sm:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 origin-left">50K+</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Happy Members</div>
              </div>
              <div className="text-center sm:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 origin-left">3</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Branches</div>
              </div>
              <div className="text-center sm:text-left group">
                <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 origin-left">7.5%</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">FD Interest</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-backwards">
            <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-10 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-[2.5rem] pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5 p-4 -m-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-inner">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground">Fixed Deposit</h3>
                    <p className="text-muted-foreground font-medium">Secure your future</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#28A745] tracking-tight">7.5%</div>
                    <div className="text-sm font-medium text-muted-foreground">p.a.</div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-center gap-5 p-4 -m-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors shadow-inner">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground">Gold Loan</h3>
                    <p className="text-muted-foreground font-medium">Instant approval</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#28A745] tracking-tight">9.5%</div>
                    <div className="text-sm font-medium text-muted-foreground">p.a.</div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-center gap-5 p-4 -m-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default">
                  <div className="w-16 h-16 bg-[#28A745]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#28A745]/20 transition-colors shadow-inner">
                    <Users className="h-8 w-8 text-[#28A745]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground">Home Loan</h3>
                    <p className="text-muted-foreground font-medium">Build your dream</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#28A745] tracking-tight">8.5%</div>
                    <div className="text-sm font-medium text-muted-foreground">p.a.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Trust Bar - Floating */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] hidden md:block">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2.5 hover:text-foreground transition-colors cursor-default">
              <Shield className="h-5 w-5 text-accent" />
              <span>DICGC Insured</span>
            </div>
            <div className="flex items-center gap-2.5 hover:text-foreground transition-colors cursor-default">
              <Building className="h-5 w-5 text-primary" />
              <span>RBI Regulated</span>
            </div>
            <div className="flex items-center gap-2.5 hover:text-foreground transition-colors cursor-default">
              <Award className="h-5 w-5 text-[#28A745]" />
              <span>70+ Years of Trust</span>
            </div>
            <div className="flex items-center gap-2.5 hover:text-foreground transition-colors cursor-default">
              <Users className="h-5 w-5 text-primary" />
              <span>50,000+ Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
