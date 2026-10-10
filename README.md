# Women Beyond Summits — site vitrine

Site statique (HTML/CSS/JS, sans build) de l'asso de trail au féminin Women Beyond Summits.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil (one-page : asso, pour qui, sorties, nous rejoindre) |
| `sorties.js` | **Agenda** : la liste des sorties, seul fichier à toucher pour en annoncer une |
| `styles.css` | Styles et couleurs (identité tirée du dossard) |
| `main.js` | Menu mobile + affichage de l'agenda |
| `mentions-legales.html` | Mentions légales (champs en jaune à compléter) |
| `favicon.svg` | Icône edelweiss |

## Déploiement — Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → ce repo
2. Framework preset : **None** · Build command : *(vide)* · Output directory : `/`
3. Chaque push sur `main` redéploie le site automatiquement.

## Palette

| Nom | Hex |
|---|---|
| Vert forêt | `#17291B` |
| Crème | `#EFE9DE` |
| Terracotta | `#B05A3C` |
| Olive | `#6D6C4D` |
| Ocre | `#D29B2A` |
