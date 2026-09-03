import Navbar from '../components/Navbar'
import LiquidGlassHero from '../components/LiquidGlassHero'
import ForgeTransition from '../components/ForgeTransition'
import Story from '../components/Story'
import Footer from '../components/Footer'

export default function OurStory() {
  return (
    <div>
      <Navbar />
      <LiquidGlassHero />
      <div id="our-story-content">
        <ForgeTransition />
        <Story />
      </div>
      <Footer />
    </div>
  )
}
