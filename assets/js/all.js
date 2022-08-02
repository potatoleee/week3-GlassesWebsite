"use strict";

$(document).ready(function () {
  $('.btn__buger').on('click', function (e) {
    $('.btn__buger').toggleClass('open');
    $('.nav__content').toggleClass('open');
    $('.btn__buger--middle').toggleClass('open');
  }); // 建議用上方寫法
  // $('.btn__buger').click(function(e){
  //   $('.btn__buger').toggleClass('open');
  //   $('.nav__content').toggleClass('open');
  //   $('.btn__buger--middle').toggleClass('open');
  // })
});
//# sourceMappingURL=all.js.map
