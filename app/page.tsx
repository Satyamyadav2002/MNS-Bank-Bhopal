import { UtilityBar } from "@/components/home/utility-bar"
import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { QuickApply } from "@/components/home/quick-apply"
import { TrustBar } from "@/components/home/trust-bar"
import { ProductsSection } from "@/components/home/products-section"
import { InterestRatesWidget } from "@/components/home/interest-rates"
import { DigitalServicesSection } from "@/components/home/digital-services"
import { MobileAppSection } from "@/components/home/mobile-app-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { NewsUpdates } from "@/components/home/news-updates"
import { BranchLocator } from "@/components/home/branch-locator"
import { Footer } from "@/components/home/footer"
import { MobileNav } from "@/components/home/mobile-nav"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function HomePage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <UtilityBar />
        <Header />
        <HeroSection />
        <QuickApply />
        <TrustBar />
        
        <main>
          <section id="products"><ProductsSection /></section>
          <section id="calculator"><InterestRatesWidget /></section>
          <section id="digital"><DigitalServicesSection /></section>
          <section id="mobileapp"><MobileAppSection /></section>
          <section id="whyus"><WhyChooseUs /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="news"><NewsUpdates /></section>
          <section id="branches"><BranchLocator /></section>
        </main>
        
        <Footer />
        <MobileNav />
      </div>
    </BankingSegmentProvider>
  )
}

