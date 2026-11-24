import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BESOINS, CONTACT, TAILLES } from '../data/site'
import { INCIDENT_PATH } from '../data/expertises'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'

const field = 'h-[46px] rounded-[4px] border border-[#C9CED9] bg-white px-3.5 text-[15px] text-ink outline-none transition-colors focus:border-gold'
const label = 'flex flex-col gap-1.5 text-sm font-semibold text-ink'

// Bloc « Vous avez un projet ? » + formulaire, présent en bas de chaque page (id="projet").
// Le formulaire est envoyé à /api/contact.php (script PHP fourni, exécuté par Hostinger).
export default function BlocProjet({
  titre = 'Vous avez un projet de cybersécurité ?',
  motscles = 'Gouvernance · Audit · Chiffrement · Identité · SOC · Cloud',
  besoin,
}) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('/api/contact.php', { method: 'POST', body: new FormData(form) })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="projet" className="scroll-mt-24 bg-cream text-ink">
      <div className="wrap grid gap-14 py-24 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="flex flex-col gap-6">
          <h2 className="m-0 text-[2.2rem] leading-[1.08] font-semibold tracking-[-0.02em] md:text-[3.1rem]">{titre}</h2>
          <p className="m-0 text-xl leading-snug font-semibold text-gold-dark md:text-2xl">{motscles}</p>
          <p className="m-0 text-[17px] leading-relaxed text-body">
            Un consultant KOAST vous recontacte pour échanger sur votre besoin et établir un premier diagnostic.
          </p>
          <div className="mt-2 flex flex-col gap-2.5 text-base text-body">
            {CONTACT.phoneHref ? <a href={CONTACT.phoneHref} className="text-body no-underline">{CONTACT.phone}</a> : <span>{CONTACT.phone}</span>}
            <a href={`mailto:${CONTACT.email}`} className="text-body no-underline hover:text-gold-dark">{CONTACT.email}</a>
            {CONTACT.whatsappHref && (
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener" className="font-semibold text-ink no-underline hover:text-gold-dark">
                Écrire sur WhatsApp →
              </a>
            )}
          </div>
          <Link to={INCIDENT_PATH} className="mt-3 flex items-center gap-4 rounded-lg bg-navy p-6 text-white no-underline transition-colors hover:bg-navy-card">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[4px] bg-gold text-navy">
              <Icon name="TriangleAlert" size={22} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[17px] font-semibold">Vous êtes victime d'une attaque ?</span>
              <span className="text-sm font-semibold text-gold">Urgence cyber · Signaler un incident →</span>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="relative flex flex-col gap-[18px] rounded-lg bg-white p-6 shadow-[0_12px_40px_rgba(8,17,44,0.08)] md:p-10">
            {/* Champ piège anti-spam : invisible pour les humains */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
              <label>Site web<input type="text" name="site_web" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Prénom*<input name="prenom" required autoComplete="given-name" className={field} /></label>
              <label className={label}>Nom*<input name="nom" required autoComplete="family-name" className={field} /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Entreprise*<input name="entreprise" required autoComplete="organization" className={field} /></label>
              <label className={label}>Taille de l'organisation*
                <select name="taille" required defaultValue="" className={field}>
                  <option value="" disabled>Veuillez sélectionner</option>
                  {TAILLES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>E-mail professionnel*<input type="email" name="email" required autoComplete="email" className={field} /></label>
              <label className={label}>Téléphone*<input type="tel" name="telephone" required autoComplete="tel" className={field} /></label>
            </div>
            <label className={label}>Votre besoin*
              <select name="besoin" required defaultValue={besoin ?? BESOINS[0].label} className={field}>
                {BESOINS.map((b) => <option key={b.label}>{b.label}</option>)}
              </select>
            </label>
            <label className={label}>Message
              <textarea name="message" rows={4} className={`${field} h-auto resize-y py-3`} />
            </label>
            <label className="flex items-start gap-2.5 text-[13px] leading-normal text-body">
              <input type="checkbox" name="consentement" value="oui" required className="mt-0.5 size-[18px] accent-gold" />
              <span>
                J'accepte que KOAST Consulting utilise ces informations pour me recontacter au sujet de ma demande
                (<Link to="/confidentialite" className="text-gold-dark">politique de confidentialité</Link>).
              </span>
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex min-h-[50px] cursor-pointer items-center gap-2 rounded-[4px] border-0 bg-gold px-8 text-base font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
              >
                {status === 'sending' && <Icon name="LoaderCircle" size={18} className="animate-spin" />}
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </button>
              <p role="status" aria-live="polite" className="m-0 text-sm">
                {status === 'success' && <span className="font-semibold text-[#1E7A46]">Merci, votre demande a bien été envoyée. Nous vous recontactons rapidement.</span>}
                {status === 'error' && (
                  <span className="font-semibold text-[#B3261E]">
                    L'envoi n'a pas abouti. Réessayez ou écrivez-nous à <a href={`mailto:${CONTACT.email}`} className="text-[#B3261E]">{CONTACT.email}</a>.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
