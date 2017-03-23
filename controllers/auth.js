const passport = require('passport');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

exports.facebook = passport.authenticate('facebook', { scope: ['email'] });

exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/'
});
