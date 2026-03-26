import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { Globe } from "lucide-react"

export default function ForexPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans flex flex-col">
        <Header />
        
        <main className="flex-1 bg-gray-50 flex items-center justify-center p-6">
          <div className="bg-white p-12 rounded-2xl shadow-sm text-center max-w-lg border border-gray-100">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Forex Services</h1>
            <p className="text-gray-500 mb-8">
              Premium foreign exchange services for your travel and global banking needs. This page is currently under development.
            </p>
            <a href="/" className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors">
              Return to Home
            </a>
          </div>
        </main>
        
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
