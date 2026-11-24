import { Link } from 'react-router-dom'
import { EXPERTISES, expertisePath, INCIDENT_PATH } from '../../data/expertises'
import { SECTEURS, secteurPath } from '../../data/secteurs'
import { CONTACT } from '../../data/site'

const col = 'flex flex-col gap-2.5'
const title = 'font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-white'
const link = 'text-mist no-underline hover:text-gold'

export default function Footer() {
  const topExpertises = ['gouvernance-conformite', 'audit-pentest', 'protection-donnees-chiffrement', 'identite-mfa-pki', 'soc-mdr-detection']
    .map((s) => EXPERTISES.find((e) => e.slug === s))

  return (
    <footer className="bg-[#050B1E] text-sm text-mist">
      <div className="wrap flex flex-col gap-12 pb-8 pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link to="/" aria-label="KOAST Consulting — accueil">
              <img src="/logo-koast.svg" alt="KOAST Consulting" className="h-14 w-auto" width="145" height="56" />
            </Link>
            <p className="m-0 max-w-[340px] leading-relaxed">
              Un partenaire de confiance pour protéger les organisations, leurs données et leurs activités numériques.
            </p>
            <p className="m-0 leading-relaxed">{CONTACT.address} · {CONTACT.phone}</p>
          </div>
          <div className={col}>
            <span className={title}>Expertises</span>
            {topExpertises.map((e) => (
              <Link key={e.slug} to={expertisePath(e)} className={link}>{e.menu}</Link>
            ))}
            <Link to="/expertises" className="font-semibold text-gold no-underline">Toutes les expertises →</Link>
          </div>
          <div className={col}>
            <span className={title}>Secteurs</span>
            {SECTEURS.map((s) => (
              <Link key={s.slug} to={secteurPath(s)} className={link}>{s.short}</Link>
            ))}
          </div>
          <div className={col}>
            <span className={title}>KOAST</span>
            <Link to="/a-propos" className={link}>À propos</Link>
            <Link to="/references" className={link}>Références</Link>
            <Link to="/ressources" className={link}>Cyber Insights</Link>
            <Link to="/contact" className={link}>Contact</Link>
            <Link to={INCIDENT_PATH} className="font-semibold text-gold no-underline">Urgence cyber →</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-navy-line pt-6 text-[13px]">
          <span>© {new Date().getFullYear()} KOAST Consulting · {CONTACT.city}</span>
          <span className="flex gap-5">
            <Link to="/mentions-legales" className={link}>Mentions légales</Link>
            <Link to="/confidentialite" className={link}>Politique de confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
