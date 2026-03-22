import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function BranchLocatorPage() {
  const branches = [
    {
      id: "ho",
      name: "Head Office (Bairagarh)",
      address: "MNS Bank Bhavan, Main Road, Bairagarh, Bhopal - 462030",
      phone: "0755-4098000",
      email: "ho@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4!2d77.3!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
    },
    {
      id: "tt",
      name: "T.T. Nagar Branch",
      address: "First Floor, Plot No. 12, New Market, T.T. Nagar, Bhopal - 462003",
      phone: "0755-2553011",
      email: "ttnagar@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzM2LjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
    },
    {
      id: "karond",
      name: "Karond Branch",
      address: "Shop No. 5-8, Krishi Mandi Complex, Karond, Bhopal - 462038",
      phone: "0755-2741122",
      email: "karond@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.2!2d77.4!3d23.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE4JzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
    }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Branch & ATM Locator</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Find your nearest Mahanagar Bank branch or ATM across Bhopal for personalized in-person service.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          
          <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-300px)] min-h-[600px] mb-12">
            
            {/* Sidebar List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
              <div className="bg-white p-4 rounded-xl border border-[#E5E0D8] shadow-sm sticky top-0 z-10 mb-2">
                <input 
                  type="text" 
                  placeholder="Search by area, pin code..." 
                  className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-lg h-10 px-4 text-sm focus:outline-none focus:border-bank-gold-mid transition-all"
                />
              </div>
              
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-2xl p-6 border border-[#E5E0D8] shadow-sm hover:border-bank-gold-mid/50 hover:shadow-md transition-all cursor-pointer group flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold text-bank-charcoal group-hover:text-bank-red transition-colors">{branch.name}</h3>
                    <div className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Open</div>
                  </div>
                  
                  <div className="space-y-3 flex-1 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-bank-gold-dark shrink-0 mt-0.5" />
                      <span className="text-sm text-bank-muted font-medium leading-tight">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-bank-gold-dark shrink-0" />
                      <span className="text-sm text-bank-charcoal font-bold">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-bank-gold-dark shrink-0" />
                      <span className="text-sm text-bank-muted">{branch.hours} <span className="text-xs ml-1">(2nd & 4th Sat Off)</span></span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-bank-cream hover:bg-bank-red hover:text-white text-bank-charcoal py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors border border-transparent group-hover:border-bank-red/20">
                    <Navigation className="w-4 h-4" /> Get Directions
                  </button>
                </div>
              ))}
            </div>
            
            {/* Map Frame */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl border border-[#E5E0D8] shadow-sm overflow-hidden relative">
               {/* Note: In a real app we'd use a single map instance with markers. For structural demonstration, we'll embed the first branch or a general Bhopal view */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117304.75549007621!2d77.33083696956667!3d23.250550508678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale-[0.2] contrast-[1.1] hue-rotate-[-10deg]"
               ></iframe>
               
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-white/20 p-4 rounded-xl shadow-lg max-w-sm">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-3 h-3 bg-bank-red rounded-full animate-pulseRing"></div>
                   <span className="font-bold text-bank-charcoal text-sm">Head Office Selected</span>
                 </div>
                 <p className="text-xs text-bank-muted leading-relaxed">
                   MNS Bank Bhavan, Main Road, Bairagarh. Click on any branch card to focus the map.
                 </p>
               </div>
            </div>
          </div>
          
        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
