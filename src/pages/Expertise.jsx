import { Link, useParams } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import NotFound from './NotFound'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Button, TextLink } from '../components/ui/Typo'
import { IconSquare } from '../components/ui/Icon'
import { PillarSquare } from '../components/ui/PillarIcon'
import { EXPERTISES, getExpertise, getPilier, expertisePath, pilierPath, processOf } from '../data/expertises'
import { BESOINS } from '../data/site'

export default function Expertise() {
  const { pilier: pilierSlug, expertise: slug } = useParams()
  const e = getExpertise(slug)
  if (!e || e.pilier !== pilierSlug) return <NotFound />
  const p = getPilier(e.pilier)
  const process = processOf(e)
  const steps = process.steps.map((s) => (typeof s === 'string' ? { label: s } : s))

  // Expertises complémentaires : d'abord celles du même pilier, puis les suivantes
  const idx = EXPERTISES.indexOf(e)
  const same = EXPERTISES.filter((x) => x.pilier === e.pilier && x !== e)
  const others = [...EXPERTISES.slice(idx + 1), ...EXPERTISES.slice(0, idx)].filter((x) => x.pilier !== e.pilier)
  const related = [...same, ...others].slice(0, 3)

  const besoin = BESOINS.find((b) => b.expertise === e.slug)?.label

  return (
    <>
      <Meta title={e.title} description={e.intro} />
      <Hero
        image={p.image}
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: p.title, to: pilierPath(p) }, { label: e.menu }]}
        eyebrow={p.exact}
        eyebrowTo={pilierPath(p)}
        title={e.title}
        subtitle={e.intro}
      >
        <Button href="#projet">{e.cta}</Button>
      </Hero>

      {/* Prestations */}
      <section className="bg-white">
        <div className="wrap grid items-start gap-16 py-24 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28">
            <H2>Nos prestations</H2>
            <p className="m-0 text-2xl leading-snug font-semibold text-gold-dark">{e.tagline || `${p.sub}.`}</p>
            <div className="h-[260px] overflow-hidden rounded-lg bg-navy md:h-[300px]">
              <img src={p.image2} alt="" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <div className="flex flex-col gap-9">
            {e.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.04} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <PillarSquare slug={p.slug} size={44} />
                  <h3 className="m-0 text-2xl leading-snug font-semibold">{g.title}</h3>
                </div>
                <ul className="m-0 grid list-none border-t border-line p-0 sm:grid-cols-2 sm:gap-x-8">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center justify-between gap-3 border-b border-line py-3.5 text-[17px] leading-snug text-ink">
                      <span>{it}</span>
                      <span aria-hidden="true" className="font-bold text-gold">›</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            {e.note && (
              <Reveal className="flex flex-col gap-2 rounded-lg bg-cream px-7 py-6">
                <span className="text-[19px] font-semibold text-ink">{e.note.title}</span>
                <span className="text-base leading-relaxed text-body">{e.note.text}</span>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="bg-navy text-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal><H2 light>{process.title}</H2></Reveal>
          <div className={`grid gap-4 sm:grid-cols-2 ${steps.length > 4 ? 'lg:grid-cols-4 xl:grid-cols-8' : 'lg:grid-cols-4'}`}>
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04} className="flex flex-col gap-3.5 rounded-lg bg-navy-card px-6 py-7">
                <span className="text-[34px] leading-none font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[19px] leading-snug font-semibold">{s.label}</span>
                {s.desc && <span className="text-[15px] leading-relaxed text-mist">{s.desc}</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises complémentaires */}
      <section className="bg-white">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <H2>Expertises complémentaires</H2>
            <TextLink to={pilierPath(p)}>Voir le pilier {p.title} →</TextLink>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r, i) => {
              const rp = getPilier(r.pilier)
              return (
                <Reveal key={r.slug} delay={i * 0.05}>
                  <Link to={expertisePath(r)} className="group flex h-full flex-col gap-4 rounded-lg bg-cloud p-8 text-ink no-underline transition-colors hover:bg-[#EBEDF2]">
                    <IconSquare name={r.icon} tone="navy" />
                    <span className="font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-dark">{rp.exact}</span>
                    <span className="text-[22px] leading-snug font-semibold">{r.menu}</span>
                    <span className="mt-auto text-[15px] font-semibold group-hover:text-gold-dark">Découvrir →</span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <BlocProjet titre="Parlons de votre projet" motscles={e.groups.map((g) => g.title).join(' · ')} besoin={besoin} />
    </>
  )
}
