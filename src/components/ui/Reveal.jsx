import { motion, useReducedMotion } from 'framer-motion'

// Apparition douce au défilement. Désactivée si l'utilisateur a demandé moins d'animations.
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Cmp = motion[as] ?? motion.div
  return (
    <Cmp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Cmp>
  )
}
