const bcrypt = require('bcrypt');                                           // Importation du package de chiffrement bcrypt
const jwt = require('jsonwebtoken');                                        // Importation du package jsonwebtoken
const models = require('../models');                                     // Importation modèle User
const fs = require('fs');   



// Inscription // Signup

exports.signup = (req, res, next) => {
  console.log("debut fct");
  bcrypt.hash(req.body.password, 10)                                        // On appelle la fonction de hachage, on créer un nouvel utilisateur, on le sauvegarde dans la BDD
  .then(hash => {
    console.log(hash);
    console.log(req.body);
    const newUser = models.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      role:0
    })
    .then(newUser => {
      console.log(newUser);
      res.status(201).json({
        userId: newUser.id,
        token: jwt.sign(
          { userId: newUser.id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '24h' }
        )
      });

    })
    .catch(_error => console.log("Bonjour"));
  })
  .catch(error => res.status(500).json({ error }));
};



// Connexion // Login

exports.login = (req, res, _next) => {
  models.User.findOne({ email: req.body.email })
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
            userId: user.id,
            token: jwt.sign(
              { userId: user.id },
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
//var models = require('./Model');
// verifier si l'utilisateur a le role admin voir condition role admin

exports.findAll = (req, res) => {
  console.log("je suis le findAll users");
  models.User.findAll().then(users => {
    res.status(200).json (users);  
  })
  .catch(error => res.status(400).json({ error }));
};

// Recup un seul user
exports.findById = (req, res) => {
  models.User.findOne( {where: {id:req.params.id}} ).then(user => {
      res.status(200).json (user);
  })
  .catch(error => res.status(400).json({ error }));
};

// Recup tous les nouveaux utilisateurs en attente de validation.
exports.getAllUsersToModerate = (req, res, next) => {
  models.User.findAll({
    where : {role: 0}
  }).then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        message : "Cet utilisateur est introuvable"
      });
    }
  );
};

// Fonction de validation d'un utilisateur dans le forum
exports.moderateUser = (req, res, next) => {
  models.User.findOne({ where : {id: req.params.id} })
  .then( user => {
      models.User.update({role: 1}, { where : {id: req.params.id} }) 
        .then(() => res.status(200).json({ message: 'Cet utilisateur a été validé!'}))
        .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

// Supprimer un utilisateur de la liste des users en attente de validation 
exports.deleteUser = (req, res, next) => {
  models.User.findOne({ where : {id: req.params.id} })
  .then( user => {
      models.User.destroy({ where : {id: req.params.id} }) 
        .then(() => res.status(200).json({ message: 'Cet utilisateur a été supprimé!'}))
        .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

// Modifier les infos d'un user par un user
// verif avec un find one si l'user existe
exports.update = (req, res) => {
  let newpass = req.body.newpassword;
  bcrypt.hash(newpass, 10)                                        // On appelle la fonction de hachage, on créer un nouvel utilisateur, on le sauvegarde dans la BDD
  .then(hash => {
    console.log(hash);
    const updatePassword = models.User.update({
      password: hash
    }, {where :{id:req.body.userid}}) //utiliser le token envoyé par le front a la place du req body user id
    .then(newPass => {
      console.log(newPass);
      res.status(201).json({ confirmation:'password modifié'});
    })
    .catch(error =>res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));   
};

// Modifier une photo


//avant de delete verifier par un find one si l'utilisateur existe 
//
// Supprimer un user par son id
exports.delete = (req, res) => {
  const id = req.body.userid;
  
  models.User.destroy({
      where: { id: id }
  }).then(() => {
    res.status(201).json({ confirmation:'compte supprimé'});
  })
  .catch(error =>res.status(500).json({ error }));
};  



