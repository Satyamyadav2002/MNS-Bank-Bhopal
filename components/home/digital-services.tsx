"use client"
import { Smartphone, Monitor, Lock, Send, ArrowRight, Wallet, History, CreditCard, ChevronRight, Download } from "lucide-react"

export function DigitalServicesSection() {
  return (
    <section className="py-28 section-dark-premium relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="eyebrow-label mb-4 border-[#C9922A] text-[#C9922A]">DIGITAL BANKING</span>
            <h2 className="font-serif text-4xl lg:text-[48px] font-bold text-white mb-6 leading-tight mt-2">
              Bank from Anywhere,<br/>
              <span className="gold-shimmer">Anytime</span>
            </h2>
            <p className="text-lg text-white/40 mb-12 max-w-xl font-medium leading-relaxed">
              Experience seamless, secure, and lightning-fast digital banking tailored for the modern world.
            </p>
            
            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile Banking",
                  desc: "Secure app available on App Store and Google Play",
                  gradient: "from-[#C0001B] to-[#8B0015]"
                },
                {
                  icon: Monitor,
                  title: "Net Banking",
                  desc: "Access securely from any desktop or tablet device",
                  gradient: "from-[#C9922A] to-[#A87820]"
                },
                {
                  icon: Send,
                  title: "UPI Payments",
                  desc: "Instant, real-time money transfers 24×7",
                  gradient: "from-emerald-500 to-emerald-700"
                },
                {
                  icon: Lock,
                  title: "Secure Transfers",
                  desc: "Bank-grade 256-bit AES encryption standard",
                  gradient: "from-blue-500 to-indigo-600"
                }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white/[0.04] border border-white/[0.08] rounded-[20px] p-7 premium-card-dark hover:bg-white/[0.08] hover:border-[#C9922A]/30"
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-[0_4px_16px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-400`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-white mb-2">{feature.title}</h4>
                  <p className="text-white/40 text-[14px] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* App Download Badges */}
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-all duration-300 group">
                <Download className="w-5 h-5 text-white/60 group-hover:text-[#C9922A] transition-colors" />
                <div>
                  <div className="text-[9px] text-white/40 uppercase tracking-wider font-bold">Download on</div>
                  <div className="text-white font-bold text-[14px] -mt-0.5">Google Play</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-all duration-300 group">
                <Download className="w-5 h-5 text-white/60 group-hover:text-[#C9922A] transition-colors" />
                <div>
                  <div className="text-[9px] text-white/40 uppercase tracking-wider font-bold">Download on</div>
                  <div className="text-white font-bold text-[14px] -mt-0.5">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden sm:flex justify-center items-center h-full">
            {/* CSS-only phone mockup */}
            <div className="w-[280px] h-[560px] bg-gradient-to-b from-[#1E2030] to-[#141520] rounded-[36px] border border-[#C9922A]/30 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,146,42,0.1)] relative overflow-hidden flex flex-col pt-12 animate-float pointer-events-none z-10">
              
              {/* Phone Hardware */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/80 rounded-b-xl z-20" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -rotate-45 scale-150 z-30 pointer-events-none" />
              
              {/* App UI */}
              <div className="flex-1 px-5 flex flex-col bg-transparent relative z-10 w-full h-full overflow-hidden">
                <div className="flex justify-between items-center py-4">
                  <div className="font-serif font-bold text-[#C9922A] text-xl">M</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C9922A] to-[#F0C96A] p-[1.5px]">
                    <div className="w-full h-full bg-[#1E2030] rounded-full flex items-center justify-center text-[10px] font-bold text-white">R</div>
                  </div>
                </div>
                
                <div className="mt-4 mb-6">
                  <h3 className="text-white/70 font-medium text-sm mb-1">Good Morning, Ramesh 🙏</h3>
                  <p className="font-mono text-[30px] font-bold text-white tracking-tight">₹2,34,590</p>
                  <p className="text-[10px] text-emerald-400 font-bold mt-1.5 uppercase tracking-widest flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                    +₹15,400 this month
                  </p>
                </div>
                
                {/* Quick Actions */}
                <div className="flex justify-between gap-3 mb-8">
                  {[
                    { icon: Send, label: "Pay" },
                    { icon: Wallet, label: "Transfer" },
                    { icon: Lock, label: "FD" },
                  ].map((action, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-[14px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F0C96A]">
                        <action.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white/60">{action.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Transaction List */}
                <div className="flex-1 bg-white/[0.03] mx-[-20px] px-5 rounded-t-[24px] pt-5 border border-white/[0.05] border-b-0 space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 mb-2">
                    <span>Recent</span>
                    <span className="text-[#C9922A] flex items-center">All <ChevronRight className="w-3 h-3 ml-0.5" /></span>
                  </div>
                  
                  {[
                    { icon: CreditCard, label: "Amazon EMI", time: "Today, 10:30 AM", amount: "-₹12,400", color: "bg-[#C0001B]/15 text-[#C0001B]", amountColor: "text-white" },
                    { icon: ArrowRight, label: "Salary Credit", time: "Yesterday", amount: "+₹85,000", color: "bg-emerald-500/15 text-emerald-400", amountColor: "text-emerald-400" },
                    { icon: History, label: "Electricity Bill", time: "15 Mar, 04:12 PM", amount: "-₹3,240", color: "bg-blue-500/15 text-blue-400", amountColor: "text-white" },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${tx.color} flex items-center justify-center`}>
                          <tx.icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-[13px] text-white">{tx.label}</div>
                          <div className="text-[10px] text-white/35">{tx.time}</div>
                        </div>
                      </div>
                      <div className={`font-mono font-bold text-[13px] ${tx.amountColor}`}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/15 rounded-full z-20" />
            </div>
            
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C0001B]/15 rounded-full blur-[60px] z-0" />
            <div className="absolute top-[30%] left-[60%] w-32 h-32 bg-[#C9922A]/10 rounded-full blur-[40px] z-0" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
