(function($) {
  $(function() {
    const $gender = $('select');
    const $opt = $('#opt');
    let field;
    $gender.change(function() {
      if (this.value === "male") {
        $opt.append(`
          <br>Compañera:<br>
          <div class="row">
            <div class="col-6">
              <input type="text" name="nameM" value="" required placeholder="Nombre Completo">
            </div>
            <div class="col-6">
              <input type="email" name="email2" value="" placeholder="Correo Electrónico" required><br>
            </div>
          </div>`
        );
      } else {
        $opt.html("");
      }
    });
  });
})(jQuery);
