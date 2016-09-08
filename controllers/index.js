//  Controllers
const nodemailer = require('nodemailer');
const config = require('../config');
const Email = nodemailer.createTransport({service: 'Gmail', auth: config.auth});
const emailList = require('../data/emails.json');

exports.home = function (req, res) {
  res.render('index');
}

exports.portafolio = function(req, res) {
  // res.render('portafolio');
  res.render('work_in_progress');
}

exports.perfiles = function(req, res) {
  res.render('perfiles');
  // res.render('work_in_progress');
}

exports.perfil = function(req, res) {
  res.render('profiles/' + req.params.name);
  // res.render('work_in_progress');
}

exports.comunidad = function(req, res) {
  res.render('comunidad');
  // res.render('work_in_progress');
}

exports.blog = function(req, res) {
  // res.render('blog');
  res.render('work_in_progress');
}

exports.eventos = function(req, res) {
  res.render('eventos');
  // res.render('work_in_progress');
}

exports.evento = function(req, res) {
  res.render(req.params.eventName);
  // res.render('work_in_progress');
}

exports.contacto = function(req, res) {
  res.render('contacto');
}

exports.notFound = function(req, res) {
  res.render('notFound');
}

exports.jointEmail = function(req, res) {
  Email.sendMail({
    from: config.auth.user,
    to: 'developerjoint@gmail.com',
    subject: 'contacto@jointdeveloper.com',
    html: `<p>Equipo jointDeveloper,<br>El usuario <strong>${req.body.name}</strong> con correo <strong>${req.body.email}</strong>` +
          ` quiere comunicarse contigo a traves del siguiente mensaje: <p><br>` +
          `${req.body.msj}<br><br><br> Att,<br><br>jointDeveloper`
  });

  res.redirect('/');
}

exports.perfilEmail = function(req, res) {
  const name = req.params.name;
  Email.sendMail({
    from: config.auth.user,
    to: emailList[name].email || 'developerjoint@gmail.com',
    subject: 'contacto@jointdeveloper.com',
    html: `<p>Estimad@ ${emailList[name].name},<br><br>El usuario <strong>${req.body.name}</strong> con correo <strong>${req.body.email}</strong>` +
          ` quiere comunicarse contigo a traves del siguiente mensaje: <p><br>` +
          `${req.body.msj}<br><br><br> Att,<br><br>jointDeveloper`
  });

  res.redirect('/perfiles/' + name);
}
