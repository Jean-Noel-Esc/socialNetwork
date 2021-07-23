const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
console.log("je suis route user");
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/findall', userCtrl.findAll);
router.get('/:id', userCtrl.findById);
router.put('/update', userCtrl.update);
router.delete('/delete' ,userCtrl.delete );
module.exports = router;