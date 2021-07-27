const Comment = require('../models/comment');

const fs = require('fs');


exports.createComment = (req, res, next) => {
  const commentObject = JSON.parse(req.body.comment);
  delete commentObject._id;
  const comment = new Comment({
    ...commentObject,
  });
  comment.create()
    .then(() => res.status(201).json({ message: 'Comment enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneComment = (req, res, next) => {
  Comment.findOne({
    _id: req.params.id
  }).then(
    (comment) => {
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
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