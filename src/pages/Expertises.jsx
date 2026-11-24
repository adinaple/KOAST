import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Typo'
import { PillarSquare } from '../components/ui/PillarIcon'
import { PILIERS, expertisesOf, expertisePath, pilierPath } from '../data/expertises'

export default function Expertises() {
  return (
    <>
      <Meta title="Nos expertises" description="12 expertises cybersécurité réparties en 4 piliers : conseil & gouvernance, protection & intégration, détection & réponse, résilience & accompagnement." />
      <Hero
        image="/images/reseau-or.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Expertises' }]}
        title="Nos expertises"
        subtitle="De la stratégie à la protection opérationnelle : 12 expertises réparties en 4 piliers."
      >
        <Button href="#projet">Contacter nos équipes</Button>
      </Hero>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-24 py-28">
          {PILIERS.map((p, i) => (
            <div key={p.slug} className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal className={`h-[300px] overflow-hidden rounded-lg bg-navy md:h-[380px] ${i % 2 ? 'lg:order-2' : ''}`}>
                <Link to={pilierPath(p)} className="block size-full">
                  <img src={p.image} alt="" loading="lazy" className="size-full object-cover" />
                </Link>
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col gap-[18px]">
                <span className="flex items-center gap-4">
                  <PillarSquare slug={p.slug} size={52} />
                  <span className="text-[15px] font-semibold text-muted">{p.num}</span>
                </span>
                <h2 className="m-0 text-[1.75rem] leading-tight font-bold tracking-[0.02em] md:text-[2rem]">{p.exact}</h2>
                <p className="m-0 text-[19px] leading-snug font-semibold text-gold-dark">{p.sub}</p>
                <p className="m-0 text-base leading-[1.8] text-body">{p.line}</p>
                <div className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
                  {expertisesOf(p.slug).map((e) => (
                    <Link key={e.slug} to={expertisePath(e)} className="flex items-center justify-between gap-3 border-b border-line py-4 text-[17px] font-semibold text-ink no-underline hover:text-gold-dark">
                      {e.menu}<span aria-hidden="true" className="text-gold">→</span>
                    </Link>
                  ))}
                </div>
                <Button to={pilierPath(p)} variant="navy" className="mt-1.5 self-start">Découvrir le pilier</Button>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
