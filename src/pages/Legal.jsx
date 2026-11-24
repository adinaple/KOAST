import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { Hero } from '../components/ui/Hero'
import { CONTACT } from '../data/site'

// Pages légales : textes à faire valider (éditeur du site, hébergeur, traitement des données).
const CONTENUS = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      { h: 'Éditeur du site', p: `KOAST Consulting — [forme juridique, capital, RCCM], ${CONTACT.address}. Directeur de la publication : [nom].` },
      { h: 'Contact', p: `${CONTACT.email} · ${CONTACT.phone}` },
      { h: 'Hébergement', p: 'Hostinger International Ltd. — [adresse de l’hébergeur à reprendre depuis hPanel].' },
      { h: 'Propriété intellectuelle', p: "L'ensemble des contenus de ce site (textes, logos, visuels) est la propriété de KOAST Consulting, sauf mention contraire." },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    sections: [
      { h: 'Données collectées', p: 'Le formulaire de contact collecte vos nom, prénom, entreprise, taille de l’organisation, e-mail, téléphone, besoin et message.' },
      { h: 'Finalité', p: 'Ces données servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers.' },
      { h: 'Cadre légal', p: 'Le traitement respecte la loi ivoirienne n°2013-450 relative à la protection des données à caractère personnel. ' },
      { h: 'Durée de conservation', p: '[Durée à définir], puis suppression.' },
      { h: 'Vos droits', p: `Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à ${CONTACT.email}.` },
    ],
  },
}

export default function Legal({ page }) {
  const c = CONTENUS[page]
  return (
    <>
      <Meta title={c.title} />
      <Hero breadcrumb={[{ label: 'Accueil', to: '/' }, { label: c.title }]} title={c.title} />
      <section className="bg-white">
        <div className="wrap flex max-w-[860px] flex-col gap-8 py-20">
          {c.sections.map((s) => (
            <div key={s.h} className="flex flex-col gap-2">
              <h2 className="m-0 text-xl font-semibold">{s.h}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-body">{s.p}</p>
            </div>
          ))}
          <Link to="/" className="font-semibold text-gold-dark">← Retour à l'accueil</Link>
        </div>
      </section>
    </>
  )
}
