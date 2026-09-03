import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't reset scroll position on navigation — without this,
 * clicking a nav link opens the new page at whatever scrollY the previous
 * page was left at instead of the top.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 'instant' bypasses the site-wide CSS `scroll-behavior: smooth`, which
    // would otherwise animate the jump on every navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
