const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');
console.log("je suis route post");
router.get('/', postCtrl.getAllPosts); // delete : auth pour test
router.get('/admin', postCtrl.getAllPostsToModerate);
router.post('/',postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.destroyPost);
//router.post ('/:id/like',auth, postCtrl.likePost);

module.exports = router;