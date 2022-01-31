const models = require('../models');

const fs = require('fs');


exports.createComment = (req, res, next) => {
  console.log(req.body);
  models.Post.findOne({
    where : {id: req.body.postId}
  }).then(Post => {
    models.User.findOne({
      where : {id: req.body.userId}
    }).then( User => {  
      const newComment = models.Comment.create({
        text: req.body.text,
        status:0,
        UserId: req.body.userId, // modif pour correspondre a l'id de l'user connecté donc à extraire du token.
        PostId: req.body.postId
      })
      .then(newComment => {
        res.status(201).json({'comment created id':newComment.id});
      })
      .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(400).json({ message : "cet utilisateur est introuvable" }));  
  })
  .catch(error => res.status(400).json({ message: "Cet article n'existe pas !"}));
};

exports.getOneComment = (req, res, next) => {
  models.Comment.findOne({
    where : {id: req.params.id}
  }).then(
    (comment) => {
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        message : "ce commentaire est introuvable"
      });
    }
  );
};

exports.getAllComments = (req, res, next) => {
  models.Comment.findAll({
    where : {postId: req.params.id, status:1}
  }).then(
    (comment) => {
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        message : "Ces commentaires sont introuvables"
      });
    }
  );
};


exports.getAllCommentsToModerate = (req, res, next) => {
  models.Comment.findAll({
    where : {status: 0}
  }).then(
    (comment) => {
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        message : "Ces commentaires sont introuvables"
      });
    }
  );
};

exports.destroyComment = (req, res, next) => {
  models.Comment.findOne({ where : {id: req.params.id} })
    .then( comment => {
        models.Comment.destroy({ where : {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


exports.moderateComment = (req, res, next) => {
  models.Comment.findOne({ where : {id: req.params.id} })
  .then( comment => {
      models.Comment.update({status: 1}, { where : {id: req.params.id} }) 
        .then(() => res.status(200).json({ message: 'Ce Commentaire a été validé!'}))
        .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};









