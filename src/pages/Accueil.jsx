import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Button, TextLink } from '../components/ui/Typo'
import { IconSquare } from '../components/ui/Icon'
import { PillarSquare } from '../components/ui/PillarIcon'
import { PILIERS, pilierPath, getExpertise, expertisePath } from '../data/expertises'
import { SECTEURS, secteurPath } from '../data/secteurs'
import { STATS, REFERENTIELS, BESOINS, DIFFERENCES, REALISATIONS, ARTICLES } from '../data/site'

export default function Accueil() {
  return (
    <>
      <Meta description="KOAST Consulting, partenaire de confiance pour protéger les organisations, leurs données et leurs activités numériques : conseil, intégration et cyberdéfense." />

      <Hero
        home
        image="/images/reseau.jpg"
        title={<>Protégez ce qui compte.<br />Anticipez ce qui menace.</>}
        subtitle="Un partenaire de confiance pour protéger les organisations, leurs données et leurs activités numériques."
      >
        <Button href="#piliers">Découvrir nos expertises</Button>
        <Link to="/contact" className="py-3 text-base font-semibold text-white no-underline hover:text-gold">Demander un diagnostic →</Link>
      </Hero>

      {/* Introduction + chiffres clés */}
      <section className="bg-white">
        <div className="wrap grid items-center gap-16 pb-20 pt-24 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <h2 className="m-0 text-[2.4rem] leading-[1.08] font-semibold tracking-[-0.02em] md:text-[3.25rem]">
              Conseil. Intégration.<br />Cyberdéfense.
            </h2>
            <p className="m-0 text-lg leading-[1.75] text-body">
              De la stratégie à la protection opérationnelle, KOAST accompagne les organisations pour évaluer leurs risques,
              protéger leurs données et leurs identités, détecter les menaces et réagir aux incidents, avec la connaissance
              du marché ivoirien et l'exigence des standards internationaux.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-[#D9DDE5] px-5 py-8 text-center">
                <span className="text-5xl leading-none font-semibold text-ink md:text-6xl">{s.value}</span>
                <span className="text-base text-body">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-4 pb-24">
          <span className="text-sm text-muted">Nos interventions s'appuient sur :</span>
          {REFERENTIELS.map((r) => (
            <span key={r} className="text-[15px] font-bold tracking-[0.04em] text-muted">{r}</span>
          ))}
        </div>
      </section>

      {/* Les 4 piliers */}
      <section id="piliers" className="scroll-mt-20 bg-navy text-white">
        <div className="wrap flex flex-col gap-12 py-28">
          <Reveal className="flex max-w-[860px] flex-col gap-4">
            <H2 light>Les 4 piliers KOAST</H2>
            <p className="m-0 text-lg leading-relaxed text-mist md:text-[19px]">
              De la stratégie à la protection opérationnelle : quatre piliers pour couvrir l'ensemble de votre risque cyber.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {PILIERS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={pilierPath(p)} className="group flex h-full flex-col gap-[18px] rounded-lg bg-navy-card p-8 text-white no-underline transition-colors hover:bg-[#16224A] md:p-10">
                  <span className="flex items-center justify-between">
                    <PillarSquare slug={p.slug} size={60} />
                    <span className="text-[15px] font-semibold text-[#5B6C99]">{p.num}</span>
                  </span>
                  <span className="mt-1.5 text-2xl leading-tight font-bold tracking-[0.03em] md:text-[25px]">{p.exact}</span>
                  <span className="text-lg leading-snug font-semibold text-gold">{p.sub}</span>
                  <span className="text-base leading-[1.85] text-mist">{p.line}</span>
                  <span className="mt-auto pt-2 text-[15px] font-semibold transition-colors group-hover:text-gold">Découvrir le pilier →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quel est votre besoin ? */}
      <section className="bg-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal className="flex max-w-[820px] flex-col gap-4">
            <H2>Quel est votre besoin ?</H2>
            <p className="m-0 text-lg leading-relaxed text-body md:text-[19px]">
              Inutile de maîtriser le jargon cyber : choisissez votre objectif, nous vous orientons vers la bonne expertise.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {BESOINS.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.03}>
                <Link to={expertisePath(getExpertise(b.expertise))} className="flex h-full items-center gap-[18px] rounded-lg bg-cloud p-6 text-ink no-underline transition-colors hover:bg-[#EBEDF2]">
                  <IconSquare name={b.icon} tone="navy" />
                  <span className="flex-1 text-lg leading-snug font-semibold">{b.label}</span>
                  <span aria-hidden="true" className="text-lg text-gold-dark">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise phare */}
      <section className="bg-cloud">
        <div className="wrap grid items-center gap-16 py-24 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <span className="font-accent text-[13px] font-semibold uppercase tracking-[0.14em] text-gold-dark">Expertise phare</span>
            <H2>Protection des données &amp; chiffrement</H2>
            <p className="m-0 text-2xl leading-snug font-semibold text-ink">
              Vos données sont votre patrimoine numérique. Nous les protégeons où qu'elles se trouvent.
            </p>
            <p className="m-0 text-[17px] leading-relaxed text-body">Postes · Serveurs · Cloud · Fichiers · Email · Partages réseau</p>
            <Button to={expertisePath(getExpertise('protection-donnees-chiffrement'))} className="mt-1.5 self-start">Découvrir l'expertise</Button>
          </Reveal>
          <Reveal delay={0.08} className="h-[320px] overflow-hidden rounded-lg bg-navy md:h-[440px]">
            <img src="/images/flux.jpg" alt="" loading="lazy" className="size-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* La différence KOAST */}
      <section className="bg-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal><H2>La différence KOAST</H2></Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {DIFFERENCES.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05} className="flex flex-col gap-3.5">
                <IconSquare name={d.icon} size={52} tone="navy" />
                <span className="text-xl leading-tight font-semibold">{d.title}</span>
                <span className="text-base leading-relaxed text-body">{d.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="bg-navy text-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[820px] flex-col gap-4">
              <H2 light>Vos secteurs, vos enjeux</H2>
              <p className="m-0 text-lg text-mist md:text-[19px]">Au-delà de la technologie, KOAST comprend vos métiers.</p>
            </div>
            <TextLink to="/secteurs" light>Tous les secteurs →</TextLink>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SECTEURS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link to={secteurPath(s)} className="group flex h-full flex-col gap-4 rounded-lg bg-navy-card p-8 text-white no-underline transition-colors hover:bg-[#16224A]">
                  <IconSquare name={s.icon} size={50} />
                  <span className="text-[22px] font-semibold">{s.card}</span>
                  <span className="text-base leading-relaxed text-mist">{s.message}</span>
                  <span className="mt-auto text-[15px] font-semibold text-gold">Découvrir →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="bg-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[820px] flex-col gap-4">
              <H2>Nos réalisations</H2>
              <p className="m-0 text-lg text-body md:text-[19px]">Par respect de la confidentialité, nos projets sont présentés sans nommer nos clients.</p>
            </div>
            <TextLink to="/references">Toutes nos références →</TextLink>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {REALISATIONS.slice(0, 3).map((r, i) => (
              <Reveal key={i} delay={i * 0.05} className={`flex flex-col gap-3.5 rounded-lg border p-8 ${r.placeholder ? 'border-dashed border-[#C9CED9]' : 'border-[#D9DDE5]'}`}>
                <span className={`font-accent text-[13px] font-semibold uppercase tracking-[0.12em] ${r.placeholder ? 'text-muted' : 'text-gold-dark'}`}>{r.secteur}</span>
                <span className="text-[22px] leading-snug font-semibold">{r.title}</span>
                <span className="text-base leading-relaxed text-body">{r.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dernières publications */}
      <section className="bg-cloud">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <H2>Dernières publications</H2>
            <TextLink to="/ressources">Tous les Cyber Insights →</TextLink>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <Link to="/ressources" className="group flex flex-col gap-[18px] text-ink no-underline">
                  <span className="block h-[230px] overflow-hidden rounded-lg bg-navy">
                    <img src={a.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  <span className="font-accent text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-dark">{a.category}</span>
                  <span className="text-[21px] leading-snug font-semibold">{a.title}</span>
                  <span className="text-[15px] font-semibold group-hover:text-gold-dark">Lire l'article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
