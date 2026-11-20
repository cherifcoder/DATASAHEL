export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  dateISO: string
  readingTime: string
  cover: 'grid' | 'arcs' | 'bars' | 'rings'
  featured?: boolean
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'stop-donnees',
    title: 'Stop ! Vos données sont un trésor endormi',
    excerpt:
      'Vos données d’entreprise peuvent révéler des opportunités insoupçonnées, optimiser vos processus et doper votre croissance. Encore faut-il savoir les réveiller.',
    category: 'Valorisation',
    date: '15 août 2025',
    dateISO: '2025-08-15',
    readingTime: '5 min',
    cover: 'grid',
    featured: true,
    body: [
      {
        type: 'p',
        text: "Dans presque chaque organisation que nous accompagnons, la même scène se répète : des fichiers Excel empilés dans un dossier « archives », des rapports d’activité jamais relus, des formulaires de collecte remplis puis oubliés. La donnée existe. Elle est simplement endormie.",
      },
      {
        type: 'p',
        text: "Or, une donnée non exploitée coûte plus cher qu’une donnée absente : elle a déjà été collectée, saisie, stockée — parfois plusieurs fois. Le vrai gisement n’est donc pas à chercher ailleurs. Il est déjà chez vous.",
      },
      { type: 'h2', text: 'Trois signaux qui montrent que vos données dorment' },
      {
        type: 'ul',
        items: [
          'Vous produisez des rapports dont personne ne se sert pour décider.',
          'Vos équipes ressaisissent plusieurs fois la même information dans des fichiers différents.',
          'Vous ne savez pas répondre en moins de dix minutes à une question simple sur vos bénéficiaires ou vos ventes.',
        ],
      },
      {
        type: 'quote',
        text: 'Une donnée n’a de valeur que lorsqu’elle éclaire une décision. Avant cela, elle n’est qu’un coût de stockage.',
      },
      { type: 'h2', text: 'Comment réveiller le trésor' },
      {
        type: 'p',
        text: "La démarche est moins technique qu’elle n’y paraît. Elle commence par une question : « quelle décision devons-nous prendre ce trimestre ? ». À partir de là, on remonte aux indicateurs nécessaires, puis aux données qui les alimentent. Le reste — nettoyage, modélisation, tableaux de bord — n’est qu’un moyen.",
      },
      {
        type: 'p',
        text: "Chez DataSahel, nous appliquons ce principe à chaque mission : pas de tableau de bord sans question de décision, pas de base de données sans usage identifié. C’est ce qui distingue un projet data utile d’un simple exercice de style.",
      },
      { type: 'h2', text: 'Par où commencer ?' },
      {
        type: 'p',
        text: "Choisissez un seul processus — le suivi des bénéficiaires, le reporting mensuel, la gestion des stocks — et posez-vous trois questions : quelles données avons-nous déjà ? Sont-elles fiables ? Qui les utilise, et pour décider quoi ? En une demi-journée, vous aurez souvent identifié vos deux ou trois priorités les plus rentables.",
      },
      {
        type: 'p',
        text: "Et si vous préférez être accompagné, c’est exactement le type de diagnostic que nous menons lors de nos premières rencontres. Vos données valent mieux qu’un dossier poussiéreux.",
      },
    ],
  },
  {
    slug: 'donnees-cles',
    title: 'La donnée, c’est la clé de votre succès ! Et si vous la teniez en main ?',
    excerpt:
      'Chez DataSahel, nous croyons que chaque organisation a le pouvoir de transformer ses données en une véritable force. Voici comment nous nous y prenons.',
    category: 'Stratégie',
    date: '15 août 2025',
    dateISO: '2025-08-15',
    readingTime: '4 min',
    cover: 'arcs',
    featured: true,
    body: [
      {
        type: 'p',
        text: "Nous rencontrons souvent des responsables convaincus que « la data, c’est pour les grandes structures ». Pourtant, les organisations les plus proches du terrain sont celles qui gagnent le plus à structurer leurs données : elles ont peu de marges d’erreur et un besoin criant de preuves d’impact.",
      },
      { type: 'h2', text: 'Quatre leviers concrets' },
      {
        type: 'ul',
        items: [
          'Décider plus vite : un indicateur suivi chaque mois évite les mauvaises surprises de fin de projet.',
          'Prouver ses résultats : bailleurs et partenaires demandent des données, pas des impressions.',
          'Allouer mieux : les tableaux de bord révèlent les zones où vos ressources produisent le plus.',
          'Communiquer : une infographie bien construite vaut mieux qu’un rapport de cent pages jamais lu.',
        ],
      },
      {
        type: 'quote',
        text: 'Les données ne remplacent pas l’intuition. Elles la rendent vérifiable.',
      },
      {
        type: 'p',
        text: "Notre rôle est de rendre ces leviers accessibles : des outils simples, des formations pratiques, des livrables compréhensibles par tous vos publics — du terrain au bailleur.",
      },
      { type: 'h2', text: 'Un accompagnement, pas une boîte noire' },
      {
        type: 'p',
        text: "Nous travaillons avec vos équipes, sur vos données, avec vos contraintes. À la fin de chaque mission, vous devez être capable de reproduire ce qui a été fait. C’est notre définition du transfert de compétences.",
      },
    ],
  },
  {
    slug: 'collecte-terrain',
    title: '5 réflexes pour réussir une collecte de données terrain',
    excerpt:
      'Un formulaire bien conçu ne suffit pas. De la supervision à l’apurement, voici les réflexes qui font la différence sur le terrain sahélien.',
    category: 'Méthodes',
    date: '2 septembre 2025',
    dateISO: '2025-09-02',
    readingTime: '6 min',
    cover: 'bars',
    body: [
      {
        type: 'p',
        text: "Passer d’un questionnaire papier à KoboToolbox est une bonne idée — à condition de ne pas déplacer simplement les erreurs. Sur le terrain, la qualité d’une collecte se joue avant le premier entretien.",
      },
      { type: 'h2', text: '1. Tester le formulaire sur de vraies personnes' },
      {
        type: 'p',
        text: "Un formulaire se teste avec des enquêteurs, puis avec des répondants. Les champs mal compris, les sauts de logique et les modalités oubliées apparaissent presque toujours dans les dix premiers entretiens.",
      },
      { type: 'h2', text: '2. Verrouiller les règles de saisie' },
      {
        type: 'p',
        text: "Contraintes de valeur, contrôles de cohérence, obligatoriété des champs : ce qui peut être vérifié automatiquement ne doit pas dépendre de la vigilance humaine.",
      },
      { type: 'h2', text: '3. Superviser en temps réel' },
      {
        type: 'p',
        text: "Un tableau de bord quotidien — nombre de soumissions, durée moyenne, taux de refus par localité — permet de corriger dès le deuxième jour plutôt qu’à la fin.",
      },
      { type: 'h2', text: '4. Documenter les décisions' },
      {
        type: 'p',
        text: "Chaque écart au protocole doit être noté. Un rapport de collecte clair vaut autant que la base de données elle-même.",
      },
      { type: 'h2', text: '5. Apurer avant d’analyser' },
      {
        type: 'p',
        text: "Doublons, valeurs extrêmes, incohérences de dates : l’apurement se planifie et se documente. Une base propre est la condition d’une analyse crédible.",
      },
      {
        type: 'quote',
        text: 'Dix pour cent du budget d’une enquête investis dans le contrôle qualité évitent souvent de refaire cinquante pour cent du travail.',
      },
    ],
  },
  {
    slug: 'suivi-evaluation',
    title: 'Suivi-évaluation : mesurer ce qui compte vraiment',
    excerpt:
      'Trop d’indicateurs tuent l’indicateur. Comment construire un système de suivi-évaluation utile, allégé et réellement approprié par les équipes.',
    category: 'Suivi-évaluation',
    date: '18 septembre 2025',
    dateISO: '2025-09-18',
    readingTime: '5 min',
    cover: 'rings',
    body: [
      {
        type: 'p',
        text: "Beaucoup de projets démarrent avec un cadre de résultats de trente pages et terminent avec un rapport de suivi de trois. Le problème n’est pas le manque de rigueur : c’est la distance entre le dispositif imaginé et la réalité des équipes qui doivent le faire vivre.",
      },
      { type: 'h2', text: 'Partir de l’usage, pas du cadre logique' },
      {
        type: 'p',
        text: "Un indicateur n’a de sens que s’il déclenche une action. Avant d’en ajouter un, demandez-vous : qui le lira ? quelle décision changera-t-il ? à quelle fréquence ? Les indicateurs qui ne répondent pas à ces questions peuvent rester dans l’annexe.",
      },
      { type: 'h2', text: 'Trois niveaux suffisent souvent' },
      {
        type: 'ul',
        items: [
          'Des indicateurs de suivi mensuels, peu nombreux et fiables, pour piloter.',
          'Des indicateurs de résultats trimestriels, reliés à vos hypothèses de changement.',
          'Des évaluations ponctuelles, externes ou mixtes, pour l’analyse d’impact.',
        ],
      },
      {
        type: 'quote',
        text: 'Un bon système de suivi-évaluation tient sur une page et vit dans une réunion. Un mauvais système tient dans un classeur et meurt dans une armoire.',
      },
      {
        type: 'p',
        text: "Nous concevons ces dispositifs avec les équipes, en partant de leurs outils existants — souvent Excel et un formulaire mobile — avant d’ajouter de la complexité. L’objectif final n’est pas la donnée pour la donnée, mais des interventions plus efficaces et des apprentissages réellement partagés.",
      },
    ],
  },
]
