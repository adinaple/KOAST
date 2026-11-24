# KOAST
Site web de services en cybersécurité — React 19 + Vite + Tailwind CSS 4 + React Router + Framer Motion.

Le site reproduit la maquette validée : accueil, 4 pages piliers, 12 pages d'expertise, 6 pages secteurs,
Références, À propos, Ressources (Cyber Insights), Contact, mentions légales et politique de confidentialité.
Charte appliquée : Montserrat 600 / Josefin Sans 400, #08112C, #FFFFFF, #E59F4A, dégradé #D6A86B, logo officiel.

---

## 1. Lancer le site en local

Prérequis : **Node.js 20.19+ ou 22.12+** (exigé par Vite 8). Vérifier avec `node -v`.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:5173. Les modifications s'affichent en direct.

### Tester le formulaire en local (facultatif)
Le formulaire envoie les demandes à `public/api/contact.php`. Si PHP est installé sur votre machine :

```bash
# terminal 1
npm run php      # lance PHP sur http://localhost:8000
# terminal 2
npm run dev      # Vite redirige /api vers PHP
```

En local, la fonction `mail()` n'envoie généralement rien : le vrai test se fait une fois en ligne sur Hostinger.

---

## 2. Où modifier quoi

| Fichier | Contenu |
|---|---|
| `src/data/site.js` | Coordonnées (téléphone, e-mail, WhatsApp, adresse), chiffres clés `[XX]`, besoins, réalisations, articles |
| `src/data/expertises.js` | Les 4 piliers et les 12 expertises (textes, prestations, méthodes) |
| `src/data/secteurs.js` | Les 6 secteurs |
| `src/index.css` | Couleurs et polices de la charte (`@theme`) |
| `public/images/` | Visuels (remplaçables par vos photos, même nom de fichier) |
| `public/api/contact.php` | Adresses e-mail de réception du formulaire |
| `index.html` | Titre, description et balise canonical du site |

Les pages sont dans `src/pages/`, les éléments communs (en-tête, méga-menu, pied de page, bloc projet + formulaire) dans `src/components/`.

---

## 3. Avant la mise en ligne

- [ ] Remplacer `VOTRE-DOMAINE` dans : `index.html`, `public/robots.txt`, `public/api/contact.php`, `src/data/site.js`
- [ ] Renseigner téléphone, WhatsApp (`https://wa.me/225…`) et adresse dans `src/data/site.js`
- [ ] Remplacer les chiffres `[XX]` et compléter les réalisations `[À compléter]`
- [ ] Créer dans hPanel > **Emails** les boîtes `contact@…` (réception) et `site@…` (expéditeur du formulaire)
- [ ] Compléter les mentions légales et la politique de confidentialité (`src/pages/Legal.jsx`)

---

## 4. Construire la version de production

```bash
npm run build     # crée le dossier dist/
npm run preview   # vérifie le résultat sur http://localhost:4173
```

Le dossier `dist/` contient tout le site : `index.html`, `assets/`, `images/`, `api/contact.php` et `.htaccess`.

---

## 5. Déployer sur Hostinger

### Option A — Hébergement web classique (recommandée : le formulaire PHP fonctionne)
1. `npm run build`
2. hPanel > **Sites web** > votre domaine > **Gestionnaire de fichiers** > dossier `public_html`
3. Supprimer le fichier d'accueil par défaut (`default.php` ou `index.php`) s'il existe
4. Envoyer **le contenu** de `dist/` (pas le dossier lui-même) dans `public_html`.
   Astuce : zipper le contenu de `dist/`, l'envoyer, puis « Extraire » dans `public_html`.
   Vérifier que le fichier caché `.htaccess` est bien présent (il gère les URL du type `/expertises/...`).
5. hPanel > **Sécurité** > **SSL** : installer le certificat gratuit, puis tester `https://votre-domaine`
6. Tester une page profonde (ex. `/secteurs/sante`) en la rechargeant, puis envoyer une demande via le formulaire.

Mises à jour : refaire `npm run build` et remplacer les fichiers de `public_html` (FTP avec FileZilla possible :
hPanel > Fichiers > Comptes FTP).

### Option B — Application Node.js depuis GitHub (plans Business / Cloud)
hPanel > Sites web > Ajouter un site web > **Node.js Web App** > connecter le dépôt GitHub.
Hostinger détecte Vite, lance `npm run build` et publie `dist/` ; chaque `git push` redéploie le site.
Attention : dans ce mode le site est servi en statique, le script PHP du formulaire ne s'exécute pas ;
il faudrait alors brancher le formulaire sur un service externe (ou garder l'option A).

---

## 6. Structure

```
koast-site/
├── index.html
├── public/            fichiers copiés tels quels (images, logos, .htaccess, api/contact.php)
└── src/
    ├── App.jsx        routes
    ├── index.css      charte (Tailwind @theme)
    ├── data/          contenus
    ├── components/    Header (méga-menu), Footer, BlocProjet (formulaire), Hero, icônes…
    └── pages/         Accueil, Expertises, Pilier, Expertise, Secteurs, Secteur, Références, À propos, Ressources, Contact
```
