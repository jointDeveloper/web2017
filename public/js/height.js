(function($) {
  $(function() {
    function changeHeightEvent() {
      let event = $('.event');
      let overlay = $('.overlay');
      let person = $('.person');
      let link = $('.link');
      let maxHeight = 0;

      for (let i = 0; i < event.length; i++) {
        let height = Number($(event[i]).css('height').split('px')[0]);
        maxHeight = Math.max(maxHeight, height);
      }

      for (let i = 0; i < overlay.length; i++) {
        let height = Number($(overlay[i]).css('height').split('px')[0]);
        maxHeight = Math.max(maxHeight, height);
      }

      for (let i = 0; i < person.length; i++) {
        let height = Number($(person[i]).css('height').split('px')[0]);
        maxHeight = Math.max(maxHeight, height);
      }

      for (let i = 0; i < link.length; i++) {
        let height = Number($(link[i]).css('height').split('px')[0]);
        maxHeight = Math.max(maxHeight, height);
      }

      for (
        let i = 0;
        i < event.length;
        i++
      ) $(event[i]).css('height', `${maxHeight}px`);

      for (
        let i = 0;
        i < overlay.length;
        i++
      ) $(overlay[i]).css('height', `${maxHeight}px`);

      for (
        let i = 0;
        i < person.length;
        i++
      ) $(person[i]).css('height', `${maxHeight}px`);

      for (
        let i = 0;
        i < link.length;
        i++
      ) $(link[i]).css('height', `${maxHeight}px`);
    }

    changeHeightEvent();
  });
})(jQuery);
