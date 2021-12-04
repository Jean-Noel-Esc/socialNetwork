const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

//const multer = require('../middleware/multer-config');

console.log("je suis route comment");


router.get('/admin', auth, commentCtrl.getAllCommentsToModerate);
router.get('/:id', auth,  commentCtrl.getAllComments);
router.post('/', auth, commentCtrl.createComment);
router.delete('/:id',auth,  commentCtrl.destroyComment);
router.put('/admin/:id',auth, commentCtrl.moderateComment); //route pour valider la moderation d'un commentaire 



//router.get('/:id', commentCtrl.getOneComment);
//router.put('/:id', commentCtrl.updateComment);
//router.post ('/:id/like',auth, commentCtrl.likeComment);

module.exports = router;