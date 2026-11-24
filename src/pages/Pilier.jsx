import { Link, useParams } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import NotFound from './NotFound'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Button } from '../components/ui/Typo'
import { IconSquare } from '../components/ui/Icon'
import { getPilier, expertisesOf, expertisePath } from '../data/expertises'

const NOMBRES = ['zéro', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six']
const DIFFERENCE = [
  { icon: 'MapPin', title: 'Expertise locale, standards internationaux', text: 'Connaissance du marché ivoirien associée aux standards internationaux.' },
  { icon: 'Scale', title: 'Indépendance technologique', text: "La solution est choisie en fonction du besoin, pas l'inverse." },
  { icon: 'Users', title: 'Transfert de compétences', text: 'Nos équipes accompagnent également vos équipes internes.' },
]

export default function Pilier() {
  const { pilier: slug } = useParams()
  const p = getPilier(slug)
  if (!p) return <NotFound />
  const exps = expertisesOf(p.slug)

  return (
    <>
      <Meta title={p.title} description={`${p.title} — ${p.sub}. ${p.line}`} />
      <Hero
        image={p.image}
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Expertises', to: '/expertises' }, { label: p.title }]}
        eyebrow={p.exact}
        title={p.title}
        subtitle={`${p.sub}.`}
      >
        <Button href="#projet">Contacter nos équipes</Button>
      </Hero>

      <section className="bg-white">
        <div className="wrap grid items-center gap-14 py-24 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-5 text-lg leading-[1.7] text-body md:text-[19px]">
            <p className="m-0">{p.intro}</p>
            <p className="m-0"><strong className="text-ink">Notre mission :</strong> {p.mission}</p>
          </Reveal>
          <Reveal delay={0.08} className="h-[280px] overflow-hidden rounded-lg bg-navy md:h-[340px]">
            <img src={p.image2} alt="" loading="lazy" className="size-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal className="flex max-w-[900px] flex-col gap-4">
            <H2 light>Un pilier, {NOMBRES[exps.length]} expertises</H2>
            <p className="m-0 text-[17px] leading-[1.8] text-mist">{p.line}</p>
          </Reveal>
          <div className={`grid gap-5 ${exps.length > 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
            {exps.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.05}>
                <Link to={expertisePath(e)} className="group flex h-full flex-col gap-[18px] rounded-lg bg-navy-card p-8 text-white no-underline transition-colors hover:bg-[#16224A]">
                  <IconSquare name={e.icon} size={50} />
                  <span className="text-2xl leading-tight font-semibold">{e.menu}</span>
                  <span className="text-base leading-relaxed text-mist">{e.desc}</span>
                  <span className="mt-auto text-[15px] font-semibold text-gold">Découvrir →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-11 py-24">
          <Reveal><H2>La différence KOAST</H2></Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {DIFFERENCE.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05} className="flex items-start gap-5">
                <IconSquare name={d.icon} size={52} tone="navy" />
                <span className="flex flex-col gap-2">
                  <span className="text-[21px] font-semibold">{d.title}</span>
                  <span className="text-base leading-relaxed text-body">{d.text}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlocProjet titre={p.ctaTitle} motscles={p.keywords} />
    </>
  )
}
