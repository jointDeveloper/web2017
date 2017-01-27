const profile = require('../data/profile.json');
const event = require('../data/event.json');
const sponsor = require('../data/sponsor.json');

exports.index = function(req, res) {
  const profiles = profile.profiles[0];
  const next = event.next;
  const charla = event.charlas;
  const {events} = event;
  const sponsors = sponsor.sponsor[0];
  // console.log(sponsors);

  res.render('index', {
    profiles: profiles,
    next: next,
    charlas: charla,
    events: events,
    sponsors: sponsors
  });
};
