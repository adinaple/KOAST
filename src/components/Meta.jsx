// React 19 place automatiquement <title> et <meta> dans le <head>.
export default function Meta({ title, description }) {
  const full = title ? `${title} | KOAST Consulting` : 'KOAST Consulting — Cybersécurité à Abidjan'
  return (
    <>
      <title>{full}</title>
      {description && <meta name="description" content={description} />}
    </>
  )
}
