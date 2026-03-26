"use client"
import { Smartphone, Monitor, Lock, Send, ArrowRight, Wallet, History, CreditCard, ChevronRight, Download } from "lucide-react"

export function DigitalServicesSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 block mb-4">DIGITAL BANKING</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Bank from Anywhere,<br/>
              <span className="italic text-[#C0001B]">Anytime</span>
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">
              Experience seamless, secure, and lightning-fast digital banking tailored for the modern world.
            </p>
            
            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Smartphone, title: "Mobile Banking", desc: "Secure app available on App Store and Google Play" },
                { icon: Monitor, title: "Net Banking", desc: "Access securely from any desktop or tablet device" },
                { icon: Send, title: "UPI Payments", desc: "Instant, real-time money transfers 24×7" },
                { icon: Lock, title: "Secure Transfers", desc: "Bank-grade 256-bit AES encryption standard" },
              ].map((feature, idx) => (
                <div key={idx} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
                  <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors">
                    <feature.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* App Download Badges */}
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2.5 bg-[#C0001B] text-white rounded-xl px-5 py-3 hover:bg-[#8B0015] transition-colors shadow-md group">
                <Download className="w-5 h-5 text-white/80" />
                <div>
                  <div className="text-[9px] text-white/60 uppercase tracking-wider font-bold">Download on</div>
                  <div className="font-bold text-[14px] -mt-0.5">Google Play</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2.5 bg-white border-2 border-[#C0001B] text-[#C0001B] rounded-xl px-5 py-3 hover:bg-[#FFF5F6] transition-colors group">
                <Download className="w-5 h-5" />
                <div>
                  <div className="text-[9px] uppercase tracking-wider font-bold text-[#C0001B]/60">Download on</div>
                  <div className="font-bold text-[14px] -mt-0.5">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden sm:flex justify-center items-center h-full">
            {/* Phone mockup — MNS red/white theme */}
            <div className="w-[260px] h-[520px] bg-white rounded-[36px] border-2 border-gray-200 shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col pt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-20" />
              
              {/* App UI */}
              <div className="flex-1 px-5 flex flex-col w-full h-full overflow-hidden">
                <div className="flex justify-between items-center py-4">
                  <div className="font-bold text-[#C0001B] text-xl">MNS</div>
                  <div className="w-8 h-8 rounded-full bg-[#C0001B] flex items-center justify-center text-[10px] font-bold text-white">R</div>
                </div>
                
                <div className="mt-4 mb-6">
                  <h3 className="text-gray-500 text-sm mb-1">Good Morning, Ramesh 🙏</h3>
                  <p className="font-mono text-[28px] font-bold text-gray-900 tracking-tight">₹2,34,590</p>
                  <p className="text-[10px] text-emerald-500 font-bold mt-1.5 uppercase tracking-widest flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                    +₹15,400 this month
                  </p>
                </div>
                
                {/* Quick Actions */}
                <div className="flex justify-between gap-3 mb-6">
                  {[
                    { icon: Send, label: "Pay" },
                    { icon: Wallet, label: "Transfer" },
                    { icon: Lock, label: "FD" },
                  ].map((action, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center text-[#C0001B]">
                        <action.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">{action.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Transaction List */}
                <div className="flex-1 bg-gray-50 mx-[-20px] px-5 rounded-t-[20px] pt-4 border border-gray-100 border-b-0 space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    <span>Recent</span>
                    <span className="text-[#C0001B] flex items-center">All <ChevronRight className="w-3 h-3 ml-0.5" /></span>
                  </div>
                  
                  {[
                    { icon: CreditCard, label: "Amazon EMI", time: "Today, 10:30 AM", amount: "-₹12,400", amountColor: "text-gray-700" },
                    { icon: ArrowRight, label: "Salary Credit", time: "Yesterday", amount: "+₹85,000", amountColor: "text-emerald-500" },
                    { icon: History, label: "Electricity Bill", time: "15 Mar, 04:12 PM", amount: "-₹3,240", amountColor: "text-gray-700" },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#C0001B]/8 flex items-center justify-center text-[#C0001B]">
                          <tx.icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-gray-800">{tx.label}</div>
                          <div className="text-[10px] text-gray-400">{tx.time}</div>
                        </div>
                      </div>
                      <div className={`font-mono font-bold text-[12px] ${tx.amountColor}`}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full z-20" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C0001B]/8 rounded-full blur-[60px] z-0" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
