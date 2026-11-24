import { useState } from 'react'
import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'
import { Reveal } from '../components/ui/Reveal'
import { ARTICLES, ARTICLE_UNE, CATEGORIES } from '../data/site'

const ONGLETS = ['Cyber Insights', 'Guides', 'Actualités']

export default function Ressources() {
  const [onglet, setOnglet] = useState(ONGLETS[0])
  const [cat, setCat] = useState('Tout')
  const liste = ARTICLES.filter((a) => {
    if (onglet === 'Guides') return a.category === 'Guides'
    if (onglet === 'Actualités') return a.category === 'Actualités cyber'
    return cat === 'Tout' || a.category === cat
  })

  return (
    <>
      <Meta title="Cyber Insights" description="Actualités, conseils, décryptages, réglementation, guides et études : les analyses des experts KOAST." />
      <Hero
        image="/images/globe.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Ressources' }]}
        title="Cyber Insights"
        subtitle="Actualités, conseils, décryptages, réglementation, guides et études : les analyses de nos experts pour éclairer vos décisions cyber."
      >
        <div role="tablist" aria-label="Ressources" className="flex flex-wrap gap-2">
          {ONGLETS.map((o) => (
            <button
              key={o}
              type="button"
              role="tab"
              aria-selected={onglet === o}
              onClick={() => setOnglet(o)}
              className={`min-h-11 cursor-pointer rounded-[4px] border px-5 text-sm font-bold transition-colors ${onglet === o ? 'border-gold bg-gold text-navy' : 'border-[#3A4A75] bg-transparent text-white hover:border-gold'}`}
            >
              {o}
            </button>
          ))}
        </div>
      </Hero>

      <section className="bg-cloud">
        <div className="wrap flex flex-col gap-8 py-24">
          {onglet === 'Cyber Insights' && (
            <Reveal>
              <a href="#" className="grid overflow-hidden rounded-lg bg-navy text-white no-underline md:grid-cols-[1.1fr_1fr]">
                <span className="block min-h-[260px] md:min-h-[320px]">
                  <img src={ARTICLE_UNE.image} alt="" loading="lazy" className="size-full object-cover" />
                </span>
                <span className="flex flex-col gap-[18px] p-8 md:p-11">
                  <span className="flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em]">
                    <span className="size-2 rounded-full bg-gold" />À LA UNE · {ARTICLE_UNE.category.toUpperCase()}
                  </span>
                  <span className="text-[28px] leading-tight font-bold md:text-[32px]">{ARTICLE_UNE.title}</span>
                  <span className="text-base leading-relaxed text-mist">{ARTICLE_UNE.chapo}</span>
                  <span className="mt-auto text-[15px] font-bold text-gold">Lire l'article →</span>
                </span>
              </a>
            </Reveal>
          )}

          {onglet === 'Cyber Insights' && (
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer par catégorie">
              {['Tout', ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={cat === c}
                  onClick={() => setCat(c)}
                  className={`min-h-11 cursor-pointer rounded-full border px-[18px] text-sm font-semibold transition-colors ${cat === c ? 'border-navy bg-navy text-white' : 'border-[#D9DDE5] bg-white text-ink hover:border-gold'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <a href="#" className={`group flex h-full flex-col overflow-hidden rounded-lg bg-white text-ink no-underline ${a.placeholder ? 'border border-dashed border-[#C9CED9]' : 'border border-line'}`}>
                  <span className="relative block h-[170px] overflow-hidden bg-navy">
                    <img src={a.image} alt="" loading="lazy" className="size-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-5 left-6 flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em] text-white">
                      <span className="size-2 rounded-full bg-gold" />{a.category.toUpperCase()}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col gap-3.5 p-6">
                    <span className="text-xl leading-snug font-bold">{a.title}</span>
                    <span className="mt-auto flex justify-between text-[13px] text-muted">
                      <span>[Date] · [X] min</span>
                      <span className="font-bold text-navy group-hover:text-gold-dark">Lire →</span>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            {liste.length === 0 && <p className="text-body">Aucun contenu dans cette rubrique pour le moment.</p>}
          </div>
        </div>
      </section>

      <BlocProjet />
    </>
  )
}
