# socialNetwork
 
## Pour commencer
Download ou cloner le projet.

### Pré-requis
Il est nécessaire que certaines technologies soient installées sur votre machine si vous souhaitez lancer ce projet.

- Node.JS
- Vue CLI
- MySQL

### Installation

Dans le dossier frontend, comme dans le dossier backend, exécutez la commande:
 ``npm install``.

Ensuite :

- Créez une base de données MySQL .
- Importez le dump sql “db_groupamania_dump.sql” à la racine du dossier back end 
-Creer un fichier .env comprenant 4 variables,
(en remplaçant les valeurs par vos informations): 
DB_NAME="LE NOM DE VOTRE BDD"
DB_USER="VOTRE NOM D' UTILISATEUR MY SQL" 
DB_PASSWORD=" VOTRE MOT DE PASSE UTILISATEUR MYSQL" 
DB_HOST="L'ADRESSE DE VOTRE BDD"


## Démarrage

- Lancez le backend avec la commande ``node server``,
à l'aide de la ligne de commande placée à la racine du dossier backend
- Lancez le frontend avec la commande ``npm run serve``,
à l'aide de la ligne de commande placée à la racine du dossier frontend.

## Précisions

Les identifiants :
Pour accéder au site avec un compte admin utilisez ces identifiants: <br>
(Vous avez accès au dashboard admin depuis lequel vous pouvez modérer toutes publications avant qu’elles ne paraissent ainsi que les nouveaux utilisateurs)<br>
mail : admin@gmail.com <br>
mdp : superadmin1234. <br>

Pour accéder au site en tant qu'utilisateur 
(Pouvant consulter, publier, commenter, modifier ses publications et effacer son profil):<br>
mail : vbuisson@gmail.com<br>
mdp : victor1234.
