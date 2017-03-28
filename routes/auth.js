const express = require('express');
const passport = require('passport');
const router = new express.Router();
const authController = require('../controllers/auth');

router.get('/facebook', authController.facebook);

router.get('/facebook/callback', authController.facebookCallback);

module.exports = router;
