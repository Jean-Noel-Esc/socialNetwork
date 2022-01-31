const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

console.log("router post ok");

router.get('/', auth, postCtrl.getAllPosts); 
router.get('/admin', auth, postCtrl.getAllPostsToModerate);
router.post('/create',auth, multer, postCtrl.createPost);
router.get('/:id',auth, postCtrl.getOnePost);
router.put('/:id',auth, multer, postCtrl.updatePost);
router.delete('/:id',auth, postCtrl.destroyPost);
router.put('/admin/:id',auth, postCtrl.moderatePost); //route pour valider la moderation d'un post 

//router.post ('/:id/like',auth, postCtrl.likePost); en cours de dev 
module.exports = router;