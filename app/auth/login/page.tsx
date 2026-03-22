import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Lock, User } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center relative py-20 z-10">
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-gradient-to-r from-bank-red/10 to-bank-gold-mid/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <div className="w-full max-w-md px-4 relative z-10">
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.06)] border border-[#E5E0D8]">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-[#C0001B]/20 mb-6">
                <span className="font-serif text-3xl font-bold text-white leading-none">M</span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-bank-charcoal mb-2">Welcome Back</h1>
              <p className="text-bank-muted font-medium text-sm">Secure Net Banking Portal</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-bank-charcoal uppercase tracking-wider mb-2">Customer ID</label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-bank-muted">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-14 pl-12 pr-4 font-bold text-bank-charcoal focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all"
                    placeholder="Enter Customer ID"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-bank-charcoal uppercase tracking-wider">Password</label>
                  <a href="#" className="font-bold text-bank-red text-xs hover:underline">Forgot?</a>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-bank-muted">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type="password" 
                    className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-14 pl-12 pr-4 font-bold text-bank-charcoal focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button type="button" className="w-full bg-bank-charcoal hover:bg-black text-white rounded-xl h-14 font-bold shadow-md transition-all">
                Secure Login
              </button>
            </form>
            
            <div className="mt-8 text-center text-sm font-medium text-bank-muted">
              Don't have an account? <a href="/auth/register" className="text-bank-gold-dark font-bold hover:underline">Register Here</a>
            </div>
            
          </div>
          
          <div className="mt-8 text-center text-xs text-bank-muted font-medium max-w-sm mx-auto">
            Your connection to Mahanagar Bank is fully encrypted with 256-bit AES protection.
          </div>
        </div>
      </main>
      
      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
