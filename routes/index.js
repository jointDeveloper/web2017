const express = require('express');
const router = new express.Router();
const indexController = require('../controllers/index');
const { isLoggedIn } = require('../controllers/auth');

/* GET home page. */
router.get('/', indexController.index);

router.post('/contact', indexController.emailContact);

router.get('/profile', isLoggedIn, indexController.profile);

router.get('/logout', indexController.logout);

module.exports = router;
