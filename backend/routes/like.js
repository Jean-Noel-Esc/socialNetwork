const express = require('express');
const router = express.Router();

const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');
console.log("je suis route like");
//router.get('/',auth, postCtrl.getAllPost);
////router.post('/',postCtrl.createPost);
//router.get('/:id', postCtrl.getOnePost);
//router.put('/:id', postCtrl.updatePost);
//router.delete('/:id', postCtrl.destroyPost);
//router.post ('/:id/like',auth, postCtrl.likePost);

module.exports = router;