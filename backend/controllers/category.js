

//const bcrypt = require('bcrypt');                                           // Importation du package de chiffrement bcrypt
const jwt = require('jsonwebtoken');                                        // Importation du package jsonwebtoken
const models = require('../models');                                     // Importation modèle User
const fs = require('fs');   



// creation d'une category 

exports.create = (req, res, next) => {
  console.log("debut fct create category");
    console.log(req.body);
    const newCategory = models.Category.create({
      name: req.body.name,

    })
    .then(newCategory => {
      console.log(newCategory);
      res.status(201).json({'category created id':newCategory.id});
    })
    .catch(_error => console.log("Bonjour")); 
};


// Recuperer toutes les categories
exports.findAll = (req, res) => {
  models.Category.findAll().then((categories) => {
    // Send all categories as response
    res.status(200).json(
      // status: true,
      categories);
  });
};

// Find a category by Id
exports.getOneCategory = (req, res) => {
  models.Category.findOne(req.params.id).then((category) => {
    res.status(200).json({data: category,
    });
  });
};


// suppresion d'une categorie

/*exports.delete = (req, res, next) => {
  console.log("debut fct create category");
 
    console.log(req.body);
    const newCategory = models.Category.destroy({
      name: req.body.name,

    })
    .then(newCategory => {
      console.log(newCategory);
      res.status(201).json({'category created id':newCategory.id});
    })
    .catch(_error => console.log("Bonjour"));
};*/


// Delete a category  by Id

exports.delete = (req, res) => {
  const id = req.params.categoryId;
  models.Category.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "Category deleted successfully with id = " + id
    });
  });
};

// Modifier une category

exports.update = (req, res) => {
  const id = req.params.categoryId;
  Category.update(
    {
      name: req.body.name,
    },
    { where: { id: req.params.categoryId } }
  ).then(() => {
    res.status(200).json({
        status: true,
        message: "Category updated successfully with id = " + id
    });
  });
};