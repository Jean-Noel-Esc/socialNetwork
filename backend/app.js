const express = require('express');                                         // Importation du framework : création et gestion du serveur
const bodyParser = require('body-parser');                                  // Importation du package body-parser : extraction des objets JSON
const path = require('path');                                               // Importation du package mongoose-path :
//const helmet = require('helmet');                                         // Importation du package helmet :
//const cors = require('cors');

const postRoutes = require("./routes/post");                              // Importation des routes messages
const commentRoutes = require("./routes/comment");                       // Importation des routes comments
const userRoutes = require("./routes/user");                              // Importation des routes user
//const categoryRoutes = require("./routes/category");                              // Importation des routes category
//const likeRoutes = require("./routes/like");   


const app = express();                                                     // Application




// CORS : traitement des erreurs (middleware général, ajout des headers)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();                                                                // Appel de next pour exécuter les autres fonctions
});


app.use(bodyParser.json());                                                // Définition de la fonction json comme middleware global
app.use(bodyParser.urlencoded({extended: true}));                          // content-type: application/x-www-form-urlencoded
app.use('/images', express.static(path.join(__dirname, 'images')));      // Gestion de la source de manière statique grâce à Express
//app.use(helmet());                                                       // Activation de la protection Helmet : équivaut à 11 protections (req http)
app.use("/api/post", postRoutes);                                        // L'application utilise le endpoint /api/messages pour les routes messageRoutes
app.use("/api/comment", commentRoutes);
console.log("i'm in");                                 // L'application utilise le endpoint /api/comments pour les routes commentRoutes
app.use("/api/auth", userRoutes);                                        // L'application utilise le endpoint /api/auth pour les routes userRoutes
//app.use("/api/category", categoryRoutes);
//app.use("/api/like", likeRoutes);

module.exports = app;                                                      // Exportation de l\'app : utilisation depuis le serveur Node
