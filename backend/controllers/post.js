const models = require('../models');  

exports.createPost = (req, res, next) => {
  //console.log(req.body);

  const newPost = models.Post.create({
    text: req.body.text,
    status:0,
    UserId: req.body.userId, // modif pour correspondre a l'id de l'user connecte donc a extraire du token
    CategoryId: req.body.categoryId
  })
  .then(newPost => {
    //console.log(newPost);
    res.status(201).json({'post created id':newPost.id});
  })
  .catch(error => res.status(500).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  models.Post.findOne({
    where : {id: req.params.id}
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
    models.Post.findOne({ where : {id: req.params.id} })
    .then(post => {
        models.Post.update({text: req.body.text},{ where : {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Ce post a été modifié !'}))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

};

exports.destroyPost = (req, res, next) => {
  models.Post.findOne({ where : {id: req.params.id} })
    .then(post => {
        models.Post.destroy({ where : {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  models.Post.findAll({ where : {status: 1}, include : models.User } )
  .then((posts) => {  
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

exports.getAllPostsToModerate = (req, res, next) => {
  models.Post.findAll({ where : {status: 0}, include : models.User } )
  .then((posts) => {  
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