const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

console.log("router comment ok");

router.get('/admin', auth, commentCtrl.getAllCommentsToModerate); // Recup ts les comments en attente de modération 
router.get('/:id', auth,  commentCtrl.getAllComments);
router.post('/', auth, commentCtrl.createComment);
router.delete('/:id',auth,  commentCtrl.destroyComment);
router.put('/admin/:id',auth, commentCtrl.moderateComment); // Valider la moderation d'un commentaire 

module.exports = router;