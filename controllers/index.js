const profile = require('../data/profile.json');
const event = require('../data/event.json');
const sponsor = require('../data/sponsor.json');
const auth = require('../config/auth');
const nodemailer = require('nodemailer');

exports.index = (req, res) => {
  const profiles = profile.profiles[0],
    next = event.next,
    charla = event.charlas,
    { events } = event,
    sponsors = sponsor.sponsor[0];

  res.render('index', {
    profiles: profiles,
    next: next,
    charlas: charla,
    events: events,
    sponsors: sponsors
  });
};

exports.emailContact = (req, res) => {
  const transporter = nodemailer.createTransport(
    `smtps://${auth.gmail.user}:${auth.gmail.pass}@smtp.gmail.com`
  );

  const mailOptions = {
    from: req.body.name + ' <' + req.body.email + '>',
    to: 'developerjoint@gmail.com',
    subject: 'Contacto Web jointDeveloper.com',
    html: `<b>Nombre: </b>${req.body.name}<br />
          <b>Correo Electrónico: </b>${req.body.email}<br />
          <p>${req.body.text}</p>`
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  });

  res.redirect('/');
};

exports.profile = (req, res) => {
  res.render('profile', {
    user: req.user.facebook
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
