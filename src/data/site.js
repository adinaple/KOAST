// Coordonnées et contenus généraux du site.
// ⚠️ Tout ce qui est marqué À CONFIRMER doit être remplacé par les vraies informations de KOAST.

export const CONTACT = {
  phone: '[+225 XX XX XX XX XX]', // À CONFIRMER
  phoneHref: '', // ex. 'tel:+2250700000000' — À CONFIRMER
  email: 'contact@VOTRE-DOMAINE', // À CONFIRMER (boîte à créer dans hPanel)
  whatsappHref: '', // ex. 'https://wa.me/2250700000000' — À CONFIRMER
  address: '[Adresse], Abidjan', // À CONFIRMER
  city: "Abidjan, Côte d'Ivoire",
}

// Chiffres clés : laisser [XX] tant que les vrais chiffres ne sont pas validés.
export const STATS = [
  { value: '[XX]', label: "Années d'expérience" },
  { value: '[XX]', label: 'Projets réalisés' },
  { value: '[XX]', label: 'Experts certifiés' },
  { value: '[XX]', label: 'Clients accompagnés' },
]

export const REFERENTIELS = ['NIST CSF 2.0', 'ISO 27001', 'ISO 27005', 'CIS Controls', 'MITRE ATT&CK', 'RGPD', ]

export const DIFFERENCES = [
  { title: 'Expertise terrain', text: 'Des consultants spécialisés dans le déploiement de solutions cyber en environnement complexe.', icon: 'Wrench' },
  { title: 'Approche de bout en bout', text: 'Conseil → Architecture → Intégration → Exploitation.', icon: 'Route' },
  { title: 'Indépendance technologique', text: "La solution est choisie en fonction du besoin, pas l'inverse.", icon: 'Scale' },
  { title: 'Expertise locale, standards internationaux', text: 'Connaissance du marché ivoirien associée aux standards internationaux.', icon: 'MapPin' },
  { title: 'Transfert de compétences', text: 'Nos équipes accompagnent également vos équipes internes.', icon: 'Users' },
]

// Les 8 besoins de l'écran « Quel est votre besoin ? » → page expertise correspondante
export const BESOINS = [
  { label: 'Évaluer ma sécurité', expertise: 'audit-pentest', icon: 'Search' },
  { label: "Protéger mon système d'information", expertise: 'infrastructure-reseau-endpoint', icon: 'Shield' },
  { label: 'Protéger mes données', expertise: 'protection-donnees-chiffrement', icon: 'Database' },
  { label: 'Sécuriser les identités et les accès', expertise: 'identite-mfa-pki', icon: 'User' },
  { label: 'Sécuriser mon Cloud', expertise: 'cloud-security', icon: 'Cloud' },
  { label: 'Détecter les cyberattaques', expertise: 'soc-mdr-detection', icon: 'Radar' },
  { label: 'Réagir à un incident', expertise: 'reponse-incidents-forensic', icon: 'TriangleAlert' },
  { label: 'Me mettre en conformité', expertise: 'gouvernance-conformite', icon: 'ClipboardCheck' },
]

// Ne jamais inventer de client : les projets sont anonymisés, les cartes [..] sont à compléter.
export const REALISATIONS = [
  { secteur: 'Administration', secteurSlug: 'secteur-public', expertise: 'Protection des données & Chiffrement', title: 'Projet — Protection des données', text: "Déploiement d'une solution centralisée de chiffrement des postes et de gestion des clés." },
  { secteur: 'Grande entreprise', secteurSlug: 'entreprises', expertise: 'Identité, MFA & PKI', title: 'Projet — Identité', text: "Mise en œuvre d'une authentification forte basée sur certificats et cartes à puce." },
  { secteur: '[Secteur]', secteurSlug: null, expertise: '[Expertise]', title: 'Projet — [À compléter]', text: "[Description courte d'un projet réel réalisé par KOAST.]", placeholder: true },
  { secteur: '[Secteur]', secteurSlug: null, expertise: '[Expertise]', title: 'Projet — [À compléter]', text: "[Description courte d'un projet réel réalisé par KOAST.]", placeholder: true },
]

export const ARTICLES = [
  { category: 'Conseils', title: '10 mesures prioritaires pour sécuriser une PME ivoirienne', image: '/images/globe.jpg' },
  { category: 'Décryptage', title: 'MFA, PKI ou Passwordless : quelle stratégie choisir ?', image: '/images/bouclier.jpg' },
  { category: 'Réglementation', title: "Protection des données personnelles en Côte d'Ivoire : quelles obligations pour les entreprises ?", image: '/images/grille.jpg' },
  { category: 'Guides', title: 'Comment mettre en place une politique de chiffrement ?', image: '/images/flux.jpg' },
  { category: 'Actualités cyber', title: "[Titre d'un article d'actualité]", image: '/images/reseau.jpg', placeholder: true },
  { category: 'Études', title: "[Titre d'une étude]", image: '/images/ondes.jpg', placeholder: true },
]
export const ARTICLE_UNE = { category: 'Conseils', title: "Que faire dans les premières heures d'une attaque ransomware ?", chapo: "[Chapeau de l'article : deux lignes qui résument les réflexes à adopter.]", image: '/images/reseau-or.jpg' }
export const CATEGORIES = ['Actualités cyber', 'Conseils', 'Décryptage', 'Réglementation', 'Guides', 'Études']

export const TAILLES = ['Moins de 50 collaborateurs', '50 à 250 collaborateurs', '250 à 1 000 collaborateurs', 'Plus de 1 000 collaborateurs', 'Administration / organisme public']
