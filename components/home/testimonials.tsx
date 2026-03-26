"use client"
import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    text: "महानगर बैंक में मेरा खाता 20 साल से है। Staff बहुत helpful है और interest rates भी दूसरे बैंकों से अच्छे हैं।",
    name: "Ramesh Sharma",
    since: "Member since 2004",
    initial: "R",
  },
  {
    text: "The new mobile banking app is fantastic. I can transfer funds and check my balance instantly without visiting the branch.",
    name: "Anjali Desai",
    since: "Member since 2021",
    initial: "A",
  },
  {
    text: "Senior citizen hone ke naate mujhe extra 0.50% FD interest milta hai. Service hamesha top-class rahi है।",
    name: "Krishna Murthy",
    since: "Member since 1995",
    initial: "K",
  },
  {
    text: "Home loan 5 days mein sanction hua. Process bahut smooth tha aur hidden charges bilkul nahi the.",
    name: "Priya Patel",
    since: "Member since 2018",
    initial: "P",
  },
  {
    text: "Mera business current account Mahanagar Bank me hai. Inki RTGS/NEFT service bahut fast hai.",
    name: "Sanjay Gupta",
    since: "Member since 2010",
    initial: "S",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [hovered])

  const prev = () => setActive(p => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(p => (p + 1) % testimonials.length)

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted by Generations</h2>
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-2">
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                    {/* Red left accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C0001B] rounded-l-2xl" />
                    {/* Decorative quote */}
                    <Quote className="absolute top-6 right-7 w-10 h-10 text-[#C0001B]/6 rotate-180" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-5 pl-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="italic text-lg text-gray-700 leading-relaxed mb-8 pl-4 min-h-[80px]">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pl-4">
                      <div className="w-12 h-12 rounded-full bg-[#C0001B] flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {t.initial}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{t.name}</div>
                        <div className="text-xs font-semibold text-[#C0001B]">{t.since}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#C0001B] hover:text-white hover:border-[#C0001B] transition-all shadow-sm z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#C0001B] hover:text-white hover:border-[#C0001B] transition-all shadow-sm z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-500 ${active === i ? "w-7 bg-[#C0001B]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
