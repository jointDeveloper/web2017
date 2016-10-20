(function($) {
  $(function() {
    const $gender = $('select');
    const $opt = $('#opt');
    let field;
    $gender.change(function() {
      if (this.value === "male") {
        $opt.append(`
          Nombre (compañera):<br>
          <input type="text" name="nameM" value="" required><br>`
        );
      } else {
        $opt.html("");
      }
    });
  });
})(jQuery);
