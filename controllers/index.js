//  Controllers
const nodemailer = require('nodemailer');
const config = require('../config');
const Email = nodemailer.createTransport({service: 'Gmail', auth: config.auth});
const emailList = require('../data/emails.json');
const Form = require('../models/form');
const uuid = require('uuid');

exports.home =  (req, res) => {
  res.render('index');
}

exports.portafolio = (req, res) => {
  // res.render('portafolio');
  res.render('work_in_progress');
}

exports.perfiles = (req, res) => {
  res.render('perfiles');
  // res.render('work_in_progress');
}

exports.perfil = (req, res) => {
  res.render('profiles/' + req.params.name);
  // res.render('work_in_progress');
}

exports.comunidad = (req, res) => {
  res.render('comunidad');
  // res.render('work_in_progress');
}

exports.blog = (req, res) => {
  // res.render('blog');
  res.render('work_in_progress');
}

exports.eventos = (req, res) => {
  res.render('eventos');
  // res.render('work_in_progress');
}

exports.evento = (req, res) => {
  res.render('events/' + req.params.eventName);
  // res.render('work_in_progress');
}

exports.registers = (req, res) => {
  let users = [];
  Form.all((err, data) => {
    if (err) {
      console.log('Error: ', err);
      return res.send(500, err);
    }
    for (let user in data) {
      users.push({
        name: data[user].name1,
        email: data[user].email
      });
    }
    res.json({users: users});
  });
}

exports.createForm = (req, res) => {
  Form.create({
    id: uuid.v4(),
    email: req.body.email,
    name1: req.body.nameH,
    gender: req.body.gender,
    name2: req.body.nameM
  }, (err, data) => {
    if (err) {
      console.log('Error: ', err);
      return res.send(500, err);
    }
    res.redirect('/');
  });
}

exports.contacto = (req, res) => {
  res.render('contacto');
}

exports.notFound = (req, res) => {
  res.render('notFound');
}

exports.jointEmail = (req, res) => {
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

exports.perfilEmail = (req, res) => {
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
