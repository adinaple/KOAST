import Meta from '../components/Meta'
import { Hero } from '../components/ui/Hero'
import { Button } from '../components/ui/Typo'

export default function NotFound() {
  return (
    <>
      <Meta title="Page introuvable" />
      <Hero image="/images/reseau.jpg" title="Page introuvable" subtitle="La page que vous cherchez n'existe pas ou a été déplacée.">
        <Button to="/">Retour à l'accueil</Button>
        <Button to="/expertises" variant="outline">Nos expertises</Button>
      </Hero>
    </>
  )
}
