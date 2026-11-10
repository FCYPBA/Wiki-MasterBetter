<div align="center" id="top">
  <img src="./wikimasterbetter-logo.svg" alt="Wiki-MasterBetter" width="120" height="120" />
  <h2>Wiki-MasterBetter</h2>
  <p>Une collection de fonctionnalités et d'ajustements pour améliorer l'expérience utilisateur sur WikiMasters</p>
</div>

<div align="center">
  <a href="#-description">Description</a> &#xa0; | &#xa0;
  <a href="#-installation">Installation</a> &#xa0; | &#xa0;
  <a href="#-fonctionnalités">Fonctionnalités</a> &#xa0; | &#xa0;
  <a href="#-utilisation">Utilisation</a>
</div>&#xa0;

<div align="center">
  <a href="https://github.com/QuentindiMeo/Wiki-MasterBetter/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/QuentindiMeo/Wiki-MasterBetter?style=flat&color=%23ffe937&logo=github" /></a>
  <a href="https://github.com/QuentindiMeo/Wiki-MasterBetter/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/QuentindiMeo/Wiki-MasterBetter?color=forestgreen&logo=target" /></a>
</div>

&#xa0;

<div align="center">
  <b>Si ce script vous est utile, laissez une ⭐ sur le repo — ça aide à le faire connaître !</b>
  <br />
  <a href="https://ko-fi.com/quentindimeo">
    <img alt="ko-fi tip button" src="https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_blue.png" height="32px" />
  </a>
</div>&#xa0;

## 📝 Description

Un script local Tampermonkey qui ajoute une couche d'ajustements de confort, de raccourcis et de petites automatisations sur [wiki-masters.com](https://www.wiki-masters.com) — navbar repliable, notifications plus intelligentes, pulls pilotables au clavier, suivi des prix du marché, et bien plus.

## 🚀 Installation

