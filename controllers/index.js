// Controllers

exports.home = function (req, res) {
  res.render('index');
}

exports.about = function(req, res) {
  //res.render('about');
  res.render('work_in_progress');
}

exports.portafolio = function(req, res) {
  //res.render('portafolio');
  res.render('work_in_progress');
}

exports.perfiles = function(req, res) {
  res.render('perfiles');
  //res.render('work_in_progress');
}

exports.perfil = function(req, res) {
  var name = req.params.name;
  res.render('profiles/' + name);
  //res.render('work_in_progress');
}

exports.apoyanos = function(req, res) {
  //res.render('apoyanos');
  res.render('work_in_progress');
}

exports.comunidad = function(req, res) {
  //res.render('comunidad');
  res.render('work_in_progress');
}

exports.blog = function(req, res) {
  //res.render('blog');
  res.render('work_in_progress');
}

exports.eventos = function(req, res) {
  //res.render('eventos');
  res.render('work_in_progress');
}

exports.contacto = function(req, res) {
  res.render('contacto');
}
