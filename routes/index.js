const express = require('express');
const router = new express.Router();
const indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.index);

router.post('/contact', indexController.emailContact);

module.exports = router;
