const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');
console.log("je suis route user");
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/findall', userCtrl.findAll);
router.get('/findalluserstomoderate', userCtrl.getAllUsersToModerate);
router.get('/:id', userCtrl.findById);
router.put('/update', userCtrl.update);
router.put('/updateroleuser/:id', userCtrl.moderateUser);
//router.delete('/delete' ,userCtrl.delete );
router.delete('/deleteuser/:id' ,userCtrl.deleteUser );
module.exports = router;