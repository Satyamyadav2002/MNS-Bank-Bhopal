import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Lock, User, ShieldCheck, Mail, Phone } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center relative py-20 z-10 w-full overflow-hidden">
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#C0001B]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="w-full max-w-2xl px-4 relative z-10 mx-auto">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.06)] border border-[#e5e7eb] mx-auto overflow-hidden">
            
            <div className="text-center mb-10 pb-10 border-b border-[#e5e7eb] relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C0001B] to-[#A87820] rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-[#C0001B]/30 mb-6 relative">
                 <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Your Savings Account</h1>
              <p className="text-gray-500 font-medium text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                Join Mahanagar Bank and experience ultra-premium banking with zero hidden fees and exclusive benefits.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">First Name</label>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-white/50 border border-[#e5e7eb] rounded-xl h-14 pl-12 pr-4 font-bold text-gray-900 focus:outline-none focus:border-[#C0001B] focus:ring-1 focus:ring-[#C0001B] transition-all"
                      placeholder="e.g. Ramesh"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Last Name</label>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-white/50 border border-[#e5e7eb] rounded-xl h-14 pl-12 pr-4 font-bold text-gray-900 focus:outline-none focus:border-[#C0001B] focus:ring-1 focus:ring-[#C0001B] transition-all"
                      placeholder="e.g. Sharma"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    className="w-full bg-white/50 border border-[#e5e7eb] rounded-xl h-14 pl-12 pr-4 font-bold text-gray-900 focus:outline-none focus:border-[#C0001B] focus:ring-1 focus:ring-[#C0001B] transition-all"
                    placeholder="ramesh.sharma@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Mobile Number</label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="absolute left-10 top-0 bottom-0 flex items-center justify-center text-gray-900 font-bold text-[15px]">
                    +91
                  </div>
                  <input 
                    type="tel" 
                    className="w-full bg-white/50 border border-[#e5e7eb] rounded-xl h-14 pl-20 pr-4 font-bold text-gray-900 focus:outline-none focus:border-[#C0001B] focus:ring-1 focus:ring-[#C0001B] transition-all tracking-wider"
                    placeholder="8900 000 000"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button type="button" className="w-full bg-gray-900 hover:bg-black text-[#C0001B] rounded-xl h-16 font-bold shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 text-lg group">
                  Start Video KYC
                </button>
              </div>
              
              <div className="text-center">
                 <p className="text-gray-500 text-xs leading-relaxed max-w-md mx-auto">
                    By proceeding, you agree to Mahanagar Bank's tracking policies, privacy statement, and terms of service. Registration subject to Aadhaar/PAN validation.
                 </p>
              </div>
            </form>
            
          </div>
        </div>
      </main>
      
      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
