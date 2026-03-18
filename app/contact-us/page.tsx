import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactUsPage() {
  const branches = [
    {
      name: "Head Office (Bairagarh)",
      address: "MNS Bank Bhavan, Main Road, Bairagarh, Bhopal - 462030",
      phone: "0755-4098000, 4098001",
      email: "ho@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM (2nd & 4th Saturday Off)"
    },
    {
      name: "T.T. Nagar Branch",
      address: "First Floor, Plot No. 12, New Market, T.T. Nagar, Bhopal - 462003",
      phone: "0755-2553011",
      email: "ttnagar@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM (2nd & 4th Saturday Off)"
    },
    {
      name: "Karond Branch",
      address: "Shop No. 5-8, Krishi Mandi Complex, Karond, Bhopal - 462038",
      phone: "0755-2741122",
      email: "karond@mnsbankbhopal.com",
      hours: "10:00 AM - 05:00 PM (2nd & 4th Saturday Off)"
    }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We're here to help. Reach out to us via phone, email, or visit one of our branches in Bhopal.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#E5E0D8] shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bank-gold-light via-bank-gold-dark to-bank-red"></div>
              
              <h2 className="font-serif text-3xl font-bold text-bank-charcoal mb-2">Send us a message</h2>
              <p className="text-bank-muted mb-8">Fill out the form below and our support team will get back to you within 24 working hours.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bank-charcoal">Full Name</label>
                    <input type="text" className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-12 px-4 focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bank-charcoal">Phone Number</label>
                    <input type="tel" className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-12 px-4 focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bank-charcoal">Email Address</label>
                  <input type="email" className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-12 px-4 focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bank-charcoal">Branch (Optional)</label>
                  <select className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl h-12 px-4 focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all text-bank-charcoal">
                    <option value="">Select a branch</option>
                    <option value="ho">Head Office (Bairagarh)</option>
                    <option value="tt">T.T. Nagar</option>
                    <option value="karond">Karond</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bank-charcoal">Message</label>
                  <textarea className="w-full bg-bank-cream/50 border border-[#E5E0D8] rounded-xl p-4 focus:outline-none focus:border-bank-gold-mid focus:ring-1 focus:ring-bank-gold-mid transition-all min-h-[120px]" placeholder="How can we help you today?"></textarea>
                </div>
                
                <button type="button" className="w-full bg-bank-red hover:bg-bank-red-dark text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>

            {/* Branch Locations */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-bank-charcoal mb-8">Our Branches</h2>
              <div className="space-y-6">
                {branches.map((branch, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm hover:border-bank-gold-mid/50 transition-colors group">
                    <h3 className="font-serif text-xl font-bold text-bank-charcoal mb-4 group-hover:text-bank-red transition-colors">{branch.name}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-bank-gold-dark shrink-0 mt-0.5" />
                        <span className="text-sm text-bank-muted font-medium">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-bank-gold-dark shrink-0" />
                        <span className="text-sm text-bank-muted font-medium">{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-bank-gold-dark shrink-0" />
                        <span className="text-sm text-bank-muted font-medium">{branch.email}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-bank-gold-dark shrink-0 mt-0.5" />
                        <span className="text-sm text-bank-muted font-medium">{branch.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-bank-charcoal rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-noise mix-blend-overlay opacity-30"></div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-white">Need immediate help?</h3>
                <p className="text-white/80 mb-6 max-w-sm">For lost cards, suspected fraud, or urgent assistance, call our 24x7 toll-free numbers.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3 backdrop-blur-sm">
                    <Phone className="w-5 h-5 text-bank-gold-light" />
                    <div>
                      <div className="text-xs text-white/60 mb-0.5">National Toll-Free</div>
                      <div className="font-bold tracking-wider">1800 120 1234</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
