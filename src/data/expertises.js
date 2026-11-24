// Les 4 piliers et les 12 expertises KOAST (contenus issus du document « Structure site KOAST »).

export const PILIERS = [
  {
    slug: 'conseil-gouvernance',
    num: '01',
    exact: 'CONSEIL & GOUVERNANCE',
    title: 'Conseil & Gouvernance',
    sub: 'Comprendre et maîtriser vos risques',
    line: 'Gouvernance cybersécurité • Analyse de risques • RSSI externalisé • Conformité • Audit de maturité • Politiques de sécurité',
    intro: 'Le pilier Conseil & Gouvernance aide les directions générales et les DSI à structurer leur cybersécurité : évaluer la maturité, analyser les risques, définir les politiques et piloter la conformité.',
    mission: "donner à vos décideurs une vision claire de leurs risques cyber et un plan d'action priorisé.",
    keywords: 'Gouvernance · Analyse de risques · RSSI externalisé · Audit',
    ctaTitle: 'Vous avez un projet de conseil cyber ?',
    icon: 'Compass',
    image: '/images/grille.jpg',
    image2: '/images/reseau-or.jpg',
  },
  {
    slug: 'protection-integration',
    num: '02',
    exact: 'PROTECTION & INTÉGRATION',
    title: 'Protection & Intégration',
    sub: 'Sécuriser vos données, identités et infrastructures',
    line: 'Chiffrement • IAM • MFA • PKI • Sécurité Endpoint • Réseau • Cloud • Sécurité des données • Intégration de solutions',
    intro: "De l'architecture au déploiement, KOAST protège vos données, vos identités, vos infrastructures et vos environnements cloud, et intègre les solutions adaptées à votre contexte.",
    mission: "protéger ce qui compte, là où se trouvent vos données, sans freiner l'activité.",
    keywords: 'Chiffrement · IAM · MFA · PKI · Cloud',
    ctaTitle: 'Vous avez un projet de protection ?',
    icon: 'ShieldCheck',
    image: '/images/bouclier.jpg',
    image2: '/images/flux.jpg',
  },
  {
    slug: 'detection-reponse',
    num: '03',
    exact: 'DÉTECTION & RÉPONSE',
    title: 'Détection & Réponse',
    sub: "Identifier les menaces avant qu'elles ne deviennent critiques",
    line: 'SOC • SIEM • EDR/XDR • MDR • Threat Intelligence • Gestion des vulnérabilités • Réponse à incident • Forensic',
    intro: 'Surveiller en continu, détecter les comportements suspects et réagir vite en cas d’incident : KOAST associe détection, réponse et investigation.',
    mission: "repérer les attaques au plus tôt et en limiter l'impact sur votre activité.",
    keywords: 'SOC · SIEM · EDR/XDR · Forensic',
    ctaTitle: 'Vous avez un projet de détection ?',
    icon: 'Radar',
    image: '/images/globe.jpg',
    image2: '/images/reseau.jpg',
  },
  {
    slug: 'resilience-accompagnement',
    num: '04',
    exact: 'RÉSILIENCE & ACCOMPAGNEMENT',
    title: 'Résilience & Accompagnement',
    sub: 'Réagir, restaurer et continuer votre activité',
    line: 'PCA/PRA • Gestion de crise cyber • Sauvegarde • Sensibilisation • Formation • Tests de crise',
    intro: "Préparer votre organisation à la crise, garantir la reprise de l'activité et faire monter en compétences vos équipes.",
    mission: 'que votre organisation sache réagir, se relever et apprendre de chaque incident.',
    keywords: 'PCA/PRA · Gestion de crise · Sensibilisation · Formation',
    ctaTitle: 'Vous avez un projet de résilience ?',
    icon: 'RefreshCw',
    image: '/images/ondes.jpg',
    image2: '/images/grille.jpg',
  },
]

const APPROCHE = {
  title: 'Notre approche',
  steps: [
    { label: 'Conseil', desc: 'Comprendre votre contexte, vos risques et vos priorités.' },
    { label: 'Architecture', desc: 'Concevoir la cible adaptée à votre environnement.' },
    { label: 'Intégration', desc: 'Déployer et configurer les solutions retenues.' },
    { label: 'Exploitation', desc: 'Accompagner vos équipes et maintenir le niveau de sécurité.' },
  ],
}

