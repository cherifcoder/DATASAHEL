export type ServiceIcon =
  | 'database'
  | 'smartphone'
  | 'target'
  | 'chart'
  | 'megaphone'
  | 'graduation'

export type Service = {
  id: string
  index: string
  title: string
  description: string
  bullets: string[]
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    id: 'analyse',
    index: '01',
    title: 'Nettoyage & analyse statistique',
    description:
      'Nous transformons des données brutes et dispersées en résultats fiables, lisibles et actionnables.',
    bullets: [
      'Traitement, apurement et structuration des bases',
      'Analyses descriptives et modèles avancés',
      'STATA, R, Python, Excel, Power BI, NVivo, MAXQDA, Sphinx',
    ],
    icon: 'database',
  },
  {
    id: 'collecte',
    index: '02',
    title: 'Collecte de données digitale',
    description:
      'Des dispositifs de collecte robustes, pensés pour le terrain et supervisés de bout en bout.',
    bullets: [
      'Conception de formulaires et plan de sondage',
      'KoboToolbox, ODK, SurveyCTO, Survey Solutions, Epi Info, Google Forms',
      'Suivi terrain, contrôle qualité et audits de données',
    ],
    icon: 'smartphone',
  },
  {
    id: 'suivi-evaluation',
    index: '03',
    title: 'Suivi-évaluation de projets',
    description:
      "Un cadre de mesure rigoureux pour piloter vos interventions et démontrer vos résultats.",
    bullets: [
      'Cadres de performance et théories du changement',
      'Collecte et suivi des indicateurs clés',
      'Évaluations d’impact et rapports bailleurs',
    ],
    icon: 'target',
  },
  {
    id: 'visualisation',
    index: '04',
    title: 'Visualisation & reporting',
    description:
      'Des tableaux de bord et des rapports visuels qui rendent vos résultats immédiatement compréhensibles.',
    bullets: [
      'Dashboards interactifs Power BI et Excel',
      'Infographies et rapports visuels sur mesure',
      'Restitution auprès des parties prenantes',
    ],
    icon: 'chart',
  },
  {
    id: 'contenus',
    index: '05',
    title: 'Production de contenus',
    description:
      'Valoriser vos données, c’est aussi raconter ce qu’elles disent. Nous le faisons avec clarté.',
    bullets: [
      'Infographies et cartes interactives',
      'Vidéos explicatives et motion design',
      'Sensibilisation et diffusion des résultats',
    ],
    icon: 'megaphone',
  },
  {
    id: 'formations',
    index: '06',
    title: 'Formations pratiques',
    description:
      'Des ateliers concrets, adaptés aux réalités locales et aux besoins des équipes.',
    bullets: [
      'Collecte mobile, analyse statistique, data visualisation',
      'Sessions en présentiel, en ligne ou hybrides',
      'Cas pratiques issus de vos propres données',
    ],
    icon: 'graduation',
  },
]

export const objectives = [
  {
    index: 'I',
    title: 'Prestations techniques en gestion des données',
    points: [
      'Nettoyage, structuration et analyse statistique',
      'Mise en place de bases de données et tableaux de bord',
    ],
  },
  {
    index: 'II',
    title: 'Accompagnement et suivi-évaluation de projets',
    points: [
      'Systèmes de suivi-évaluation : indicateurs et reporting',
      'Collecte de terrain, évaluations d’impact et audits de données',
      'Rapports d’impact pour bailleurs et partenaires techniques',
    ],
  },
  {
    index: 'III',
    title: 'Formations spécialisées et ateliers pratiques',
    points: [
      'Excel, Power BI, Python, Stata, R, NVivo, MAXQDA, Sphinx',
      'Collecte mobile : KoboToolbox, ODK, Survey CTO, Survey Solutions',
      'Sessions adaptées aux ONG, PME et collectivités',
    ],
  },
]

export const values = [
  {
    title: 'Expertise locale',
    text: 'Une compréhension fine des réalités du terrain sahélien et des contraintes de vos projets.',
  },
  {
    title: 'Tarification accessible',
    text: 'Des prestations calibrées pour les petites structures, sans compromis sur la rigueur.',
  },
  {
    title: 'Approche pédagogique',
    text: 'Transférer les compétences, pas seulement livrer un rapport. Vos équipes gagnent en autonomie.',
  },
  {
    title: 'Communication visuelle',
    text: 'Des livrables professionnels qui donnent envie de lire, de comprendre et de décider.',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Cadrage',
    text: 'Compréhension du contexte, des questions auxquelles les données doivent répondre et des contraintes du terrain.',
    tag: 'Objectifs & indicateurs',
  },
  {
    step: '02',
    title: 'Collecte',
    text: 'Conception des outils, plan de sondage, formulaires digitaux et supervision des équipes de terrain.',
    tag: 'Kobo · ODK · SurveyCTO',
  },
  {
    step: '03',
    title: 'Traitement',
    text: 'Nettoyage, apurement, documentation et structuration de bases de données fiables et réutilisables.',
    tag: 'Qualité des données',
  },
  {
    step: '04',
    title: 'Analyse',
    text: 'Statistiques descriptives et avancées, analyse d’impact et mise en perspective des résultats.',
    tag: 'R · Stata · Python',
  },
  {
    step: '05',
    title: 'Valorisation',
    text: 'Dashboards, infographies, rapports et ateliers de restitution pour transformer les résultats en décisions.',
    tag: 'Power BI · Dataviz',
  },
]

export const audiences = [
  'ONG & projets de développement',
  'Universités & centres de recherche',
  'Institutions publiques',
  'PME & collectivités',
  'Jeunes professionnels',
]
