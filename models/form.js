const resourceful = require('resourceful');
const Form = resourceful.define('form', function () {
  this.string('name1', {required: true});
  this.string('email1', {required: true}).format('email');
  this.string('gender', {required: true});
  this.string('name2');
  this.string('email2').format('email');
  this.timestamps();
});

module.exports = Form;
