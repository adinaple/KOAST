import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { IconSquare } from '../components/ui/Icon'
import { SECTEURS, secteurPath } from '../data/secteurs'

export default function Secteurs() {
  return (
    <>
      <Meta title="Secteurs" description="Administration, banque, télécoms, industrie, santé, entreprises : la cybersécurité adaptée à votre secteur." />
      <Hero
        image="/images/reseau.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Secteurs' }]}
        title="Vos secteurs, vos enjeux"
        subtitle="Au-delà de la technologie, KOAST comprend vos métiers : chaque secteur a ses contraintes, ses réglementations et ses menaces."
      />
      <section className="bg-cloud">
        <div className="wrap grid gap-5 py-24 md:grid-cols-2 lg:grid-cols-3">
          {SECTEURS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link to={secteurPath(s)} className="group flex h-full min-h-[260px] flex-col gap-[18px] rounded-lg border border-[#D9DDE5] bg-white p-8 text-ink no-underline transition-shadow hover:shadow-[0_12px_32px_rgba(8,17,44,0.08)]">
                <IconSquare name={s.icon} size={56} iconSize={26} tone="navy" />
                <span className="text-[22px] leading-snug font-semibold">{s.name}</span>
                <span className="text-base leading-relaxed text-body">{s.message}</span>
                <span className="mt-auto text-sm font-bold group-hover:text-gold-dark">Voir le secteur →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <BlocProjet />
    </>
  )
}
