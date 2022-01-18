const models = require('../models');  

exports.createPost = (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.file.filename);
  const newPost = models.Post.create({
    title: req.body.title,
    text: req.body.text,
    picture:`${req.protocol}://${req.get('host')}/images/`+req.file.filename,
    UserId: req.body.userId, // modif pour correspondre a l'id de l'user connecte donc a extraire du token
    //CategoryId: req.body.categoryId,
    status:0

  })
  .then(newPost => {
    console.log(newPost);
    res.status(201).json({'post created id':newPost.id});
  })
  .catch(error =>  res.status(500).json({ error }));
  console.log("elle est la l'erreur");
};

exports.getOnePost = (req, res, next) => {
  models.Post.findOne({
    where : {id: req.params.id},
    include : [models.Comment, models.User]
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
  console.log(req.body.text);
    models.Post.findOne({ where : {id: req.params.id} })
    .then(post => {
      if (req.file.filename) {

        models.Post.update({text: req.body.text , title: req.body.title, picture:`${req.protocol}://${req.get('host')}/images/`+req.file.filename, status: 0},{ where : {id: req.params.id} })
        .then(() => res.status(200).json({ message: 'Ce post a été modifié !'}))
        .catch(error => res.status(400).json({ error }));
      }
    else {
          models.Post.update({text: req.body.text , title: req.body.title, status: 0},{ where : {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Ce post a été modifié !'}))
          .catch(error => res.status(400).json({ error }));
        }
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

  models.Post.findAll({ where : {status: 1}, include : models.User, order:[["updatedAt", "DESC"]] } )
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

exports.moderatePost = (req, res, next) => {
  models.Post.findOne({ where : {id: req.params.id} })
  .then(post => {
      models.Post.update({status: 1}, { where : {id: req.params.id} }) 
        .then(() => res.status(200).json({ message: 'Ce post a été validé!'}))
        .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};