import { useState } from 'react'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Eyebrow } from '../components/ui/Typo'
import { REALISATIONS } from '../data/site'
import { SECTEURS } from '../data/secteurs'

const FORMAT = [
  { t: 'Contexte', d: '[Présentation anonymisée du client : secteur, taille, environnement.]' },
  { t: 'Enjeu', d: '[Le problème à résoudre ou le risque à traiter.]' },
  { t: 'Solution KOAST', d: '[Démarche, solutions déployées, durée du projet.]' },
  { t: 'Résultats', d: '[Bénéfices obtenus, idéalement mesurables.]' },
]

export default function References() {
  const [filtre, setFiltre] = useState('tous')
  const liste = REALISATIONS.filter((r) => filtre === 'tous' || r.secteurSlug === filtre || r.placeholder)

  return (
    <>
      <Meta title="Références & réalisations" description="Cas clients et réalisations de KOAST Consulting, présentés de façon anonymisée." />
      <Hero
        image="/images/grille.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Références' }]}
        title="Références & réalisations"
        subtitle="Cas clients et réalisations de KOAST. Par respect de la confidentialité, nos projets sont présentés sans nommer nos clients."
      />

      <section className="bg-cloud">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow className="text-gold-dark">Réalisations</Eyebrow>
            <H2>Nos projets</H2>
          </Reveal>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer par secteur">
            {[{ slug: 'tous', short: 'Tous' }, ...SECTEURS].map((s) => (
              <button
                key={s.slug}
                type="button"
                aria-pressed={filtre === s.slug}
                onClick={() => setFiltre(s.slug)}
                className={`min-h-11 cursor-pointer rounded-full border px-[18px] text-sm font-semibold transition-colors ${filtre === s.slug ? 'border-navy bg-navy text-white' : 'border-[#D9DDE5] bg-white text-ink hover:border-gold'}`}
              >
                {s.short}
              </button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((r, i) => (
              <Reveal key={i} delay={i * 0.04} className={`flex flex-col gap-3.5 rounded-lg bg-white p-[30px] ${r.placeholder ? 'border border-dashed border-[#C9CED9]' : 'border border-[#D9DDE5]'}`}>
                <span className={`flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em] ${r.placeholder ? 'text-muted' : 'text-gold-dark'}`}>
                  <span className={`size-2 rounded-full ${r.placeholder ? 'bg-[#C9CED9]' : 'bg-gold'}`} />{r.secteur.toUpperCase()}
                </span>
                <span className="text-[22px] leading-snug font-bold">{r.title}</span>
                <span className="text-[15px] leading-relaxed text-body">{r.text}</span>
                <span className="mt-auto self-start rounded-full bg-[#F2F4F8] px-3 py-1.5 text-[13px] font-semibold text-navy">{r.expertise}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="wrap flex flex-col gap-9 py-24">
          <Reveal className="flex max-w-[780px] flex-col gap-3">
            <Eyebrow className="text-gold">Cas client</Eyebrow>
            <H2 light>Format d'un cas client détaillé</H2>
            <p className="m-0 text-lg leading-relaxed text-mist">Chaque réalisation peut être développée en quatre temps, sans révéler l'identité du client.</p>
          </Reveal>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {FORMAT.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.04} className="flex flex-col gap-2.5 rounded-lg border border-[#263463] bg-navy-card p-6">
                <span className="text-[13px] font-extrabold tracking-[0.12em] text-gold">{f.t.toUpperCase()}</span>
                <span className="text-[15px] leading-relaxed text-mist">{f.d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
