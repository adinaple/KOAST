// Symboles des 4 piliers, identiques à la maquette (boussole, bouclier verrouillé, radar, reprise).
const PATHS = {
  'conseil-gouvernance': 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M15.5 8.5l-2 5-5 2 2-5z',
  'protection-integration': 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9.5 11.5h5v4h-5z M10.5 11.5v-1.5a1.5 1.5 0 0 1 3 0v1.5',
  'detection-reponse': 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 1 0 0-9z M12 12l6.4-6.4',
  'resilience-accompagnement': 'M20 11a8 8 0 0 0-14.5-4.5 M4 4v4h4 M4 13a8 8 0 0 0 14.5 4.5 M20 20v-4h-4',
}

export function PillarIcon({ slug, size = 24, strokeWidth = 1.7, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[slug]} />
    </svg>
  )
}

export function PillarSquare({ slug, size = 60, tone = 'gold', className = '' }) {
  const toneCls = tone === 'gold' ? 'bg-gold text-navy' : 'bg-navy text-gold'
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[4px] ${toneCls} ${className}`}
      style={{ width: size, height: size }}
    >
      <PillarIcon slug={slug} size={Math.round(size / 2)} />
    </span>
  )
}
