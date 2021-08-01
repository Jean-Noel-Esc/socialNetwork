const models = require('../models');

const fs = require('fs');


exports.createComment = (req, res, next) => {
  models.Post.findOne({
    where : {id: req.body.postId}
  }).then(Post => {
    models.User.findOne({
      where : {id: req.body.userId}
    }).then( User => {  
      const newComment = models.Comment.create({
        text: req.body.text,
        status:0,
        userId: req.body.userId, // modif pour correspondre a l'id de l'user connecte donc a extraire du token
        postId: req.body.postId
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
    where : {postId: req.params.id}
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
/*
exports.modifyComment = (req, res, next) => {
  const commentObject = req.file ?

    Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Comment modifié !'}))
    .catch(error => res.status(400).json({ error })); 
};

exports.deleteComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then(comment => {
        Comment.destroy({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    };


exports.getAllComments = (req, res, next) => {
  Comment.findAll().then(
    (comments) => {
      res.status(200).json(comments);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
*/