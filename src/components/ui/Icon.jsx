// Icônes du site : on importe uniquement celles utilisées (le bundle reste léger).
import {
  ArrowRight, Building2, Check, ChevronDown, ClipboardCheck, Cloud, CodeXml, CreditCard,
  Database, Factory, GraduationCap, HeartPulse, Landmark, MapPin, Menu, Plug, RadioTower,
  Radar, RefreshCw, Route, Scale, Search, Shield, ShieldCheck, TriangleAlert, UserCheck,
  Users, Wrench, X, Compass, Phone, Mail, MessageCircle, LoaderCircle, User,
} from 'lucide-react'

const ICONS = {
  ArrowRight, Building2, Check, ChevronDown, ClipboardCheck, Cloud, CodeXml, CreditCard,
  Database, Factory, GraduationCap, HeartPulse, Landmark, MapPin, Menu, Plug, RadioTower,
  Radar, RefreshCw, Route, Scale, Search, Shield, ShieldCheck, TriangleAlert, UserCheck,
  Users, Wrench, X, Compass, Phone, Mail, MessageCircle, LoaderCircle, User,
}

export function Icon({ name, size = 24, strokeWidth = 1.8, className = '' }) {
  const Cmp = ICONS[name] ?? Shield
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}

// Carré coloré contenant une icône (repris du modèle : carré or + pictogramme bleu nuit).
export function IconSquare({ name, size = 48, iconSize, tone = 'gold', className = '' }) {
  const tones = {
    gold: 'bg-gold text-navy',
    navy: 'bg-navy text-gold',
  }
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[4px] ${tones[tone]} ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={iconSize ?? Math.round(size / 2)} />
    </span>
  )
}
