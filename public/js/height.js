(function($) {
  $(function() {
    function changeHeight(element) {
      console.log('hola');
      let el = $("." + element);
      console.log(el.length);
      let maxHeight = 0;

      for (let i = 0; i < el.length; i++) {
        let height = Number($(el[i]).css('height').split('px')[0]);
        maxHeight = Math.max(maxHeight, height);
      }

      for (let i = 0; i < el.length; i++) 
        $(el[i]).css('height', `${maxHeight}px`);
    }

    changeHeight('event');
  });
})(jQuery);
