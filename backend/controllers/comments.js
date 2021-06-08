const Comment = require('../models/comment');

const fs = require('fs');


exports.createComment = (req, res, next) => {
  const commentObject = JSON.parse(req.body.sauce);
  delete commentObject._id;
  const comment = new Comment({
    ...commentObject,
    //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    //likes: 0,
    //dislikes: 0,
    //usersLiked:[],
    //usersDisliked:[],
  });
  sauce.create()
    .then(() => res.status(201).json({ message: 'Comment enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneComment = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
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

exports.modifyComment = (req, res, next) => {
  const commentObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    if (req.file){ Comment.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      const filename = sauce.imageUrl.split("/image/")[1];fs.unlink("images/${filename}"),()=>{
         Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Comment modifié !'}))
    .catch(error => res.status(400).json({ error })); 
      }
    }
  )} else {
    Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Comment modifié !'}))
    .catch(error => res.status(400).json({ error })); 

  }
};

exports.deleteComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then(comment => {
    //const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Comment.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


exports.getAllComments = (req, res, next) => {
  Comment.find().then(
    (sauces) => {
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
