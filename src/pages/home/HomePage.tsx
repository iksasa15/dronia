import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { GallerySection } from '../../components/sections/GallerySection'
import { HallsPortalSection } from '../../components/sections/HallsPortalSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { MissionVisionSection } from '../../components/sections/MissionVisionSection'
import { PartnersStrip } from '../../components/sections/PartnersStrip'
import { PilotsFleetSection } from '../../components/sections/PilotsFleetSection'
import { ServicesSection } from '../../components/sections/ServicesSection'
import { WhoWeAreSection } from '../../components/sections/WhoWeAreSection'
import './HomePage.css'

export function HomePage() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main className="home-main">
        <HeroSection />
        <ServicesSection />
        <WhoWeAreSection />
        <MissionVisionSection />
        <GallerySection />
        <HallsPortalSection />
        <PilotsFleetSection />
        <PartnersStrip />
      </main>
      <SiteFooter />
    </div>
  )
}
