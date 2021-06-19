const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/',auth, postCtrl.getAllPost);
router.post('/',auth, multer, postCtrl.createPost);
router.get('/:id',auth, postCtrl.getOnePost);
router.put('/:id',auth, multer, postCtrl.updatePost);
router.delete('/:id',auth, postCtrl.destroyPost);
//router.post ('/:id/like',auth, saucesCtrl.likePost);

module.exports = router;