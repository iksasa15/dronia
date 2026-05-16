import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { ClientBookingSection } from '../../components/sections/ClientBookingSection'
import { FaqSection } from '../../components/sections/FaqSection'
import { FleetShowcaseSection } from '../../components/sections/FleetShowcaseSection'
import { GallerySection } from '../../components/sections/GallerySection'
import { HeroSection } from '../../components/sections/HeroSection'
import { PartnersSection } from '../../components/sections/PartnersSection'
import { PilotsFleetSection } from '../../components/sections/PilotsFleetSection'
import { RegistrationHubSection } from '../../components/sections/RegistrationHubSection'
import { ServicesSection } from '../../components/sections/ServicesSection'
import { MobileFloatingCta } from '../../components/ui/MobileFloatingCta'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './HomePage.css'

export function HomePage() {
  useScrollReveal()

  return (
    <div className="home-page">
      <SiteHeader />
      <main className="home-main">
        <HeroSection />
        <ServicesSection />
        <PilotsFleetSection />
        <ClientBookingSection />
        <FleetShowcaseSection />
        <GallerySection />
        <PartnersSection />
        <RegistrationHubSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <MobileFloatingCta />
    </div>
  )
}