export const EXPERTISES = [
  {
    slug: 'gouvernance-conformite', pilier: 'conseil-gouvernance', icon: 'ClipboardCheck',
    menu: 'Conseil, Gouvernance & Conformité', title: 'Gouvernance & conformité cyber',
    desc: 'Structurer votre gouvernance, maîtriser vos risques et répondre aux exigences réglementaires.',
    intro: "Structurer votre gouvernance cybersécurité, maîtriser vos risques et répondre aux exigences réglementaires, en Côte d'Ivoire comme à l'international.",
    cta: 'Évaluer ma maturité cyber',
    groups: [
      { title: 'Gouvernance & risques', items: ['Audit de maturité cybersécurité', 'Cartographie des risques', 'Analyse de risques', 'Politique de sécurité du SI', 'Schéma directeur cybersécurité', 'Accompagnement RSSI / RSSI externalisé', 'Gouvernance des fournisseurs', 'Gestion des risques tiers'] },
      { title: 'Conformité & référentiels', items: ['ISO 27001', 'NIST CSF', 'RGPD', 'Conformité aux exigences ivoiriennes', 'Accompagnement protection des données personnelles', 'Réglementation sectorielle'] },
    ],
    
  },
  {
    slug: 'audit-pentest', pilier: 'conseil-gouvernance', icon: 'Search',
    menu: 'Audit & Pentest', title: 'Audit & Pentest',
    desc: 'Évaluer votre niveau de sécurité et identifier vos vulnérabilités avant les attaquants.',
    intro: "Évaluer concrètement le niveau de sécurité de votre système d'information et identifier vos vulnérabilités avant qu'elles ne soient exploitées.",
    cta: "Faire évaluer mon système d'information",
    groups: [
      { title: 'Audits de sécurité', items: ['Audit de sécurité SI', 'Audit Active Directory', 'Audit Microsoft 365', 'Audit réseau', 'Audit configuration', 'Audit architecture', 'Audit cloud', 'Audit Wi-Fi', 'Audit API', 'Revue de configuration'] },
      { title: "Tests d'intrusion", items: ["Tests d'intrusion internes", "Tests d'intrusion externes", 'Pentest applications Web', 'Scan de vulnérabilités', 'Red Team [à confirmer]'] },
    ],
  },
  {
    slug: 'protection-donnees-chiffrement', pilier: 'protection-integration', icon: 'Database', phare: true,
    menu: 'Protection des données & Chiffrement', title: 'Protection des données & chiffrement',
    tagline: "Vos données sont votre patrimoine numérique. Nous les protégeons où qu'elles se trouvent.",
    desc: "Protéger vos données où qu'elles se trouvent : postes, fichiers, emails, cloud.",
    intro: 'Postes, serveurs, cloud, fichiers, email, partages réseau : KOAST conçoit et déploie la protection de vos données sensibles de bout en bout.',
    cta: 'Protéger mes données',
    groups: [
      { title: 'Chiffrement des postes', items: ['Chiffrement disque', 'Chiffrement des données session ouverte', 'Gestion centralisée'] },
      { title: 'Chiffrement des fichiers', items: ['Données locales', 'Partages réseau', 'Dossiers sensibles', 'Chiffrement collaboratif'] },
      { title: 'Protection des emails', items: ['Chiffrement des messages', 'Signature', 'Classification', 'DLP'] },
      { title: 'Gestion des clés', items: ['Key Management', 'HSM', 'PKI', 'Certificats'] },
      { title: 'Protection des données Cloud', items: ['Microsoft 365', 'Azure', 'Données SaaS', 'Classification et DLP'] },
    ],
    note: { title: 'Expertise phare KOAST', text: "La protection des données et le chiffrement sont au cœur du savoir-faire de KOAST, de l'étude du besoin jusqu'à l'exploitation." },
  },
  {
    slug: 'identite-mfa-pki', pilier: 'protection-integration', icon: 'UserCheck',
    menu: 'Identité, MFA & PKI', title: 'Identité & confiance numérique',
    tagline: 'La bonne personne. Le bon accès. Au bon moment.',
    desc: 'La bonne personne. Le bon accès. Au bon moment.',
    intro: "Sécuriser l'accès à vos systèmes et à vos données grâce à des identités maîtrisées, une authentification forte et une PKI robuste.",
    cta: 'Sécuriser mes accès',
    groups: [
      { title: 'Authentification', items: ['MFA', 'SSO', 'Authentification forte', 'Passwordless', 'Cartes à puce', 'Tokens'] },
      { title: 'PKI & certificats', items: ['PKI', 'Certificats utilisateurs', 'Certificats machines'] },
      { title: 'Identités & accès', items: ['IAM', 'Gestion du cycle de vie des identités', 'Microsoft Entra ID', 'Active Directory', 'Zero Trust'] },
      { title: 'Comptes à privilèges', items: ['Gestion des comptes privilégiés', 'PAM'] },
    ],
  },
  {
    slug: 'infrastructure-reseau-endpoint', pilier: 'protection-integration', icon: 'Shield',
    menu: 'Infrastructure, Réseau & Endpoint', title: 'Infrastructure, réseau & Endpoint',
    desc: 'Sécuriser réseaux, serveurs, postes de travail et accès distants.',
    intro: "Renforcer la sécurité de vos réseaux, de vos serveurs et de vos postes de travail, du périmètre jusqu'aux accès distants.",
    cta: 'Sécuriser mon infrastructure',
    groups: [
      { title: 'Réseau', items: ['Sécurité réseau', 'Segmentation', 'Firewall', 'VPN', 'NAC', 'Sécurité Wi-Fi', 'Protection DDoS'] },
      { title: 'Accès', items: ['Bastion', 'Sécurité des accès distants', 'Zero Trust Network Access'] },
      { title: 'Systèmes & postes', items: ['Sécurisation Active Directory', 'Durcissement Windows / Linux', 'Sécurité des serveurs', 'Gestion des postes', 'EDR / XDR', 'Antivirus nouvelle génération'] },
    ],
  },
  {
    slug: 'cloud-security', pilier: 'protection-integration', icon: 'Cloud',
    menu: 'Cloud Security', title: 'Cloud Security',
    desc: 'Sécuriser Microsoft 365, Azure, AWS et vos environnements hybrides.',
    intro: 'Sécuriser Microsoft 365, Azure, AWS et vos environnements hybrides, sans freiner les usages de vos équipes.',
    cta: 'Sécuriser mon Cloud',
    groups: [
      { title: 'Plateformes', items: ['Microsoft 365 Security', 'Azure Security', 'AWS Security', 'Sécurisation des environnements hybrides'] },
      { title: 'Contrôles & protection', items: ['IAM Cloud', 'CSPM', 'Protection des workloads', 'DLP Cloud', 'Sauvegarde SaaS', 'Zero Trust'] },
    ],
    note: { title: 'Sécuriser Microsoft 365', text: 'Audit de configuration, protection des données et des identités : Microsoft 365 est souvent le premier chantier cloud de nos clients.' },
  },
  {
    slug: 'securite-applicative-devsecops', pilier: 'protection-integration', icon: 'CodeXml',
    menu: 'Sécurité applicative & DevSecOps', title: 'Applications & DevSecOps',
    desc: 'Intégrer la sécurité dans vos applications et vos chaînes de développement.',
    intro: "Intégrer la sécurité dans vos applications et vos chaînes de développement, du code jusqu'à la production.",
    cta: 'Sécuriser mes applications',
    groups: [
      { title: 'Tests applicatifs', items: ['Audit de code', 'Pentest Web', 'Pentest API', 'SAST', 'DAST'] },
      { title: 'DevSecOps', items: ['Sécurité CI/CD', 'Gestion des secrets', 'Sécurité des containers', 'Sécurité Kubernetes', 'Intégration de la sécurité dans le développement', 'Accompagnement DevSecOps'] },
    ],
  },
  {
    slug: 'integration-solutions', pilier: 'protection-integration', icon: 'Plug',
    menu: 'Intégration de solutions cyber', title: 'Intégration de solutions cyber',
    tagline: "Nous vous accompagnons de l'étude du besoin jusqu'à l'exploitation.",
    desc: "De l'étude du besoin jusqu'à l'exploitation, en toute indépendance.",
    intro: 'Choisir, déployer et faire vivre les bonnes solutions de cybersécurité, avec une approche indépendante des éditeurs.',
    cta: 'Lancer mon projet',
    groups: [
      { title: 'Solutions couvertes', items: ['Chiffrement', 'PKI', 'IAM', 'MFA', 'PAM', 'EDR', 'SIEM', 'DLP', 'Firewall', 'Sécurité Cloud', 'Sauvegarde', 'Sécurité Microsoft'] },
    ],
    process: { title: "Notre parcours d'intégration", steps: ['Audit', 'Architecture', 'Choix de solution', 'POC', 'Déploiement', 'Migration', 'Formation', 'Support'] },
  },
  {
    slug: 'soc-mdr-detection', pilier: 'detection-reponse', icon: 'Radar',
    menu: 'SOC, MDR & Détection', title: 'Détection & surveillance',
    desc: 'Surveiller, corréler les événements et détecter les comportements suspects.',
    intro: "Surveiller votre système d'information, détecter les comportements suspects et réagir avant qu'une menace ne devienne critique.",
    cta: 'Renforcer ma détection',
    groups: [
      { title: 'Services de détection', items: ['SOC', 'MDR', 'Supervision de sécurité'] },
      { title: 'Technologies', items: ['SIEM', 'EDR/XDR', 'Collecte et centralisation des logs', 'Corrélation des événements'] },
      { title: 'Chasse & renseignement', items: ['Détection des comportements suspects', 'Threat Hunting', 'Threat Intelligence', 'Gestion des vulnérabilités'] },
    ],
    note: { title: 'Services opérés', text: '[À préciser : services réalisés directement par KOAST et services fournis avec un partenaire.]' },
  },
  {
    slug: 'reponse-incidents-forensic', pilier: 'detection-reponse', icon: 'TriangleAlert',
    menu: 'Réponse aux incidents & Forensic', title: 'Réponse aux incidents cyber',
    tagline: "Vous êtes victime d'une attaque ?",
    desc: "Contenir l'attaque, investiguer et restaurer vos systèmes.",
    intro: "Nos équipes vous aident à contenir l'attaque, investiguer, restaurer vos systèmes et tirer les enseignements de l'incident.",
    cta: 'Signaler un incident cyber',
    groups: [
      { title: 'Situations prises en charge', items: ['Ransomware', 'Compromission de compte', 'Compromission Active Directory', 'Fuite de données'] },
      { title: 'Nos interventions', items: ['Réponse à incident', 'Investigation numérique', 'Analyse des postes compromis', 'Analyse de logs', 'Forensic', 'Coordination de crise'] },
    ],
    process: { title: 'Notre méthode de réponse', steps: ['Détection', 'Qualification', 'Confinement', 'Investigation', 'Éradication', 'Restauration', "Retour d'expérience"] },
  },
  {
    slug: 'resilience-pca-pra', pilier: 'resilience-accompagnement', icon: 'RefreshCw',
    menu: 'Résilience, PCA & PRA', title: "Cyber-résilience & continuité d'activité",
    desc: 'Préparer la gestion de crise et la reprise de votre activité.',
    intro: 'Préparer votre organisation à faire face à une crise cyber et à reprendre son activité le plus vite possible.',
    cta: 'Préparer ma résilience',
    groups: [
      { title: 'Continuité & reprise', items: ['PCA', 'PRA', 'BIA', 'Stratégie de sauvegarde', 'Tests de restauration', "Retour à l'activité"] },
      { title: 'Gestion de crise', items: ['Gestion de crise cyber', 'Cellule de crise', 'Exercices de simulation', 'Plan de communication de crise'] },
    ],
    note: { title: 'Pour les organisations critiques', text: 'Particulièrement pertinent pour les administrations, banques, assurances, télécoms et grandes entreprises.' },
  },
  {
    slug: 'sensibilisation-formation', pilier: 'resilience-accompagnement', icon: 'GraduationCap',
    menu: 'Sensibilisation & Formation', title: 'Cyber Academy',
    desc: 'Cyber Academy : former chaque public, des dirigeants aux équipes IT.',
    intro: 'Sensibiliser et former chaque public, de la direction générale aux équipes IT, pour faire de vos collaborateurs votre première ligne de défense.',
    cta: 'Former mes équipes',
    groups: [
      { title: 'Direction générale', items: ['Cyber-risque pour dirigeants', 'Gestion de crise'] },
      { title: 'Collaborateurs', items: ['Phishing', 'Mots de passe', 'Ingénierie sociale', 'Protection des données'] },
      { title: 'DSI / équipes IT', items: ['Administration sécurisée', 'Active Directory', 'Chiffrement', 'IAM', 'Microsoft Security'] },
      { title: 'Simulation', items: ['Campagnes de phishing', 'Exercices cyber', "Simulations d'incidents"] },
    ],
  },
]

export const getPilier = (slug) => PILIERS.find((p) => p.slug === slug)
export const getExpertise = (slug) => EXPERTISES.find((e) => e.slug === slug)
export const expertisesOf = (pilierSlug) => EXPERTISES.filter((e) => e.pilier === pilierSlug)
export const expertisePath = (e) => `/expertises/${e.pilier}/${e.slug}`
export const pilierPath = (p) => `/expertises/${p.slug}`
export const processOf = (e) => e.process || APPROCHE
export const INCIDENT_PATH = '/expertises/detection-reponse/reponse-incidents-forensic'
