const express = require('express');
const controllers = require('../controllers');
var router = express.Router();

module.exports = function(app, mountPoint) {
  router.get('/', controllers.home);
  router.get('/about', controllers.about);
  router.get('/portafolio', controllers.portafolio);
  router.get('/perfiles', controllers.perfiles);
  router.get('/apoyanos', controllers.apoyanos);
  router.get('/comunidad', controllers.comunidad);
  router.get('/blog', controllers.blog);
  router.get('/eventos', controllers.eventos);
  router.get('/contacto', controllers.contacto);

  app.use(mountPoint, router);
}
