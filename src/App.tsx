import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Swords from './pages/Swords'
import OurStory from './pages/OurStory'
import Inquiry from './pages/Inquiry'
import FAQ from './pages/FAQ'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swords" element={<Swords />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Inquiry />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}
