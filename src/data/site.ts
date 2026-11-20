export const site = {
  name: 'DataSahel',
  tagline: 'Former, Analyser, Innover',
  baseline:
    "Une expertise locale adaptée aux réalités du terrain, au service de vos données.",
  email: 'contact@datasahel.org',
  emailAlt: 'cdiarra@datasahel.org',
  phone: '+223 69 50 50 62',
  phoneHref: 'tel:+22369505062',
  whatsapp: 'https://wa.me/22369505062',
  address: {
    street: 'Kalaban Coura ACI',
    city: 'Bamako',
    country: 'Mali',
  },
  socials: {
    facebook: 'https://web.facebook.com/profile.php?id=61579667091367',
    linkedin:
      'https://www.linkedin.com/company/datasahel/about/?viewAsMember=true',
  },
  founder: 'Chérif Soumaila Diarra',
} as const

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Expertises', to: '/#expertises' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
] as const

export const tools = [
  'Excel',
  'Power BI',
  'Python',
  'R',
  'Stata',
  'SPSS',
  'KoboToolbox',
  'ODK',
  'SurveyCTO',
  'NVivo',
  'MAXQDA',
  'Sphinx',
  'Google Forms',
  'Epi Info',
] as const

export const stats = [
  { value: 6, suffix: '', label: "domaines d'expertise", note: 'de la collecte à la décision' },
  { value: 14, suffix: '+', label: 'outils & logiciels', note: 'maîtrisés par notre équipe' },
  { value: 3, suffix: '', label: "formats d'intervention", note: 'présentiel, en ligne, hybride' },
  { value: 24, suffix: '/7', label: 'disponibilité', note: 'pour vos urgences terrain' },
] as const
