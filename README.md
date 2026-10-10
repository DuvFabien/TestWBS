# Women Beyond Summits — site vitrine

Site statique (HTML/CSS/JS, sans build) de l'asso de trail au féminin Women Beyond Summits.

## Fichiers

| Fichier | Rôle |
|---|---|
| `public/index.html` | Page d'accueil (one-page : asso, pour qui, sorties, nous rejoindre) |
| `public/sorties.js` | **Agenda** : la liste des sorties, seul fichier à toucher pour en annoncer une |
| `public/styles.css` | Styles et couleurs (identité tirée du dossard) |
| `public/main.js` | Menu mobile + affichage de l'agenda |
| `public/mentions-legales.html` | Mentions légales (champs en jaune à compléter) |
| `public/favicon.svg` | Icône edelweiss |

## Déploiement — Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → ce repo
2. Framework preset : **None** · Build command : *(vide)* · Output directory : `public`
3. Chaque push sur `main` redéploie le site automatiquement.

## Palette

| Nom | Hex |
|---|---|
| Vert forêt | `#17291B` |
| Crème | `#EFE9DE` |
| Terracotta | `#B05A3C` |
| Olive | `#6D6C4D` |
| Ocre | `#D29B2A` |

### Variante Workers (parcours par défaut de Cloudflare)

Build command : *(vide)* · Deploy command : `npx wrangler deploy` — la config est dans `wrangler.jsonc`
(le nom du Worker doit être `testwbs`).
