import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Remonte en haut à chaque changement de page, ou défile jusqu'à l'ancre (#projet, #piliers…).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollManager />
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
