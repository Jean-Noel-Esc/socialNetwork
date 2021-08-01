const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');
console.log("je suis route comment");
router.get('/admin', commentCtrl.getAllCommentsToModerate);
router.get('/:id', commentCtrl.getAllComments);

router.post('/',commentCtrl.createComment);
//router.get('/:id', commentCtrl.getOneComment);
//router.put('/:id', commentCtrl.updateComment);
//router.delete('/:id', commentCtrl.destroyComment);
//router.post ('/:id/like',auth, commentCtrl.likeComment);

module.exports = router;