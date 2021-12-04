const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');
console.log("je suis route user");
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/findall', auth, userCtrl.findAll);
router.get('/findalluserstomoderate', auth, userCtrl.getAllUsersToModerate);
router.get('/:id',auth , userCtrl.findById);
router.put('/update', auth, userCtrl.update);
router.put('/updateroleuser/:id',auth, userCtrl.moderateUser);
//router.delete('/delete' ,userCtrl.delete );
router.delete('/deleteuser/:id' , auth, userCtrl.deleteUser );
module.exports = router;