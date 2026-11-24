// Les 6 secteurs. Les « enjeux » sont une proposition de rédaction, à valider par KOAST.

export const SECTEURS = [
  {
    slug: 'secteur-public', short: 'Secteur public', card: 'Administration', name: 'Administrations & secteur public', icon: 'Landmark', image: '/images/grille.jpg',
    message: 'Sécuriser les services publics et les données sensibles.',
    intro: "Protéger les services numériques de l'État et des collectivités, ainsi que les données des citoyens qu'ils traitent.",
    enjeux: ['Protection des données des citoyens', 'Continuité des services publics numériques', 'Gestion des identités des agents'],
    expertises: ['gouvernance-conformite', 'protection-donnees-chiffrement', 'identite-mfa-pki', 'resilience-pca-pra'],
  },
  {
    slug: 'banque-finance', short: 'Banque & Finance', card: 'Banque & Finance', name: 'Banques & services financiers', icon: 'CreditCard', image: '/images/bouclier.jpg',
    message: 'Protéger les transactions, identités et données financières.',
    intro: 'Sécuriser vos opérations, vos canaux numériques et les données de vos clients face à des menaces ciblées.',
    enjeux: ['Sécurité des transactions et des canaux digitaux', 'Authentification forte des clients et des collaborateurs', 'Détection des intrusions et des fraudes', "Conformité réglementaire et continuité d'activité"],
    expertises: ['identite-mfa-pki', 'soc-mdr-detection', 'audit-pentest', 'resilience-pca-pra'],
  },
  {
    slug: 'telecoms', short: 'Télécoms', card: 'Télécoms', name: 'Télécoms', icon: 'RadioTower', image: '/images/reseau.jpg',
    message: 'Protéger infrastructures critiques et services numériques.',
    intro: 'Protéger des réseaux et des services critiques, utilisés au quotidien par vos abonnés et vos partenaires.',
    enjeux: ['Sécurité des infrastructures réseau', 'Disponibilité des services', 'Protection des données des abonnés', 'Détection des attaques à grande échelle'],
    expertises: ['infrastructure-reseau-endpoint', 'soc-mdr-detection', 'reponse-incidents-forensic', 'protection-donnees-chiffrement'],
  },
  {
    slug: 'industrie-energie', short: 'Industrie & Énergie', card: 'Industrie & Énergie', name: 'Industrie & énergie', icon: 'Factory', image: '/images/flux.jpg',
    message: 'Sécuriser IT, OT et infrastructures critiques.',
    intro: 'Concilier sécurité, disponibilité et sûreté de fonctionnement entre systèmes informatiques et systèmes industriels.',
    enjeux: ['Convergence IT / OT', 'Segmentation des réseaux industriels', 'Accès distants des prestataires', 'Continuité de production'],
    expertises: ['infrastructure-reseau-endpoint', 'audit-pentest', 'soc-mdr-detection', 'resilience-pca-pra'],
  },
  {
    slug: 'sante', short: 'Santé', card: 'Santé', name: 'Santé', icon: 'HeartPulse', image: '/images/ondes.jpg',
    message: 'Protéger données médicales et disponibilité des systèmes.',
    intro: 'Protéger des données particulièrement sensibles tout en garantissant la disponibilité des systèmes de soins.',
    enjeux: ['Confidentialité des données médicales', 'Disponibilité des systèmes de soins', 'Résistance aux rançongiciels', 'Sensibilisation des personnels'],
    expertises: ['protection-donnees-chiffrement', 'reponse-incidents-forensic', 'resilience-pca-pra', 'sensibilisation-formation'],
  },
  {
    slug: 'entreprises', short: 'Entreprises', card: 'Entreprises', name: 'PME, ETI & grandes entreprises', icon: 'Building2', image: '/images/reseau-or.jpg',
    message: 'Une cybersécurité adaptée à votre taille, de la PME au grand groupe.',
    intro: 'PME et ETI : accéder à une cybersécurité adaptée sans construire une équipe complète. Grandes entreprises : gouvernance, intégration et services cyber à grande échelle.',
    enjeux: ['Prioriser les mesures essentielles', 'Sécuriser Microsoft 365 et le cloud', "Disposer d'un RSSI externalisé", 'Former et sensibiliser les collaborateurs'],
    expertises: ['gouvernance-conformite', 'cloud-security', 'identite-mfa-pki', 'sensibilisation-formation'],
  },
]

export const getSecteur = (slug) => SECTEURS.find((s) => s.slug === slug)
export const secteurPath = (s) => `/secteurs/${s.slug}`
