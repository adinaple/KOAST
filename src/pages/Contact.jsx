import Meta from '../components/Meta'
import BlocProjet from '../components/BlocProjet'
import { Hero } from '../components/ui/Hero'

export default function Contact() {
  return (
    <>
      <Meta title="Contact" description="Contactez KOAST Consulting pour un premier diagnostic cybersécurité." />
      <Hero
        image="/images/ondes.jpg"
        breadcrumb={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
        title="Parlons de vos enjeux"
        subtitle="Décrivez votre besoin : un consultant KOAST vous recontacte pour établir un premier diagnostic."
      />
      <BlocProjet titre="Parlons de vos enjeux" motscles="Conseil · Intégration · Cyberdéfense" />
      <section className="bg-white">
        <div className="wrap py-24">
          {/* Remplacer ce bloc par l'iframe Google Maps de l'adresse de KOAST */}
          <div className="flex h-[360px] items-center justify-center rounded-lg border border-dashed border-[#C9CED9] bg-[#EEF0F4] text-[15px] text-muted">
            [Plan d'accès — Abidjan]
          </div>
        </div>
      </section>
    </>
  )
}
