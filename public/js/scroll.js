($ => {
  $(() => {
    $('a[href^="#"]').on('click', function(ev) {
      const target = $(this.getAttribute('href'));
      if (typeof target !== 'undefined') {
        ev.preventDefault();
        $('html, body')
          .stop()
          .animate({
            scrollTop: target.offset().top
          },
          1000
        );
      }
    });
  });
})(jQuery);
