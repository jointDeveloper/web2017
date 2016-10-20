const resourceful = require('resourceful');
const Form = resourceful.define('form', function () {
  this.string('email', {required: true}).format('email');
  this.string('name1', {required: true});
  this.string('gender', {required: true});
  this.string('name2');
  this.timestamps();
});

module.exports = Form;
