import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Branch Manager",
      location: "TT Nagar Branch, Bhopal",
      type: "Full-Time",
      deadline: "30 April 2026",
      reqs: "Minimum 5 years experience in banking operations."
    },
    {
      title: "Credit Analyst",
      location: "Head Office, Bairagarh",
      type: "Full-Time",
      deadline: "15 May 2026",
      reqs: "CA / MBA Finance with 2+ years experience in loan appraisal."
    }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-white/80 text-lg">
              Build a rewarding career at Mahanagar Nagrik Sahakari Bank. We're looking for passionate individuals to help us serve our communities better.
            </p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl font-bold text-bank-charcoal mb-8 text-center">Current Openings</h2>
          
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-[#E5E0D8] shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex-1 mb-6 md:mb-0">
                  <h3 className="font-bold text-2xl text-bank-charcoal mb-3 group-hover:text-bank-red transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-bank-muted mb-4">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-bank-red" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-bank-gold-dark" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Apply by: {job.deadline}</span>
                  </div>
                  <p className="text-bank-charcoal/80 text-sm">{job.reqs}</p>
                </div>
                <div className="md:ml-8 shrink-0">
                  <button className="bg-bank-red hover:bg-bank-red-dark text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#FDF3F3] border border-bank-red/20 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-xl text-bank-charcoal mb-2">Don't see a fit?</h3>
            <p className="text-bank-muted mb-6">Send your resume to <a href="mailto:hr@mnsbankbhopal.com" className="text-bank-red font-bold hover:underline">hr@mnsbankbhopal.com</a> and we'll keep you in mind for future roles.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
