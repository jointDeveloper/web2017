const profile = require('../data/profile.json');
const event = require('../data/event.json');

exports.index = function(req, res) {
  const profiles = profile.profiles[0];
  const next = event.next;
  const charla = event.charlas;
  const {events} = event;
  // console.log(events);

  res.render('index', {
    profiles: profiles,
    next: next,
    charlas: charla,
    events: events
  });
};
