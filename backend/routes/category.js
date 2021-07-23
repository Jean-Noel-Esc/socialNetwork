const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
console.log("je suis route category");
router.post('/create', categoryCtrl.create);


module.exports = router;