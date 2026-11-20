# DataSahel — refonte React

Refonte du site [datasahel.org](https://datasahel.org) avec React, Vite et Tailwind CSS.
Le parti pris graphique s’appuie sur le concept de la marque : **la donnée au service du Sahel**.
Sable, terre cuite et bleu nuit, typographie éditoriale (Fraunces), motifs de grille et de motifs
bogolan, visualisations de données dessinées sur mesure.

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4** (tokens de design dans `src/index.css`)
- **React Router 7** (site multi-pages)
- **Framer Motion** (animations et révélations au scroll)
- **lucide-react** (icônes)

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # vérification TypeScript + build de production
npm run preview  # prévisualiser le build
```

Le build est généré dans `dist/`.

## Pages

| Route            | Contenu                                                            |
| ---------------- | ------------------------------------------------------------------ |
| `/`              | Accueil : hero, mission, expertises, objectifs, valeurs, méthode, publics, blog, CTA |
| `/a-propos`      | Histoire, fondateur, credo, mission, valeurs, engagements           |
| `/blog`          | Journal filtrable par catégorie                                     |
| `/blog/:slug`    | Article complet, partage, articles liés                             |
| `/contact`       | Coordonnées, carte stylisée, formulaire validé, FAQ                 |
| `*`              | Page 404                                                            |

## Structure

```
public/                 logo original, portrait du fondateur, favicon (issu du logo), sitemap, redirections
src/
  components/           Navbar, Footer, HeroVisual, cartes, formulaires, motifs…
  data/                 contenus (services, articles, coordonnées)
  lib/                  utilitaires
  pages/                vues du site
  index.css             thème Tailwind, typographie, motifs, animations
```

## Design system

- **Couleurs** : `sand` (fonds), `clay` (accent terre cuite), `navy` (textes et sections sombres),
  `ink` (texte principal).
- **Typographies** : Fraunces (titres), Plus Jakarta Sans (texte), IBM Plex Mono (labels et données).
- **Motifs** : pointillés de grille, arcs concentriques (soleil sahélien), bande bogolan.
- Accessibilité : contrastes WCAG AA vérifiés, navigation clavier, `prefers-reduced-motion`
  respecté, lien d’évitement et landmarks.

## Formulaire de contact

Le formulaire valide les champs côté client puis prépare un e-mail prérempli vers
`contact@datasahel.org` (via `mailto:`) : aucun backend n’est requis. Pour un envoi serveur,
brancher un service type Formspree, Resend ou une fonction serverless sur `ContactForm.tsx`.

## Déploiement

Site statique : `npm run build` puis publier `dist/`.

- **Netlify** : `public/_redirects` gère le routage SPA.
- **Vercel** : `vercel.json` contient la règle de réécriture.
- Penser à adapter `sitemap.xml` et les balises Open Graph à l’URL finale.

## Contenus

Les textes proviennent du site existant (accueil, à propos, contact) ; les articles du blog
reprennent les publications réelles et ajoutent deux fiches méthodes originales.
