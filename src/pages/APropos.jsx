import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { H2, Eyebrow } from '../components/ui/Typo'
import { STATS } from '../data/site'

const METIERS = [
  { t: 'CONSEIL', d: 'Gouvernance, analyse de risques, conformité et audit.' },
  { t: 'INTÉGRATION', d: 'Architecture, choix et déploiement des solutions de cybersécurité.' },
  { t: 'CYBERDÉFENSE', d: 'Détection, réponse aux incidents et résilience.' },
]
const APPROCHE = [
  { t: 'Conseil', d: 'Comprendre votre contexte, vos risques et vos priorités.' },
  { t: 'Architecture', d: 'Concevoir la cible adaptée à votre environnement.' },
  { t: 'Intégration', d: 'Déployer et configurer les solutions retenues.' },
  { t: 'Exploitation', d: 'Accompagner vos équipes et maintenir le niveau de sécurité.' },
]
// Valeurs proposées : à valider par KOAST.
const VALEURS = [
  { t: 'Indépendance', d: "La solution est choisie en fonction du besoin, pas l'inverse." },
  { t: 'Transmission', d: 'Nos équipes accompagnent et font monter en compétences les équipes internes.' },
  { t: 'Exigence', d: 'Les standards internationaux appliqués au contexte ivoirien.' },
  { t: 'Confidentialité', d: 'Discrétion sur nos clients, leurs projets et leurs données.' },
]

export default function APropos() {
  return (
    <>
      <Meta title="À propos" description="KOAST Consulting : un partenaire de confiance pour protéger les organisations, leurs données et leurs activités numériques." />
      <Hero
        image="/images/reseau-or.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'À propos' }]}
        title="KOAST Consulting"
        subtitle="Un partenaire de confiance pour protéger les organisations, leurs données et leurs activités numériques."
      >
        <p className="m-0 text-[22px] leading-snug font-bold text-gold">De la stratégie à la protection opérationnelle.</p>
      </Hero>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3"><Eyebrow className="text-gold-dark">Nos métiers</Eyebrow><H2>Trois métiers clairement identifiés</H2></Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {METIERS.map((m, i) => (
              <Reveal key={m.t} delay={i * 0.05} className="flex flex-col gap-3 rounded-lg bg-navy p-8 text-white">
                <span className="text-2xl font-extrabold tracking-[0.06em]">{m.t}</span>
                <span className="text-base leading-relaxed text-mist">{m.d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3"><Eyebrow className="text-gold-dark">Notre approche</Eyebrow><H2>Une approche de bout en bout</H2></Reveal>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {APPROCHE.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.04} className="flex flex-col gap-3.5 rounded-lg border border-line bg-white px-[22px] py-[26px]">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-[15px] font-extrabold text-gold">0{i + 1}</span>
                <span className="text-lg font-bold">{a.t}</span>
                <span className="text-[15px] leading-relaxed text-body">{a.d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow className="text-gold-dark">Nos valeurs</Eyebrow>
            <H2>Ce qui nous guide</H2>
            <p className="m-0 text-lg text-body">[Valeurs proposées, à valider par KOAST.]</p>
          </Reveal>
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {VALEURS.map((v) => (
              <Reveal key={v.t} className="flex flex-col gap-2.5 border-t-2 border-navy pt-5">
                <span className="text-xl font-bold">{v.t}</span>
                <span className="text-[15px] leading-relaxed text-body">{v.d}</span>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 rounded-lg border border-[#D9DDE5] px-5 py-10 text-center">
                <span className="text-[52px] leading-none font-bold text-navy">{s.value}</span>
                <span className="text-base text-body">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="wrap grid items-center gap-12 py-24 lg:grid-cols-2">
          <Reveal className="flex h-[300px] items-center justify-center rounded-lg border border-dashed border-[#5B6C99] bg-[#14214A] text-[15px] text-mist md:h-[380px]">
            [Photo de l'équipe KOAST]
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-4">
            <Eyebrow className="text-gold-dark">Notre équipe</Eyebrow>
            <H2>Expertise locale, standards internationaux</H2>
            <p className="m-0 text-[17px] leading-[1.7] text-body">
              Des consultants spécialisés dans le déploiement de solutions cyber en environnement complexe, qui connaissent le
              marché ivoirien et appliquent les standards internationaux.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-10 py-24">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow className="text-gold-dark">Partenaires</Eyebrow>
            <H2>Partenaires technologiques</H2>
            <p className="m-0 text-lg text-body">Nos partenariats nous permettent de choisir la solution adaptée à chaque besoin.</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex h-24 items-center justify-center rounded-lg border border-dashed border-[#C9CED9] text-sm text-muted">[Logo partenaire]</div>
            ))}
          </div>
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
