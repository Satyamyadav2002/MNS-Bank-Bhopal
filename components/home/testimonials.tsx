"use client"
import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      text: "महानगर बैंक में मेरा खाता 20 साल से है। Staff बहुत helpful है और interest rates भी दूसरे बैंकों से अच्छे हैं।",
      name: "Ramesh Sharma",
      since: "Member since 2004",
      initial: "R",
      bg: "from-[#C0001B] to-[#8B0015]"
    },
    {
      text: "The new mobile banking app is fantastic. I can transfer funds and check my balance instantly without visiting the branch.",
      name: "Anjali Desai",
      since: "Member since 2021",
      initial: "A",
      bg: "from-[#C9922A] to-[#A87820]"
    },
    {
      text: "Senior citizen hone ke naate mujhe extra 0.50% FD interest milta hai. Service hamesha top-class rahi है।",
      name: "Krishna Murthy",
      since: "Member since 1995",
      initial: "K",
      bg: "from-teal-500 to-teal-700"
    },
    {
      text: "Home loan 5 days mein sanction hua. Process bahut smooth tha aur hidden charges bilkul nahi the.",
      name: "Priya Patel",
      since: "Member since 2018",
      initial: "P",
      bg: "from-blue-500 to-indigo-600"
    },
    {
      text: "Mera business current account Mahanagar Bank me hai. Inki RTGS/NEFT service bahut fast hai.",
      name: "Sanjay Gupta",
      since: "Member since 2010",
      initial: "S",
      bg: "from-emerald-500 to-emerald-700"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isHovered, testimonials.length])

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-28 bg-gradient-to-b from-[#FDF3F3] to-[#FAF7F2] relative overflow-hidden z-10 w-full">
      {/* Decorative Quote */}
      <div className="absolute top-12 left-[10%] font-serif text-[140px] text-[#C9922A]/15 leading-none select-none pointer-events-none z-0">
        &ldquo;
      </div>
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
            <span className="eyebrow-label border-0 pl-0">CLIENT STORIES</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
          </div>
          <h2 className="font-serif text-4xl lg:text-[48px] font-bold text-[#2B2D42] text-center">
            Trusted by Generations
          </h2>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative group flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Viewport */}
          <div className="overflow-hidden w-full px-4 lg:px-12 py-8 relative z-10">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="w-full shrink-0 px-2 lg:px-4 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[0_20px_48px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col md:flex-row h-full w-full border border-[#E5E0D8]/80">
                    {/* Left Gradient Border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C0001B] via-[#C9922A] to-[#F0C96A]" />
                    
                    {/* Background Quote */}
                    <div className="absolute -top-4 right-8 font-serif text-[120px] text-[#C9922A]/8 leading-none pointer-events-none select-none">
                      &rdquo;
                    </div>

                    <div className="p-8 lg:p-12 pl-10 lg:pl-14 flex flex-col flex-1 w-full z-10 relative">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#C9922A] fill-[#C9922A]" />
                        ))}
                      </div>
                      
                      <p className="font-serif italic text-xl lg:text-[22px] leading-[1.7] text-[#2B2D42] mb-10 min-h-[120px] lg:min-h-[100px]">
                        &ldquo;{item.text}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center text-white font-serif font-bold text-2xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] shrink-0`}>
                          {item.initial}
                        </div>
                        <div>
                          <div className="font-sans font-semibold text-lg text-[#2B2D42] leading-tight">{item.name}</div>
                          <div className="font-sans text-[13px] text-[#C9922A] font-bold mt-0.5">{item.since}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Premium Controls */}
          <button 
            onClick={handlePrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[1.5px] border-[#C9922A]/30 text-[#C0001B] flex items-center justify-center bg-white hover:bg-[#C0001B] hover:text-white hover:border-[#C0001B] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.06)] -ml-2 lg:-ml-6 z-20 outline-none hover:shadow-[0_8px_24px_rgba(192,0,27,0.2)]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[1.5px] border-[#C9922A]/30 text-[#C0001B] flex items-center justify-center bg-white hover:bg-[#C0001B] hover:text-white hover:border-[#C0001B] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.06)] -mr-2 lg:-mr-6 z-20 outline-none hover:shadow-[0_8px_24px_rgba(192,0,27,0.2)]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Gold Gradient Dot Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 outline-none ${
                activeIndex === idx ? "w-8 bg-gradient-to-r from-[#C0001B] to-[#C9922A]" : "w-2.5 bg-[#C9922A]/20 hover:bg-[#C9922A]/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
