import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Accueil from './pages/Accueil'
import Expertises from './pages/Expertises'
import Pilier from './pages/Pilier'
import Expertise from './pages/Expertise'
import Secteurs from './pages/Secteurs'
import Secteur from './pages/Secteur'
import References from './pages/References'
import APropos from './pages/APropos'
import Ressources from './pages/Ressources'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { INCIDENT_PATH } from './data/expertises'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="expertises" element={<Expertises />} />
        <Route path="expertises/:pilier" element={<Pilier />} />
        <Route path="expertises/:pilier/:expertise" element={<Expertise />} />
        <Route path="secteurs" element={<Secteurs />} />
        <Route path="secteurs/:slug" element={<Secteur />} />
        <Route path="references" element={<References />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="ressources" element={<Ressources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="urgence-cyber" element={<Navigate to={INCIDENT_PATH} replace />} />
        <Route path="mentions-legales" element={<Legal page="mentions" />} />
        <Route path="confidentialite" element={<Legal page="confidentialite" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
