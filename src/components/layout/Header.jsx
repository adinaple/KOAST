import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { PILIERS, expertisesOf, expertisePath, pilierPath, INCIDENT_PATH } from '../../data/expertises'
import { Icon } from '../ui/Icon'
import { PillarSquare } from '../ui/PillarIcon'

const NAV = [
  { label: 'Accueil', to: '/', end: true },
  { label: 'Expertises', to: '/expertises', mega: true },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Références', to: '/references' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Ressources', to: '/ressources' },
  { label: 'Contact', to: '/contact' },
]

function UrgenceBar() {
  return (
    <div className="bg-[#050B1E] text-sm text-white">
      <div className="wrap flex justify-center py-2">
        <Link to={INCIDENT_PATH} className="inline-flex items-center gap-3 font-medium text-white no-underline hover:text-gold">
          <span className="inline-flex size-7 items-center justify-center rounded-[4px] bg-gold text-navy">
            <Icon name="Phone" size={15} strokeWidth={2.2} />
          </span>
          Urgence cyber | Réponse à incidents
        </Link>
      </div>
    </div>
  )
}

function MegaMenu({ onNavigate }) {
  return (
    <div className="border-b border-line bg-white shadow-[0_16px_32px_rgba(8,17,44,0.08)]">
      <div className="wrap flex flex-col gap-6 py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PILIERS.map((p) => (
            <div key={p.slug} className="flex flex-col gap-3 rounded-lg bg-cloud p-5">
              <Link to={pilierPath(p)} onClick={onNavigate} className="flex items-center gap-3 no-underline">
                <PillarSquare slug={p.slug} size={40} />
                <span className="text-sm font-bold tracking-[0.03em] text-navy">{p.exact}</span>
              </Link>
              {expertisesOf(p.slug).map((e) => (
                <Link key={e.slug} to={expertisePath(e)} onClick={onNavigate} className="text-[15px] font-medium text-ink no-underline hover:text-gold-dark">
                  {e.menu}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link to="/expertises" onClick={onNavigate} className="self-start py-2 text-[15px] font-bold text-navy no-underline hover:text-gold-dark">
          Voir toutes nos expertises →
        </Link>
      </div>
    </div>
  )
}

export default function Header() {
  const [mega, setMega] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()
  const ref = useRef(null)

  // Fermer les menus à chaque changement de page
  useEffect(() => { setMega(false); setMobile(false) }, [pathname])

  // Fermer avec Échap ou en cliquant ailleurs
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setMega(false); setMobile(false) } }
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setMega(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick) }
  }, [])

  const close = () => { setMega(false); setMobile(false) }
  const linkCls = ({ isActive }) =>
    `border-b-2 py-3 font-medium no-underline transition-colors ${isActive ? 'border-gold text-navy' : 'border-transparent text-ink hover:text-gold-dark'}`

  return (
    <>
      <UrgenceBar />
      <header ref={ref} className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="wrap flex items-center justify-between gap-6 py-3">
          <Link to="/" aria-label="KOAST Consulting — accueil" className="shrink-0">
            <img src="/logo-koast-dark.svg" alt="KOAST Consulting" className="h-12 w-auto" width="124" height="48" />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-[15px] lg:flex">
            {NAV.map((item) =>
              item.mega ? (
                <button
                  key={item.label}
                  type="button"
                  aria-expanded={mega}
                  aria-controls="mega-menu"
                  onClick={() => setMega((v) => !v)}
                  className={`inline-flex cursor-pointer items-center gap-1 border-0 border-b-2 bg-transparent py-3 font-medium ${pathname.startsWith('/expertises') ? 'border-gold text-navy' : 'border-transparent text-ink hover:text-gold-dark'}`}
                >
                  {item.label}
                  <Icon name="ChevronDown" size={16} className={`transition-transform ${mega ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.end} className={linkCls}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden min-h-11 items-center rounded-[4px] bg-gold px-5 text-[15px] font-semibold text-navy no-underline transition-colors hover:bg-gold-light sm:inline-flex">
              Demander un diagnostic
            </Link>
            <button
              type="button"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-[4px] border border-line bg-white text-navy lg:hidden"
              aria-label={mobile ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
            >
              <Icon name={mobile ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              id="mega-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-full hidden lg:block"
            >
              <MegaMenu onNavigate={close} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobile && (
            <motion.nav
              aria-label="Menu mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <div className="wrap flex max-h-[calc(100vh-140px)] flex-col gap-1 overflow-y-auto py-4">
                {NAV.filter((n) => !n.mega).slice(0, 1).map((n) => (
                  <NavLink key={n.label} to={n.to} end className="py-3 text-lg font-semibold text-ink no-underline">{n.label}</NavLink>
                ))}
                <span className="pt-3 font-accent text-xs font-semibold uppercase tracking-[0.16em] text-muted">Expertises</span>
                {PILIERS.map((p) => (
                  <div key={p.slug} className="flex flex-col gap-1 border-b border-line py-3">
                    <Link to={pilierPath(p)} className="flex items-center gap-3 font-bold text-navy no-underline">
                      <PillarSquare slug={p.slug} size={32} />
                      {p.title}
                    </Link>
                    {expertisesOf(p.slug).map((e) => (
                      <Link key={e.slug} to={expertisePath(e)} className="py-1 pl-11 text-[15px] text-body no-underline">{e.menu}</Link>
                    ))}
                  </div>
                ))}
                {NAV.filter((n) => !n.mega).slice(1).map((n) => (
                  <NavLink key={n.label} to={n.to} className="py-3 text-lg font-semibold text-ink no-underline">{n.label}</NavLink>
                ))}
                <Link to="/contact" className="mt-3 inline-flex min-h-12 items-center justify-center rounded-[4px] bg-gold font-semibold text-navy no-underline">
                  Demander un diagnostic
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
