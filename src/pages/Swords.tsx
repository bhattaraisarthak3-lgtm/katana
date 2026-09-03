import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import SwordRevealMoment from '../components/SwordRevealMoment'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function Swords() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Collection />
      <SwordRevealMoment />
      <Footer />
    </div>
  )
}
