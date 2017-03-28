const passport = require('passport');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

const facebook = passport.authenticate('facebook');

const facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/'
});

module.exports = { isLoggedIn, facebook, facebookCallback };
