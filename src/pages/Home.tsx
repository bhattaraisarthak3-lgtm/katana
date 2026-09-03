import Navbar from '../components/Navbar'
import CyberRoninHero from '../components/CyberRoninHero'
import TrustStrip from '../components/TrustStrip'
import FeaturedSwords from '../components/FeaturedSwords'
import HowWeForge from '../components/HowWeForge'
import MaterialMacro from '../components/MaterialMacro'
import Testimonials from '../components/Testimonials'
import ArchivalQuote from '../components/ArchivalQuote'
import CommissionTeaser from '../components/CommissionTeaser'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <CyberRoninHero />
      <TrustStrip />
      <FeaturedSwords />
      <HowWeForge />
      <MaterialMacro />
      <Testimonials />
      <ArchivalQuote />
      <CommissionTeaser />
      <Footer />
    </div>
  )
}
