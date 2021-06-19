const Post = require('../models/post');

const fs = require('fs');

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.sauce);
  delete postObject._id;
  const post = new Post({
    ...postObject,
    //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    //likes: 0,
    //dislikes: 0,
    //usersLiked:[],
    //usersDisliked:[],
  });
  post.create()
    .then(() => res.status(201).json({ message: 'Article enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.updatePost = (req, res, next) => {
  const postObject = req.file ?
    {
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    if (req.file){ Sauce.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      const filename = sauce.imageUrl.split("/image/")[1];fs.unlink("images/${filename}"),()=>{
         Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error })); 
      }
    }
  )} else {
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error })); 

  }
};

exports.destroyPost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  Post.find().then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
