# Export automatique de l'archive vers Cloudflare

Le script (Feature AAR) peut envoyer chaque jour les enchères archivées vers un petit Worker Cloudflare qui les range dans un bucket R2, et les en relire pour reconstituer l'archive sur un autre navigateur. Tout tient dans les limites gratuites de Cloudflare pour un usage de 1 à 2 exports et 1 à 2 imports par jour.

## Mise en place (une seule fois)

1. Un compte Cloudflare, et R2 activé (menu **R2 Object Storage** ; Cloudflare peut demander un moyen de paiement, rien n'est facturé dans les limites gratuites).
2. Depuis ce dossier :
   ```sh
   npx wrangler r2 bucket create wmb-archive
   npx wrangler deploy
   npx wrangler secret put TOKEN     # saisir un long jeton aléatoire, à garder pour l'étape 3
   ```
   `wrangler deploy` affiche l'adresse du Worker (`https://wmb-archive.<votre-compte>.workers.dev`).
3. Dans le script, bouton 📦 → section « Export Cloudflare » : coller l'adresse et le jeton, cocher « Export automatique », choisir 24 h ou 12 h, « Enregistrer ». Le premier export (l'archive entière, en morceaux) part dans la minute qui suit, tant qu'un onglet wiki-masters.com est ouvert.

Le script déclare `@connect workers.dev` : avec un domaine personnalisé, ajoutez une ligne `// @connect votre-domaine` dans l'en-tête du script.

## Ce qui est stocké

Des morceaux `chunks/{date}-{n}.json.gz` de 10 000 enchères au plus (JSON compressé, au même format que l'export JSON). Chaque export n'envoie que les enchères nouvelles ou modifiées depuis le précédent ; l'import relit tous les morceaux et fusionne par identifiant (la version la plus complète d'une enchère l'emporte).

## Limites gratuites (pour mémoire)

| | Limite | Usage prévu |
|---|---|---|
| Worker : requêtes | 100 000 par jour | quelques dizaines |
| Worker : CPU | 10 ms par requête | le Worker ne décompresse ni n'analyse rien |
| Worker : corps de requête | 100 Mo | morceaux de ~3 Mo |
| R2 : stockage | 10 Go | environ 75 Mo par mois |
| R2 : écritures / lectures | 1 M / 10 M par mois | quelques centaines |
