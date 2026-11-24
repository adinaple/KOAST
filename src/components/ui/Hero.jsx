import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

// En-tête de page sombre avec visuel à droite, comme sur le modèle Synetis.
// breadcrumb : [{ label, to }] — le dernier élément est la page courante.
export function Hero({ image, breadcrumb, eyebrow, eyebrowTo, title, subtitle, children, home = false }) {
  const reduce = useReducedMotion()
  const anim = (d) => (reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } })
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-50 md:w-[66%] md:opacity-100"
          fetchPriority="high"
        />
      )}
      <div aria-hidden="true" className="hero-fade absolute inset-0" />
      <div className={`wrap relative flex flex-col gap-5 ${home ? 'py-28 md:py-40' : 'pb-24 pt-20 md:pb-30 md:pt-24'}`}>
        {breadcrumb && (
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-2 text-sm text-fog">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex gap-2">
                {i > 0 && <span aria-hidden="true">›</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link to={b.to} className="text-fog no-underline hover:text-gold">{b.label}</Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <motion.div {...anim(0)} className="mt-6">
            {eyebrowTo ? (
              <Link to={eyebrowTo} className="font-accent text-[13px] font-semibold uppercase tracking-[0.14em] text-gold no-underline hover:text-gold-light">{eyebrow}</Link>
            ) : (
              <span className="font-accent text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">{eyebrow}</span>
            )}
          </motion.div>
        )}
        <motion.h1
          {...anim(0.05)}
          className={`m-0 font-semibold tracking-[-0.025em] ${home ? 'max-w-[900px] text-[clamp(2.5rem,4.8vw,4.25rem)] leading-[1.04]' : 'max-w-[780px] text-[clamp(2.4rem,4.4vw,3.9rem)] leading-[1.05]'}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p {...anim(0.12)} className="m-0 max-w-[660px] text-lg leading-[1.55] text-fog md:text-[21px]">
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div {...anim(0.2)} className="mt-3 flex flex-wrap items-center gap-7">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
