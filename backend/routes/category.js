const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
console.log("je suis route category");
router.post('/create', categoryCtrl.create);
//router.get('/:id', categoryCtrl.getOneCategory);
//router.put('/:id', categoryCtrl.updateCategory);
//router.delete('/:id', categoryCtrl.destroyCategory);


module.exports = router;