1. Installez [Tampermonkey](https://www.tampermonkey.net/) (ou un gestionnaire de scripts local compatible) dans votre navigateur
2. Ouvrez le tableau de bord de Tampermonkey et créez un nouveau script
3. Collez le contenu de [`wiki-masterbetter.me.js`](./wiki-masterbetter.me.js) et enregistrez
4. Rendez-vous sur [wiki-masters.com](https://www.wiki-masters.com) — le script s'active automatiquement

## 🎯 Fonctionnalités

Je ne liste que celles qui change quelque chose de significatif pour l'utilisateur.

### 🔔 Barre de navigation & Notifications

- **Barre de navigation repliable** : Se replie en icônes par défaut, se déplie en douceur au survol — ou épinglez-la grâce au bouton en haut de la barre
- **Panneau de configuration** : Un bouton à roue crantée, à côté de celui d'épinglage, ouvre une modale pour activer/désactiver individuellement chaque fonctionnalité du script ; les choix sont sauvegardés dans votre cache de navigateur
- **Tutoriels intégrés** : Un bouton « ❓ » juste à côté ouvre une modale avec de courtes explications pour les fonctionnalités les moins évidentes du script
- **Liste de notifications agrandie** : Plus de place pour parcourir les notifications
- **Scroll automatique vers la dernière non lue** : Ouvrir le panneau de notifications défile directement jusqu'à la dernière notification non lue
- **Suivi de lecture intelligent** : Cliquer sur une notification marque aussi toutes celles plus anciennes comme lues, met à jour le compteur
- **Filtrer par type** : Des boutons 💰 🛒 🔨 ⭐ en haut du panneau permettent de filtrer les notifications
- **Suffixe de titre d'onglet** : Le titre de l'onglet du navigateur reflète le contenu de la page visitée

### 🎁 Paquets

- **Paquets pilotables au clavier** : Les flèches naviguent entre les cartes tirées (gauche-droite, haut-bas pour aller au début/à la fin), Espace ouvre/ferme le paquet, E ouvre la modale de carte, V ouvre la modale de vente, W ouvre la page Wikipédia de la carte
- **Notifications de pile** : Une notification push prévient quand les paquets s'accumulent ; un interrupteur 🔔/🔕 permet de l'activer (désactivée par défaut)

### 📦 Collection

- **Actions rapides** : Un bouton pour ouvrir directement la modale d'enchère sur chaque carte
- **Tout sélectionner sauf étiquetées** : Sélectionne en un clic toutes les cartes non étiquetées de votre écran de collection
- **Estimations mémorisées** : Les estimations du marché dans la modale de vente sont mémorisées et affichées à côté de la rareté dans votre collection
- **Évaluation en masse** : Deux boutons permettent d'agir sur les cartes de la page via la modale d'estimation — évaluer les seules cartes sans estimation, réévaluer toute la page ; un bouton « Arrêter la reconnaissance » permet d'interrompre une évaluation en cours
- **Estimation en masse sur une collection** : Le bouton rouge « Estimation complète » répète l'évaluation des cartes sans estimation sur chaque page de la collection, en changeant de page automatiquement ; son libellé indique une durée minimale en minutes, d'après le nombre de pages restantes
  - ⚠️ Pour ces deux évaluations en masse, gardez l'onglet actif et la fenêtre non réduite pendant toute la durée : en arrière-plan, le navigateur ralentit les temporisations dont elles dépendent, ce qui les rend peu fiables
- **Tri par prix décroissant** : Un bouton permet de trier les cartes de la page par prix décroissant, pour repérer rapidement les plus chères
- **Top 40 des estimations** : Un bouton « Top 40 » à droite du titre ouvre en fondu une modale listant les 40 plus grosses estimations mémorisées en trois colonnes, la première mise en avant par une lueur dorée pulsante ; un ✕ supprime une estimation du cache
- **Halo sur les cartes sans estimation** : Un interrupteur « Sans estimation » après le bouton « Top 40 » entoure d'un halo rouge clair les cartes de la page sans estimation (un « ? » compte comme une estimation) ; son état est mémorisé
- **Rechargement automatique en cas d'échec** : Si la page affiche un message rouge « a échoué », elle se recharge d'elle-même peu après
- **Liste d'étiquettes lisible** : Plus de place pour afficher les étiquettes, et la liste se trie par ordre décroissant dès que les compteurs sont chargés ; à l'ouverture du filtre, le clavier navigue directement dans la liste (flèches, Début/Fin, saisie des premières lettres d'un nom)
- **Copier le nom d'une carte** : Un bouton 📋 à côté du nom, dans la modale de carte comme dans la modale d'enchère
- **Aller directement à une page** : Une fois le catalogue chargé, cliquer sur l'indicateur « Page X / Y » le remplace par un champ numérique ; Entrée mène à la page saisie en enchaînant les boutons précédent/suivant du site, Échap annule
- **Effacer la recherche** : Un bouton ✕ dans le champ de recherche de la collection vide son contenu
- **Modale d'étiquetage en masse retravaillée** : La modale d'application/retrait d'étiquette est plus large et affiche ses étiquettes en grille au lieu d'une colonne étroite ; la modale de retrait trie les filtres par ordre décroissant
- **Gestion des étiquettes plus spacieuse** : La modale « Gérer les étiquettes » occupe jusqu'à 90 % de la largeur de l'écran, pour lire et modifier sans peine les noms d'étiquettes très longs
- **Étiquetage en masse par termes de recherche** : Dans « Gérer les étiquettes », chaque étiquette accepte des termes de recherche séparés par des virgules (exportables/importables en JSON). Le bouton « Étiquetage en masse 🏷️ » de la collection ouvre une modale pour choisir les étiquettes à traiter et leur ordre (par glisser-déposer, c'est lui qui départage une carte correspondant à plusieurs étiquettes), puis recherche chaque terme et étiquette les cartes qui n'en ont pas encore ; un panneau récapitulatif liste à la fin les cartes étiquetées
  - ⚠️ Comme pour l'évaluation en masse, gardez l'onglet actif et la fenêtre non réduite pendant toute l'opération
- **Panneau « Estimations »** : Sur `/collection`, un onglet collé au menu de gauche ouvre un panneau coulissant qui liste toutes les cartes estimées, de la plus chère à la moins chère (100 par page), avec leur rareté colorée. Des boutons L, UR, SR, R, PC, C filtrent par rareté, la loupe d'une ligne lance la recherche de la carte dans la collection et la corbeille la retire du cache (avec un bouton « Annuler »), et les boutons ⬇ / ⬆ exportent et importent toutes vos estimations (avec leurs raretés et étiquettes) en CSV pour les retrouver sur un autre navigateur ou ordinateur sans tout recalculer. Une barre d'étiquettes permet d'exclure les cartes portant certaines étiquettes (pour repérer ce qui peut être vendu sans toucher aux catégories à garder) ou de ne garder que celles-ci, avec « Sans étiquette » en plus ; le choix est mémorisé, et les étiquettes d'une carte sont connues dès qu'elle a été affichée dans la collection
- **Copier une carte en image** : Au survol d'une carte, un bouton 📷 la copie dans le presse-papiers sous forme d'image (illustration, texte, statistiques), prête à être collée dans une conversation

### 🔄 Échanges

- **Historique en deux colonnes** : L'onglet « Historique » s'affiche en deux colonnes flexibles qui s'adaptent à la hauteur de chaque échange, plutôt qu'une seule liste
- **Filtrer par partenaire** : Un champ de recherche au-dessus de l'historique filtre les échanges par nom de partenaire
- **Total estimé d'un échange reçu** : Dans l'onglet « Reçues », chaque côté d'un échange affiche la somme des estimations de ses cartes, leur nombre et combien n'ont pas d'estimation

### 💰 Marché & Enchères

- **Onglet « Mes enchères » par défaut** : L'arrivée ouvre automatiquement cet onglet
- **Regroupement des enchères** : Bascule pour séparer « Mes enchères » en groupes « Surenchéri » / « Vous menez »
- **Alertes d'expiration** : Une notification push prévient qu'il reste 30 secondes sur une enchère ; un interrupteur 🔔/🔕 permet de l'activer (désactivée par défaut, par onglet)
- **Lueur rouge en fin d'enchère** : Le décompte « Se termine dans... » se met à luire en rouge quand il reste moins de 10 secondes
- **Bouton de mise en rouge si vous menez** : Le bouton pour enchérir devient rouge clair quand vous êtes déjà le meilleur enchérisseur
- **Rechargement automatique si enchère introuvable** : Si la page affiche « Enchère introuvable », elle se recharge d'elle-même peu après
- **Suivi des prix de vente** : Enregistre le prix de vente des enchères vendues mais non possédées par carte, puis signale le prix courant lors des visites suivantes comme **_légendaire_**, **_extraordinaire_**, **excellent**, **agréable**, **tolérable**, ou **_excessif_** par à ceux que vous avez observés. Toutes les ventes sont conservées, et la référence est la moyenne des prix d'une carte sans le plus haut ni le plus bas (moyenne simple s'il y en a moins de 3)
  - **Sur vos propres ventes**, le tag juge la vente plutôt que l'achat : **excellente**, **agréable**, **tolérable** ou **décevante**
  - **Sur vos propres enchères remportées**, le tag affiche aussi le prix moyen de référence utilisé pour le calcul
  - Un indice de fiabilité accompagne le tag
  - Les prix enregistrés sont listés dans une grille sur votre propre profil
  - Un bouton Exporter/Importer permet de télécharger ce cache (prix de vente, estimations, raretés, étiquettes et joueurs suivis) en fichier CSV, puis de le recharger sur un autre navigateur ou appareil
- **Mes plus grosses ventes et achats** : Les 40 plus grosses ventes et les 40 plus gros achats sont mémorisés (depuis les pages d'enchère et les onglets « Historique » et « Gagnées » du marché) ; deux boutons sur votre profil les listent dans une modale, la première mise en avant par une lueur dorée, un ✕ retire une entrée du cache
- **Cartes possédées estompées** : Sur le marché et dans la collection globale, les cartes que vous possédez déjà s'affichent en faible visibilité pour ne pas distraire le regard ; elles reprennent leur pleine opacité au survol. Sur le marché, cela ne concerne que l'onglet « Parcourir », et un interrupteur au-dessus de la liste permet de l'activer ou non
- **Archive des enchères en direct** : Un bouton 📦 en haut du menu de gauche ouvre une modale où saisir des termes de recherche (ex. : avion, bateau). Un bandeau « Légendaires » permet d'archiver aussi toutes les enchères de cartes Légendaires, sans aucun terme de recherche. Toutes les 5 minutes, les enchères correspondantes sont archivées dans le navigateur (IndexedDB, un identifiant = une seule entrée), puis, une fois terminées, leur résultat est relevé chaque minute, dans une boucle indépendante de la recherche (une recherche lente ou refusée par le site ne retarde plus les résultats) : prix final, nombre d'enchères et d'enchérisseurs différents, avec le nom, la rareté et les caractéristiques de la carte, le vendeur, le prix de départ, le gagnant et la liste détaillée des mises (montant, enchérisseur, heure), pour étudier les enchères de dernière minute ou les habitudes des enchérisseurs. Les anciennes entrées sont complétées en arrière-plan. La modale affiche l'avancement et l'espace utilisé, et permet de lancer un passage immédiat, d'exporter l'archive en CSV (une ligne par enchère, pour un tableur) ou en JSON (tous les champs), d'importer un export JSON (pour transférer l'archive d'un navigateur ou d'un ordinateur à l'autre : fusion par enchère, la version la plus complète est conservée, rien n'est supprimé), de compacter les enchères de plus de 30 jours (supprime le détail des mises, garde prix et compteurs) ou de la vider
  - ⚠️ Un onglet wiki-masters.com doit rester ouvert (un seul onglet collecte à la fois) ; rien n'est collecté navigateur fermé, ni si le navigateur met l'onglet en veille pour économiser la mémoire
  - Les requêtes sont espacées et la collecte se met en pause quand le site limite le débit (limite de requêtes)
  - Vider les données du site dans le navigateur supprime l'archive : pensez à l'exporter (et à l'importer sur votre autre navigateur pour en retrouver l'historique)
- **Historique des prix de la carte sur sa page d'enchère** : Sur la page d'une enchère, un petit graphique trace, d'après l'archive, les prix des ventes précédentes de la même carte (même rareté) : un point par vente, une ligne pointillée pour la médiane et, dès 4 ventes, une courbe de tendance lissée ; survoler un point donne sa date et son prix. Sous le graphique : nombre de ventes, part des enchères vendues, médiane et fourchette de prix. Rien ne s'affiche pour une carte jamais archivée.
- **Récapitulatif de la page de collection** : Sur `/collection`, une barre en haut de la page résume les cartes affichées : nombre de cartes, valeur estimée totale et, par rareté (L, UR, SR, R, PC, C), nombre de cartes et valeur. Seules les estimations connues comptent, les cartes sans estimation sont signalées à part. Un bouton 📷 copie le récapitulatif et les cartes comme image (pour la partager), une case « Valeurs » permet d'exclure les valeurs estimées de l'image (le nombre de cartes par rareté reste), un bouton 💾 la télécharge en PNG : un seul clic, sans capture d'écran
  - Le fichier est nommé d'après l'étiquette choisie, la recherche, le numéro de page et la date (ex. : `Aero - Almanach_avion_page-1_2026-11-07.png`)
  - Seule la page affichée est comptée, pas toute la collection
- **Liste des enchères : mises de départ et médiane** : Sur `/marketplace`, à côté du titre (onglet « Parcourir » uniquement), des interrupteurs au style du site permettent de masquer les enchères qui ont déjà reçu des mises, d'atténuer les cartes que vous possédez, ou de les masquer. Ils suivent les cartes qui s'ajoutent avec « Charger la suite ». Chaque carte affiche aussi une ligne « médiane … · n ventes » : le prix médian des ventes archivées de cette carte, à rareté égale (rien si elle n'a jamais été vendue dans votre archive). Pas affiché sur les onglets « Historique » et « Gagnées »
- **Suivi d'enchères** : Sur la page d'une enchère, l'étoile ☆ à gauche du nom de la carte la met en suivi (★ quand elle est suivie). Sur le marché, un onglet « Suivi » s'ajoute à la suite des onglets existants et liste les enchères suivies : rareté, nom, mise actuelle (ou prix final une fois vendue) et compte à rebours en direct, la plus proche de sa fin en tête. Un clic sur une ligne ouvre l'enchère dans un nouvel onglet du navigateur
  - Le nombre d'enchères en cours s'affiche dans l'onglet, qui passe en orange quand l'une se termine dans moins de 10 minutes
  - Les onglets du site ne sont pas modifiés : « Suivi » masque simplement leur contenu, et un clic sur l'un d'eux le fait réapparaître tel quel
  - Les données sont relevées à l'ouverture de l'onglet (puis toutes les 2 minutes tant qu'il reste affiché) ou avec « Actualiser », jamais en arrière-plan
  - « Retirer les terminées » nettoie la liste ; les enchères finies depuis plus de 14 jours sont retirées automatiquement
- **Heure de fin estimée** : Quand il reste plus d'une heure à une enchère, une heure de fin estimée (« ≈ 18:42 », « ≈ demain 02:15 »…) s'affiche sous sa durée dans la liste du marché, et à côté du compte à rebours sur la page de l'enchère
  - Le site ne donnant la durée restante qu'à la minute près, c'est une estimation, qui reste stable pendant que le compte à rebours avance
  - Elle disparaît quand il reste moins d'une heure ou une fois l'enchère terminée ; le survol donne la date complète

### 📊 Tableau de bord des enchères

Un outil à part (hors userscript) pour exploiter l'archive des enchères : [`dashboard/auction-dashboard.html`](dashboard/auction-dashboard.html). Une seule page HTML, sans serveur ni dépendance : ouvrez-la dans le navigateur et déposez-y le JSON exporté depuis la modale 📦. Tout est calculé localement (rien n'est envoyé), et le dernier fichier chargé est mémorisé dans le navigateur. Les exports contiennent des pseudos : ne les publiez pas.

- **Filtres communs** : période (tout, 24 h, 7 j, 30 j), termes de recherche (avec une entrée « Any » pour les enchères sans terme, comme les Légendaires archivées sans recherche), rareté (aux couleurs du site ; « Any » = toutes, puis un clic sur une rareté ne garde qu'elle et les clics suivants en ajoutent), shiny, pas des tendances (heure ou jour), et seuils des « bonnes affaires » réglables
- **Acheter moins cher** : meilleures affaires passées (vente à 50 % ou moins de la médiane des autres ventes de la même carte), répartition des prix par rapport à la médiane, part de bonnes affaires selon le nombre d'enchérisseurs et l'heure de fin, moment de la dernière mise, et liste des enchères en cours dont le prix de départ est bas
- **Vendre mieux** : taux de vente selon le prix de départ, la durée et l'heure de fin, et valeur attendue par rareté (taux de vente × prix médian)
- **Tendances** : volume (vendues / invendues), taux de vente et prix médian par rareté dans le temps
- **Cartes** : tableau triable et filtrable (ventes, taux de vente, prix médian, valeur attendue, tendance) ; un clic ouvre l'historique de la carte, avec le nuage des prix de vente, une courbe de tendance lissée, la médiane et les dernières enchères
- Une carte qui existe en plusieurs raretés (par exemple SR et UR) a une ligne par rareté, avec ses propres prix, médianes et historique
- Chaque graphique a une vue « Tableau », avec infobulles au survol et thème clair/sombre
- Limite : pour une enchère en cours, seul le prix de départ est archivé, pas la mise actuelle

### 📦 Catalogue

- **Nettoyage de la liste de souhaits** : Quand le filtre « uniquement les cartes de ma liste de souhaits » est actif, un bouton retire d'un coup toutes celles que vous possédez déjà

### 👤 Profil & Amis

- **Grille d'amis en 3 colonnes** : La liste d'amis est réorganisée en grille compacte, avec des boutons d'action réduits à leur icône
- **Description des joueurs** : Un bouton « Description » sur le profil des autres joueurs permet de noter en quelques mots (max. 128 caractères) ; la description s'affiche à côté de leur pseudo sur leur profil et sur la page des amis
- **Accès rapide aux profils depuis la liste de souhaits** : Sur la collection globale, cliquer sur le nom d'un ami propriétaire d'une carte ouvre son profil
- **Suivre des joueurs** : Un bouton « Suivre » en forme d'œil sur le profil des joueurs. Un petit œil rouge s'affiche alors à côté de son pseudo sur les pages d'enchère, qu'il soit vendeur ou enchérisseur ; la liste des joueurs suivis s'affiche sur votre profil, avec un ✕ pour ne plus suivre
- **Membres de la guilde repérés par un bouclier** : En ouvrant l'onglet « Membres » de la page Guilde, le script charge tout seul la liste complète (« Afficher plus ») et la mémorise, en retirant ceux qui sont partis. Un petit bouclier bleu s'affiche ensuite à côté du pseudo des membres partout où il apparaît seul (profils, historique des échanges, pages d'enchère, collection globale…) ; le survoler affiche la description que vous lui avez donnée. Dans la liste des membres, la description remplace le bouclier, sous le pseudo

### 🏆 Succès

- **Tout réclamer** : Un bouton additionne toutes les récompenses non réclamées et les réclame en une fois
- **Barres de progression repositionnées** : Sur `/achievements`, les barres de progression des succès sont placées en bas à droite de leur carte, sur la moitié de sa largeur

## 📖 Utilisation

1. Naviguez sur [wiki-masters.com](https://www.wiki-masters.com) comme d'habitude — chaque ajustement s'applique automatiquement
2. La permission de notifications peut être demandée pour les fonctionnalités de notification push (paquets qui s'accumulent, enchère bientôt expirée)
3. Certaines données (préférence de navbar repliée, regroupement des enchères, suivi des prix de vente) persistent d'une visite à l'autre via le stockage de Tampermonkey, `localStorage` et, pour l'archive des enchères, `IndexedDB`
4. Remplacez la valeur de `MY_USERNAME` dans le script par votre pseudo WikiMasters pour activer toutes les fonctionnalités liées aux ventes

---

<br />

[Retour en haut](#top)
