import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { Hero } from '@/components/sections/Hero'
import { BenefitsGrid } from '@/components/sections/BenefitsGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeatureHighlights } from '@/components/sections/FeatureHighlights'
import { SafetyMessaging } from '@/components/sections/SafetyMessaging'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsGrid />
        <HowItWorks />
        <FeatureHighlights />
        <SafetyMessaging />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}
