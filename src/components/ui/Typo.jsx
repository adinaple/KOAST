import { Link } from 'react-router-dom'

export function H2({ children, light = false, className = '' }) {
  return (
    <h2
      className={`m-0 text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[2.875rem] ${light ? 'text-white' : 'text-ink'} ${className}`}
    >
      {children}
    </h2>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`font-accent text-[13px] font-semibold uppercase tracking-[0.16em] ${className}`}>
      {children}
    </span>
  )
}

// Bouton principal (or) ou secondaire. `to` = lien interne, `href` = ancre ou lien externe.
export function Button({ to, href, children, variant = 'gold', className = '', ...rest }) {
  const variants = {
    gold: 'bg-gold text-navy hover:bg-gold-light',
    navy: 'bg-navy text-white hover:bg-navy-card',
    outline: 'border border-white/40 text-white hover:border-gold hover:text-gold',
  }
  const cls = `inline-flex min-h-12 items-center justify-center rounded-[4px] px-6 text-base font-semibold no-underline transition-colors ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <a href={href} className={cls} {...rest}>{children}</a>
}

export function TextLink({ to, children, light = false, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1 py-3 text-base font-semibold no-underline transition-colors ${light ? 'text-gold hover:text-gold-light' : 'text-ink hover:text-gold-dark'} ${className}`}
    >
      {children}
    </Link>
  )
}
