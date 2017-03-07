const profile = require('../data/profile.json'),
  event = require('../data/event.json'),
  sponsor = require('../data/sponsor.json'),
  { auth } = require('../config/index.js'),
  nodemailer = require('nodemailer');

exports.index = (req, res) => {
  const profiles = profile.profiles[0],
    next = event.next,
    charla = event.charlas,
    { events } = event,
    sponsors = sponsor.sponsor[0];
  // console.log(sponsors);

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
    'smtps://' + auth.user + ':' + auth.pass + '@smtp.gmail.com'
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
