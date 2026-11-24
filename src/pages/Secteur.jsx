import { Link, useParams } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import NotFound from './NotFound'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Eyebrow, Button, TextLink } from '../components/ui/Typo'
import { IconSquare } from '../components/ui/Icon'
import { PillarIcon } from '../components/ui/PillarIcon'
import { SECTEURS, getSecteur, secteurPath } from '../data/secteurs'
import { getExpertise, getPilier, expertisePath } from '../data/expertises'
import { REALISATIONS } from '../data/site'

export default function Secteur() {
  const { slug } = useParams()
  const s = getSecteur(slug)
  if (!s) return <NotFound />
  const ref = REALISATIONS.find((r) => r.secteurSlug === s.slug)

  return (
    <>
      <Meta title={s.name} description={`${s.message} ${s.intro}`} />
      <Hero
        image={s.image}
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Secteurs', to: '/secteurs' }, { label: s.short }]}
        eyebrow="Secteur"
        title={s.name}
        subtitle={s.message}
      >
        <Button href="#projet">Contacter nos équipes</Button>
      </Hero>

      <section className="bg-white">
        <div className="wrap pt-24">
          <Reveal>
            <p className="m-0 max-w-[900px] text-xl leading-[1.55] font-medium text-ink md:text-2xl">{s.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow className="text-gold-dark">Vos enjeux</Eyebrow>
            <H2>Ce qui compte pour vous</H2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.enjeux.map((label, i) => (
              <Reveal key={label} delay={i * 0.04} className="flex flex-col gap-4 rounded-lg border border-[#D9DDE5] p-7">
                <span className="text-[32px] leading-none font-extrabold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg leading-snug font-bold">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[760px] flex-col gap-3">
              <Eyebrow className="text-gold-dark">Nos réponses</Eyebrow>
              <H2>Les expertises KOAST pour votre secteur</H2>
            </div>
            <TextLink to="/expertises">Toutes nos expertises →</TextLink>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.expertises.map((slug, i) => {
              const e = getExpertise(slug)
              const p = getPilier(e.pilier)
              return (
                <Reveal key={slug} delay={i * 0.04}>
                  <Link to={expertisePath(e)} className="group flex h-full flex-col gap-3.5 rounded-lg bg-navy p-7 text-white no-underline transition-colors hover:bg-navy-card">
                    <span className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.12em] text-gold">
                      <PillarIcon slug={p.slug} size={18} />{p.exact}
                    </span>
                    <span className="text-xl leading-snug font-bold">{e.menu}</span>
                    <span className="mt-auto text-sm font-bold text-gold">Découvrir →</span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid items-center gap-10 py-24 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow className="text-gold-dark">Réalisation</Eyebrow>
            <H2>Un exemple de projet</H2>
            <p className="m-0 text-[17px] text-body">Nos projets sont présentés sans nommer nos clients.</p>
          </Reveal>
          <Reveal delay={0.08} className={`flex flex-col gap-3.5 rounded-lg bg-navy p-9 text-white ${ref ? '' : 'border border-dashed border-[#5B6C99]'}`}>
            <span className="flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em]">
              <span className="size-2 rounded-full bg-gold" />{ref ? ref.secteur.toUpperCase() : '[SECTEUR]'}
            </span>
            <span className="text-2xl font-bold">{ref ? ref.title.replace('Projet — ', '') : '[Votre réalisation dans ce secteur]'}</span>
            <span className="text-base leading-relaxed text-mist">{ref ? ref.text : "[Description courte d'un projet réel réalisé par KOAST.]"}</span>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="wrap flex flex-wrap items-center gap-x-7 gap-y-4 py-16">
          <span className="text-lg font-semibold">Autres secteurs</span>
          <div className="flex flex-wrap gap-2.5">
            {SECTEURS.filter((o) => o.slug !== s.slug).map((o) => (
              <Link key={o.slug} to={secteurPath(o)} className="inline-flex min-h-11 items-center rounded-[4px] border border-[#D9DDE5] bg-white px-4 text-[15px] font-semibold text-ink no-underline hover:border-gold">
                {o.short} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
