const bcrypt = require('bcrypt');                                           // Importation du package de chiffrement bcrypt
const jwt = require('jsonwebtoken');                                        // Importation du package jsonwebtoken
const User = require('../models/user');                                     // Importation modèle User
const fs = require('fs');   


// Inscription // Signup
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)                                        // On appelle la fonction de hachage, on créer un nouvel utilisateur, on le sauvegarde dans la BDD
  .then(hash => {
    const user = new User({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash,
      isActive: true,
    });
    User.create(user, (err, data) => {
      if(err) {
        return res.status(400).json({ message: 'Impossible de créer l\'utilisateur' });
      } 
      res.send(data);
    })
  })
  .catch(error => res.status(500).json({ error }));
};

// Connexion // Login

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Recupere tous les users
//on importe le modèle
var Model = require('./Model');
//recherche de tous les utilisateurs
Model.User.findAll().then(users => {
//on récupère ici un tableau "users" contenant une liste d'utilisateurs
  console.log(users);
  }).catch(function (e) {
    //gestion erreur
  console.log(e);
});




// Recup un seul user

// Modifier les infos d'un user

// Modifier une photo

// Supprimer un user  



