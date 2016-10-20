const express = require('express');
const controllers = require('../controllers');
var router = express.Router();

module.exports = (app, mountPoint) => {
  // GET
  router.get('/', controllers.home);
  // router.get('/acercade', controllers.about);
  router.get('/portafolio', controllers.portafolio);
  router.get('/perfiles', controllers.perfiles);
  router.get('/perfiles/:name', controllers.perfil);
  // router.get('/apoyanos', controllers.apoyanos);
  router.get('/comunidad', controllers.comunidad);
  router.get('/blog', controllers.blog);
  router.get('/eventos', controllers.eventos);
  router.get('/eventos/:eventName', controllers.evento);
  router.get('/contacto', controllers.contacto);
  router.get('/*', controllers.notFound);

  // POST
  router.post('/contacto', controllers.jointEmail);
  router.post('/eventos/:eventName', controllers.createForm);
  router.post('/contacto/:name', controllers.perfilEmail);

  app.use(mountPoint, router);
}
